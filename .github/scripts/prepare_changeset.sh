#!/bin/bash

set -e

# === CONFIGURATION ===
GITHUB_TOKEN="$GITHUB_TOKEN"
REPO_OWNER="matthewvolk"
REPO_NAME="bigrequest"
API_URL="https://api.github.com"
BRANCH_PREFIX="nightly-"

# === DEBUG CHECKS ===
echo "Running with configuration:"
echo "- Repository: $REPO_OWNER/$REPO_NAME"
echo "- API URL: $API_URL"
echo "- Branch prefix: $BRANCH_PREFIX"

echo "Fetching open PRs to find latest nightly branch..."

# === FETCH PRS ===
echo "Fetching open PRs..."

prs=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
    "$API_URL/repos/$REPO_OWNER/$REPO_NAME/pulls?state=open")

echo "Fetched $(echo "$prs" | jq '. | length') open PRs."

nightly_prs=$(echo "$prs" | jq -r '.[] | select(.user.login == "github-actions[bot]" and 
    (.head.ref | type) == "string" and 
    (.head.ref // "" | startswith("'"$BRANCH_PREFIX"'"))) | 
    {number: .number, branch: .head.ref}')
echo "Found $(echo "$nightly_prs" | jq -s '. | length') nightly PRs."

# === Sort by PR number descending ===
latest_branch=$(echo "$nightly_prs" | jq -s -r 'sort_by(.number) | reverse | .[0].branch')

if [[ -z "$latest_branch" ]]; then
    echo "No nightly branches found. Exiting."
    exit 1
fi

echo "Checking out latest nightly branch: $latest_branch"

# === Checkout latest branch ===
git fetch origin

git checkout "$latest_branch"

# === Create .changeset directory if needed ===
mkdir -p .changeset

# === Generate a UUID for changeset file name ===
change_id=$(uuidgen | tr '[:upper:]' '[:lower:]')

changeset_file=".changeset/$change_id.md"

# === Create changeset file ===
echo "Creating changeset file: $changeset_file"

cat <<EOF > "$changeset_file"
---
"bigrequest": patch
---

Update generated types from bigcommerce/docs changes
EOF

# === END ===
echo "Done."