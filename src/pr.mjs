import process from 'node:process';

const ghAccessToken = process.argv[2] ?? '';
const sinceDate = '2024-10-18';

if (!sinceDate) {
  console.error('Please provide a date in YYYY-MM-DD format as the second argument');
  process.exit(1);
}

async function fetchCommits(since) {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    ...(ghAccessToken && { Authorization: `token ${ghAccessToken}` }),
  };

  const url = `https://api.github.com/repos/bigcommerce/docs/commits?since=${since}`;
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`);
  }

  return response.json();
}

async function fetchPRFromCommit(commitSha) {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    ...(ghAccessToken && { Authorization: `token ${ghAccessToken}` }),
  };

  // Search for PRs associated with this commit
  const url = `https://api.github.com/repos/bigcommerce/docs/commits/${commitSha}/pulls`;
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`);
  }

  const prs = await response.json();

  return prs[0]; // Return the first PR (most relevant one)
}

async function fetchPRFiles(prNumber) {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    ...(ghAccessToken && { Authorization: `token ${ghAccessToken}` }),
  };

  const url = `https://api.github.com/repos/bigcommerce/docs/pulls/${prNumber}/files`;
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`);
  }

  return response.json();
}

async function main() {
  try {
    const commits = await fetchCommits(sinceDate);
    const referencePRs = new Set(); // Using Set to avoid duplicates

    console.log('Processing commits since', sinceDate, '...\n');

    // eslint-disable-next-line no-restricted-syntax
    for (const commit of commits) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const pr = await fetchPRFromCommit(commit.sha);

        if (pr) {
          // eslint-disable-next-line no-await-in-loop
          const files = await fetchPRFiles(pr.number);

          // Check if any file is in the reference/ directory
          const hasReferenceFiles = files.some((file) => file.filename.startsWith('reference/'));

          if (hasReferenceFiles) {
            referencePRs.add(`bigcommerce/docs#${pr.number}`);
          }
        }
      } catch (error) {
        console.warn(`Warning: Could not process commit ${commit.sha}:`, error.message);
      }
    }

    console.log('PRs that modified files in reference/ directory:\n');
    console.log([...referencePRs].join('\n'));
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
