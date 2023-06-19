#!/usr/bin/env node

import { input, select } from '@inquirer/prompts';
import { blue, green } from 'chalk';
import { mind } from 'gradient-string';

import { rest } from './rest';

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

const main = async () => {
  console.log(`\n${mind(logo)}\n`);

  const menuSelection = await select({
    message: 'What would you like to do today?',
    choices: [
      { name: 'Create a Next.js Commerce Channel', value: 'nextjs' },
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
    - Channel Settings: modify
    - Sites & Routes: modify
    - Carts: modify
    - Storefront API Tokens: manage
    - Storefront API Customer Impersonation Tokens: manage
    
  Click here to create: ${blue.underline(
    'http://login.bigcommerce.com/deep-links/settings/api-accounts',
  )}`);

  const accessToken = await input({
    message: 'Please enter your access token',
    validate: (val) => (!val.length ? 'Please enter a value' : true),
  });

  const newChannelName = await input({
    message: 'Please enter a name for your headless channel',
  });

  const bc = rest({ storeHash, accessToken });

  const createChannelRes = await bc.v3.post('/channels', {
    body: {
      name: newChannelName,
      platform: 'next',
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

  console.log(green('\nChannel Created!'));
  console.log('Please use the information below for your new Next.js Commerce Channel.\n');
  console.log(`BigCommerce Channel ID: ${green(createChannelRes.data.data.id)}`);
  console.log(`BigCommerce Store Hash: ${green(storeHash)}`);
  console.log(`BigCommerce Access Token: ${green(accessToken)}\n`);
};

void main();
