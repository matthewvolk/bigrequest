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

### Automated Type Generation for the BigRequest HTTP Client

The BigCommerce API is constantly changing. As a best effort to ensure that the types for the request client stay updated in response to changes in the BigCommerce Open API Specs repository, [a scheduled GitHub Action](.github/workflows/nightly.yml) runs once a night to re-generate types against [the latest version of the bigcommerce/api-specs repository](https://github.com/bigcommerce/api-specs/tree/main).

If changes are introduced during the GitHub Action workflow, the action will open a PR for review (example: [matthewvolk/bigrequest#30](https://github.com/matthewvolk/bigrequest/pull/30)).

The PR should be analyzed to determine if the changes introduced by the action should result in a `patch`, `minor`, or `major` release. If a new release is required, the branch associated with the PR should be pulled down locally, `pnpm changeset` should be run on the branch, and the PR should be updated so that when merged, the changeset triggers a release to NPM (example: [matthewvolk/bigrequest#31](https://github.com/matthewvolk/bigrequest/pull/31)).

## Publishing

The BigRequest monorepository uses [changesets](https://github.com/changesets/changesets) to handle changelogs, semantic versioning, and publishing to the NPM public registry. In order for your pull request to be merged, you must think about whether or not the changes you introduce should result in releasing a new version of one of the packages to the NPM registry.

**Examples:**

- Pull request introducing changes to this `README.md`: _Does not need to be published to NPM._
- Pull request introducing changes to `packages/[bigexec|bigrequest]`: _Should be published to NPM._

If you determine that your pull request introduces changes that need to be released, you should submit a `changeset` with your Pull Request.

Navigate to the root of the parent `bigrequest` monorepository and run:

```sh
pnpm changeset
```

An interactive prompt will take you through the process of [adding your changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md).

Once your PR is merged, our [GitHub Action](.github/workflows/release.yml) will handle the process of versioning and publishing your changes to NPM. No further action is needed from you.
