#!/usr/bin/env node

import { Command, Option } from '@commander-js/extra-typings';
import { pathExistsSync, readFileSync, readJsonSync, writeJsonSync } from 'fs-extra';
import { homedir } from 'os';
import { join } from 'path';
import * as z from 'zod';

import PACKAGE_INFO from '../package.json';

import { rest } from './rest';

const CONFIG_FILE_PATH = join(homedir(), '.bigrequest');
const CONFIG_FILE_SCHEMA = z.object({
  storeHash: z.string(),
  accessToken: z.string(),
  jq: z.boolean(),
  scopes: z.array(z.string()),
});

const getConfig = () => {
  if (!pathExistsSync(join(CONFIG_FILE_PATH, 'config.json'))) {
    console.error('\nNo config file found. Please run `login` to create one.\n');
    process.exit(0);
  }

  const { currentStore } = z
    .object({ currentStore: z.string() })
    .parse(readJsonSync(join(CONFIG_FILE_PATH, 'config.json')));

  return CONFIG_FILE_SCHEMA.parse(readJsonSync(join(CONFIG_FILE_PATH, `${currentStore}.json`)));
};

const camelCase = (input: string) =>
  input.toLowerCase().replace(/_(.)/g, (_match, group1: string) => group1.toUpperCase());

const getScopesForToken = async ({
  storeHash,
  accessToken,
}: {
  storeHash: string;
  accessToken: string;
}) => {
  const response = await fetch(`https://api.bigcommerce.com/stores/${storeHash}/graphql`, {
    method: 'POST',
    headers: {
      'X-Auth-Token': accessToken,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `query getScopesForToken { client { scopes { edges { node } } } }`,
    }),
  });

  if (response.status === 404) {
    console.error('ERROR: Invalid store hash\n');
    process.exit(1);
  }

  if (response.status === 401) {
    console.error('ERROR: Invalid access token\n');
    process.exit(1);
  }

  if (!response.ok) {
    console.error(`ERROR: ${response.status} ${response.statusText}\n`);
    process.exit(1);
  }

  const ScopesForTokenSchema = z.object({
    data: z.object({
      client: z.object({
        scopes: z.object({
          edges: z.array(z.object({ node: z.string() })),
        }),
      }),
    }),
  });

  return ScopesForTokenSchema.parse(await response.json()).data.client.scopes.edges.map(
    ({ node }) => node,
  );
};

const program = new Command()
  .name(PACKAGE_INFO.name)
  .version(PACKAGE_INFO.version)
  .description('A command line tool for interfacing with the BigCommerce API.');

program
  .command('whoami', { isDefault: true })
  .description('Display connected store hash and available token scopes.')
  .action(() => {
    console.log(`\n◢ ${PACKAGE_INFO.name} v${PACKAGE_INFO.version}`);

    const config = getConfig();

    console.log(`\nAuthenticated with store: ${config.storeHash}`);
    console.log(`Scopes: \n - ${config.scopes.join('\n - ')}\n`);
    process.exit(0);
  });

program
  .command('login')
  .description('Authenticate with a BigCommerce store with a store hash and access token.')
  .option('-h, --store-hash <storeHash>', 'Your BigCommerce store hash')
  .option('-t, --access-token <accessToken>', 'Your BigCommerce store access token')
  .option('-f, --file <file>', 'API account credentials file in .txt format')
  .action(async (options) => {
    console.log(`\n◢ ${PACKAGE_INFO.name} v${PACKAGE_INFO.version}\n`);

    if (options.storeHash || options.accessToken) {
      if (options.storeHash && !options.accessToken) {
        if (!pathExistsSync(join(CONFIG_FILE_PATH, `${options.storeHash}.json`))) {
          console.error('No config file found. Please run `login` to create one.\n');
          process.exit(0);
        }

        writeJsonSync(
          join(CONFIG_FILE_PATH, 'config.json'),
          { currentStore: options.storeHash },
          { spaces: 2 },
        );

        console.log(`Success! Authenticated with store: ${options.storeHash}\n`);

        process.exit(0);
      }

      const parsed = z.object({ storeHash: z.string(), accessToken: z.string() }).parse(options);

      const scopes = await getScopesForToken(parsed);

      const config = CONFIG_FILE_SCHEMA.parse({
        ...parsed,
        jq: false,
        scopes,
      });

      writeJsonSync(
        join(CONFIG_FILE_PATH, 'config.json'),
        { currentStore: parsed.storeHash },
        { spaces: 2 },
      );

      writeJsonSync(join(CONFIG_FILE_PATH, `${parsed.storeHash}.json`), config, { spaces: 2 });

      console.log(`Success! Authenticated with store: ${parsed.storeHash}\n`);

      process.exit(0);
    }

    if (options.file) {
      const fileRaw = readFileSync(options.file, 'utf-8');
      const file = fileRaw.replace(/[^\x20-\x7E]+/g, '\n');
      const trimmed = file.trim();
      const lines = trimmed.split('\n');
      const filtered = lines.filter((line) => !line.startsWith('NAME'));

      const formatted = filtered.map((line) => {
        if (line.startsWith('API PATH:')) {
          const storeHash = line.split('/')[4];

          return `STORE_HASH=${storeHash}`;
        }

        return line.replace(/: /, '=').replace(/ /g, '_');
      });

      const credentials = z.object({ storeHash: z.string(), accessToken: z.string() }).parse(
        formatted.reduce<{ [key: string]: string }>((acc, current) => {
          const [key, value] = current.split('=');

          if (!['STORE_HASH', 'ACCESS_TOKEN'].includes(key)) {
            return acc;
          }

          acc[camelCase(key)] = value;

          return acc;
        }, {}),
      );

      const scopes = await getScopesForToken(credentials);

      const config = {
        ...credentials,
        jq: false,
        scopes,
      };

      writeJsonSync(
        join(CONFIG_FILE_PATH, 'config.json'),
        { currentStore: credentials.storeHash },
        { spaces: 2 },
      );

      writeJsonSync(join(CONFIG_FILE_PATH, `${credentials.storeHash}.json`), config, { spaces: 2 });

      console.log(`Success! Authenticated with store: ${credentials.storeHash}\n`);

      process.exit(0);
    }

    console.error('Please provide a store hash and access token or a file with credentials.\n');
    process.exit(1);
  });

program
  .command('config')
  .option('--jq', 'Output raw JSON for easy piping to jq')
  .action((options) => {
    if (options.jq) {
      const config = getConfig();

      config.jq = !config.jq;

      writeJsonSync(join(CONFIG_FILE_PATH, `${config.storeHash}.json`), config, { spaces: 2 });
    }

    const mostRecentConfig = getConfig();

    if (mostRecentConfig.jq) {
      console.log(JSON.stringify(mostRecentConfig));
      process.exit(0);
    }

    console.log(mostRecentConfig);
  });

const STATUSES = [
  'prelaunch',
  'active',
  'inactive',
  'connected',
  'disconnected',
  'archived',
  'deleted',
  'terminated',
] as const;

const TYPES = ['marketplace', 'marketing', 'pos', 'storefront'] as const;

const channels = program
  .command('channels')
  .option('-a, --available', 'List only available channels')
  .addOption(
    new Option('-s:in, --status:in <statuses...>', 'Statuses to filter by').choices(STATUSES),
  )
  .addOption(new Option('-t:in, --type:in <types...>', 'Filter by channel type').choices(TYPES))
  .option('-p:in, --platform:in <platform...>', 'Filter by platform')
  .option('-l, --limit <limit>', 'Limit the number of results')
  .option('--page <number>', 'Page number for a paginated response')
  .description('List all channels for the authenticated store.')
  .action(async (options) => {
    const config = getConfig();

    const channelsResponse = await rest(config).v3.GET('/channels', {
      params: {
        header: { Accept: 'application/json' },
        query: {
          available: options.available,
          'status:in': options['status:in'],
          'type:in': options['type:in'],
          'platform:in': options['platform:in'],
          ...(options.limit ? { limit: parseInt(options.limit, 10) } : {}),
          ...(options.page ? { page: parseInt(options.page, 10) } : {}),
        },
      },
    });

    if (config.jq) {
      console.log(JSON.stringify(channelsResponse));
      process.exit(0);
    }

    console.log(channelsResponse);
  });

channels
  .command('get <channelId>')
  .description('Get a single channel by ID.')
  .addOption(
    new Option('--include <include>', 'Subresources to be included in response').choices([
      'currencies',
    ] as const),
  )
  .action(async (channelId, options) => {
    const config = getConfig();

    const channel = await rest(config).v3.GET(`/channels/{channel_id}`, {
      params: {
        path: { channel_id: parseInt(channelId, 10) },
        header: { Accept: 'application/json' },
        query: {
          include: options.include,
        },
      },
    });

    if (config.jq) {
      console.log(JSON.stringify(channel));
      process.exit(0);
    }

    console.log(channel);
  });

channels
  .command('create')
  .description('Create a new channel.')
  .requiredOption('-n, --name <name>', 'The name of the channel')
  .addOption(
    new Option('-t, --type <type>', 'The type of the channel').choices(TYPES).makeOptionMandatory(),
  )
  .requiredOption('-p, --platform <platform>', 'The channel platform')
  .addOption(new Option('-s, --status <status>', 'The channel status').choices(STATUSES))
  .option('--is-listable-from-ui', 'Create listings from BigCommerce UI')
  .option('--is-visible', 'Display channel in Channel Manager')
  .option('--external-id <id>', 'Associated ID within a platform outside of BigCommerce')
  .option('--app-id <id>', 'The unique id given to an app registered in DevTools')
  .action(async (options) => {
    const config = getConfig();

    const channel = await rest(config).v3.POST('/channels', {
      params: {
        header: { Accept: 'application/json', 'Content-Type': 'application/json' },
      },
      body: {
        name: options.name,
        type: options.type,
        platform: options.platform,
        status: options.status,
        is_listable_from_ui: options.isListableFromUi,
        external_id: options.externalId,
        config_meta: {
          ...(options.appId ? { app: { id: parseInt(options.appId, 10) } } : {}),
        },
      },
    });

    if (config.jq) {
      console.log(JSON.stringify(channel));
      process.exit(0);
    }

    console.log(channel);
  });

channels
  .command('delete <channelId>')
  .description('Delete a channel by ID.')
  .action(async (channelId) => {
    const config = getConfig();

    const channel = await rest(config).v3.PUT(`/channels/{channel_id}`, {
      params: {
        path: { channel_id: parseInt(channelId, 10) },
        header: { Accept: 'application/json', 'Content-Type': 'application/json' },
      },
      body: {
        status: 'deleted',
      },
    });

    if (config.jq) {
      console.log(JSON.stringify(channel));
      process.exit(0);
    }

    console.log(channel);
  });

program.parse(process.argv);
