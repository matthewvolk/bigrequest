/**
 * Module dependencies
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import openapiTS from 'openapi-typescript';

/**
 * GitHub details
 */

const ghOwner = 'bigcommerce';
const ghRepoName = 'api-specs';
const ghRepoBranch = 'main';

/**
 * Optional. Useful in development if you are rate
 * limited by the GitHub API
 *
 * Reference:
 * https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
 *
 * Usage:
 * npm run generate -- YOUR_TOKEN_HERE
 */

const ghAccessToken = process.argv[2] ?? '';

/**
 * Relative path to parent folder in remote repository
 * containing all OpenAPI spec files
 *
 * Must not start with a leading forward slash
 * Must end with a trailing forward slash
 */

const ghSpecFilePath = 'reference/';

/**
 * Relative path to directory within this package's
 * source for where to save generated files
 *
 * Must not start with a leading forward slash
 * Must not end with a trailing forward slash
 */

const relativeOutputPath = 'src/generated';

async function generate() {
  /**
   * Reference:
   * https://docs.github.com/en/rest/git/trees#get-a-tree
   */

  const apiSpecRepoUrl = `https://api.github.com/repos/${ghOwner}/${ghRepoName}/git/trees/${ghRepoBranch}?recursive=true`;
  const response = await fetch(apiSpecRepoUrl, {
    ...(ghAccessToken && { headers: { authorization: `bearer ${ghAccessToken}` } }),
  });

  const { tree: allFilesInRepo } = await response.json();

  /**
   * Creates an array of objects containing relative
   * paths to OpenAPI spec files in the remote repo and
   * urls for each spec file blob
   */

  const specFilePathsAndUrls = allFilesInRepo
    .map((file) => {
      if (file.path.startsWith(ghSpecFilePath) && file.type === 'blob') {
        return { filePath: file.path, fileUrl: file.url };
      }

      return null;
    })
    .filter((n) => n);

  /**
   * Creates an array of githubusercontent urls that
   * serve unprocessed versions of the OpenAPI spec files
   * created above in YAML format
   */

  const specFileContentUrls = specFilePathsAndUrls.map(
    ({ filePath }) =>
      `https://raw.githubusercontent.com/${ghOwner}/${ghRepoName}/${ghRepoBranch}/${filePath}`,
  );

  /**
   * Absolute path of relative output path
   */

  const outputDir = path.join(process.cwd(), relativeOutputPath);

  /**
   * Create output directory to store type definition
   * files
   */

  await fs.mkdir(outputDir, { recursive: true });

  /**
   * Create an array of absolute paths for spec files
   */

  const localSpecFilePaths = specFileContentUrls.map((url) => {
    const ymlFileName = path.basename(url);
    const tsFileName = ymlFileName.replace(path.extname(ymlFileName), '.ts');

    return path.join(outputDir, tsFileName);
  });

  /**
   * Generate type definitions for each Open API spec
   * file retrieved from the api-specs GitHub
   * repository. The content for each file is stored
   * as a string in an array
   */

  const typeDefinitionPromises = specFileContentUrls.map((specUrl) => openapiTS(specUrl));
  const typeDefinitionContents = await Promise.all(typeDefinitionPromises);

  /**
   * Array of promises where each promise resolves
   * to a single typescript file written to the outpuDir
   */

  const filesToCreate = typeDefinitionContents.map((output, index) =>
    fs.writeFile(localSpecFilePaths[index], output),
  );

  /**
   * Write each file
   */

  await Promise.all(filesToCreate);

  /**
   * Retrieve raw yml contents of each file created above
   */

  const typeDefinitionYmlRequests = specFilePathsAndUrls.map(({ fileUrl }) =>
    fetch(fileUrl, {
      headers: {
        accept: 'application/vnd.github.VERSION.raw',
        ...(ghAccessToken && { authorization: `bearer ${ghAccessToken}` }),
      },
    }),
  );
  const typeDefinitionYmlResponses = await Promise.all(typeDefinitionYmlRequests);
  const typeDefinitionYmlBodies = typeDefinitionYmlResponses.map((res) => res.text());
  const typeDefinitionYmlContents = await Promise.all(typeDefinitionYmlBodies);

  /**
   * Creates an array of yml file names for v2 type
   * definitions
   */

  const v2TypeDefinitionFiles = typeDefinitionYmlContents
    .map((content, i) => {
      if (content.includes('https://api.bigcommerce.com/stores/{store_hash}/v2')) {
        return path.basename(specFilePathsAndUrls[i].filePath);
      }

      return null;
    })
    .filter((n) => n);

  /**
   * Creates an array of yml file names for v3 type
   * definitions
   */

  const v3TypeDefinitionFiles = typeDefinitionYmlContents
    .map((content, i) => {
      if (content.includes('https://api.bigcommerce.com/stores/{store_hash}/v3')) {
        return path.basename(specFilePathsAndUrls[i].filePath);
      }

      return null;
    })
    .filter((n) => n);

  /**
   * Create v2paths file
   */

  const v2File = `
    ${v2TypeDefinitionFiles
      .map(
        (file) =>
          `import * as ${file
            .replace(path.extname(file), '')
            .split(/[^A-Za-z0-9]/)
            .join('_')} from './${file.replace(path.extname(file), '')}';`,
      )
      .join('\n')}

    export type v2paths =
      ${v2TypeDefinitionFiles
        .map((file, i, files) => {
          if (i + 1 === files.length) {
            return `${file
              .replace(path.extname(file), '')
              .split(/[^A-Za-z0-9]/)
              .join('_')}.paths;`;
          }

          return `${file
            .replace(path.extname(file), '')
            .split(/[^A-Za-z0-9]/)
            .join('_')}.paths &`;
        })
        .join('\n')}
  `;

  /**
   * Create v3paths file
   */

  const v3File = `
    ${v3TypeDefinitionFiles
      .map(
        (file) =>
          `import * as ${file
            .replace(path.extname(file), '')
            .split(/[^A-Za-z0-9]/)
            .join('_')} from './${file.replace(path.extname(file), '')}';`,
      )
      .join('\n')}

    export type v3paths =
      ${v3TypeDefinitionFiles
        .map((file, i, files) => {
          if (i + 1 === files.length) {
            return `${file
              .replace(path.extname(file), '')
              .split(/[^A-Za-z0-9]/)
              .join('_')}.paths;`;
          }

          return `${file
            .replace(path.extname(file), '')
            .split(/[^A-Za-z0-9]/)
            .join('_')}.paths &`;
        })
        .join('\n')}
  `;

  /**
   * Write path files
   */

  await Promise.all([
    fs.writeFile(path.join(outputDir, 'v2.ts'), v2File),
    fs.writeFile(path.join(outputDir, 'v3.ts'), v3File),
  ]);
}

generate();
