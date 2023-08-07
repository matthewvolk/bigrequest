#!/usr/bin/env node

const userNodeVersion = process.versions.node;
const userNodeMajorVersion = parseInt(userNodeVersion.split('.')[0], 10);
const minimumMajorVersion = 18;

if (userNodeMajorVersion < minimumMajorVersion) {
  console.error(`\nError: Your Node.js version is ${userNodeVersion}`);
  console.error(`Please use Node.js v${minimumMajorVersion} or higher.\n`);
  process.exit(1);
}

import { input, select } from '@inquirer/prompts';
import bigrequest from 'bigrequest';
import { blue, green } from 'chalk';
import { mind } from 'gradient-string';
import { z } from 'zod';

const logo = [
  '                                   ,%',
  '                                 @@@%',
  '                             ,,@@@@@%',
  '                            @@@@@@@@%',
  '                        ,*@@@@@@@@@@%',
  '                       @@@@@@@@@@@@@%',
  '                            ,@@@@@@@%',
  '                   @@@@@@*    @@@@@@%',
  '                   @@@@@@    *@@@@@@%',
  '             @@            ,@@@@@@@@%',
  '          /@@@@    @@@@@@@   ,@@@@@@%',
  '        @@@@@@@    @@@@@@&    @@@@@@%',
  '     (@@@@@@@@@              @@@@@@@%',
  '   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%',
  '(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%',
].join('\n');

const promptAndValidateChannelSite = async (
  storeHash: string,
  accessToken: string,
  channelId: number,
) => {
  const channelSiteInput = await input({
    message:
      'Please enter the URL your channel will be available at (you can always change this later)',
    validate: (val) =>
      z.string().url().safeParse(val).success || 'Please enter a valid URL including scheme',
  });

  const bc = bigrequest.rest({ storeHash, accessToken });

  const channelSiteRes = await bc.v3.POST('/channels/{channel_id}/site', {
    params: {
      path: { channel_id: channelId },
      header: { 'Content-Type': 'application/json', Accept: 'application/json' },
    },
    body: { channel_id: channelId, url: channelSiteInput },
  });

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (channelSiteRes.error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error(channelSiteRes.error);

    await promptAndValidateChannelSite(storeHash, accessToken, channelId);
  }
};

const main = async () => {
  console.log(`\n${mind(logo)}\n`);

  const menuSelection = await select({
    message: 'What would you like to do today?',
    choices: [
      { name: 'Create a Headless Storefront Channel', value: 'headless' },
      { name: 'Quit', value: 'quit' },
    ],
  });

  if (menuSelection === 'quit') {
    console.log('Goodbye.\n');
    process.exit(0);
  }

  const storeHash = await input({
    message: 'Please enter your store hash',
    validate: (val) => (!val.length ? 'Please enter a value' : true),
  });

  console.log(`${green('i')} Please create a new V2/V3 API Token with the following scopes:
    - Carts: modify
    - Sites & Routes: modify
    - Channel Settings: modify
    - Storefront API Tokens: manage
    - Storefront API Customer Impersonation Tokens: manage
    
  Click here to create: ${blue.underline(
    'http://login.bigcommerce.com/deep-links/settings/api-accounts',
  )}`);

  const accessToken = await input({
    message: 'Please enter your access token',
    validate: (val) => (!val.length ? 'Please enter a value' : true),
  });

  // TODO: recursively prompt
  const newChannelName = await input({
    message: 'Please enter a name for your headless channel',
  });

  const platform = await select({
    message: 'Please choose a platform for your headless channel',
    choices: [
      { name: 'Gatsby', value: 'gatsby' },
      { name: 'Wordpress', value: 'wordpress' },
      { name: 'Drupal', value: 'drupal' },
      { name: 'Acquia', value: 'acquia' },
      { name: 'Bloomreach', value: 'bloomreach' },
      { name: 'Deity', value: 'deity' },
      { name: 'Next.js', value: 'next' },
      { name: 'Vue', value: 'vue' },
    ],
  });

  const bc = bigrequest.rest({ storeHash, accessToken });

  const createChannelRes = await bc.v3.POST('/channels', {
    body: {
      name: newChannelName,
      platform,
      type: 'storefront',
      status: 'active',
      is_visible: true,
      is_listable_from_ui: true,
    },
    params: { header: { 'Content-Type': 'application/json', Accept: 'application/json' } },
  });

  if (createChannelRes.error) {
    console.error(createChannelRes.error);
    process.exit(1);
  }

  if (!createChannelRes.data.data || !createChannelRes.data.data.id) {
    throw new Error('Cannot parse Channel ID');
  }

  const channelId = createChannelRes.data.data.id;

  await promptAndValidateChannelSite(storeHash, accessToken, channelId);

  const createCITRes = await bc.v3.POST('/storefront/api-token-customer-impersonation', {
    params: {
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
    body: {
      channel_id: channelId,
      expires_at: Math.floor(
        new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getTime() / 1000,
      ),
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (createCITRes.error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error(createCITRes.error);
  }

  const cit = createCITRes.data.data?.token;

  console.log(green('\nChannel Created!'));
  console.log('Please use the information below for your new Headless Storefront Channel.\n');
  console.log(`BigCommerce Channel ID: ${green(channelId)}`);
  console.log(`BigCommerce Store Hash: ${green(storeHash)}`);
  console.log(`BigCommerce Access Token: ${green(accessToken)}`);
  console.log(`Customer Impersonation Token: ${green(cit)}\n`);
};

void main();
