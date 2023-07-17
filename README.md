# BigRequest

A suite of tools for communication and authentication with the BigCommerce API.

## Packages

### [bigrequest](https://github.com/matthewvolk/bigrequest/tree/main/packages/bigrequest)

A Node.js HTTP request client for the BigCommerce API

### [bigexec](https://github.com/matthewvolk/bigrequest/tree/main/packages/bigexec)

A CLI tool used to interface with the BigCommerce API

## Contributing

### Requirements

- **Node.js:** `>=18`
- **PNPM:** `>=8`

### Getting Started

**1. Clone the repo**

```sh
git clone git@github.com:matthewvolk/bigrequest.git && cd bigrequest
```

**2. Install dependencies**

```sh
corepack enable pnpm
pnpm i
```

### Generating Types for the BigRequest HTTP Client

The BigCommerce API is constantly changing. There's a good chance that by the time you've cloned this repository, it might be out of date with recent changes pushed to the BigCommerce OpenAPI Specs repository: https://github.com/bigcommerce/api-specs

Before releasing a new package version, you'll want to regenerate types to ensure this package is published with the latest OpenAPI Spec changes, if any. To regenerate types, run the following command:

```sh
cd packages/bigrequest && pnpm run generate
```

If you run the `pnpm run generate` command above as-is, you'll likely see an error thrown due to rate limiting from GitHub (e.g., `TypeError: Cannot read properties of undefined (reading 'map')`). For unauthenticated requests, GitHub's rate limit [currently allows for up to 60 requests per hour](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

However, user access token requests increase that limit to 5,000 requests per hour, per authenticated user. The `pnpm run generate` command accepts an access token as an argument:

1. [Create a GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) (for scopes, only "Public Repositories (read-only)" is required)
2. Re-run the `pnpm run generate` command as follows, replacing `YOUR_ACCESS_TOKEN` with your actual access token:

```sh
pnpm run generate YOUR_ACCESS_TOKEN
```

## Publishing

The BigRequest monorepository uses [changesets](https://github.com/changesets/changesets) to handle changelogs, semantic versioning, and publishing to the NPM public registry. In order for your pull request to be merged, you must think about whether or not the changes you introduce should result in releasing a new version of one of the packages to the NPM registry.

**Examples:**

- Pull request introducing changes to this `README.md`: _Does not need to be published to NPM._
- Pull request introducing changes to `packages/[bigexec|bigrequest]`: _Does need to be published to NPM._

If you determine that your pull request introduces changes that need to be released, you should submit a `changeset` with your Pull Request.

Navigate to the root of the parent `bigrequest` monorepository and run:

```sh
pnpm changeset
```

An interactive prompt will take you through the process of [adding your changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md).

Once your PR is merged, our [GitHub Action](.github/workflows/release.yml) will handle the process of versioning and publishing your changes to NPM. No further action is needed from you.
