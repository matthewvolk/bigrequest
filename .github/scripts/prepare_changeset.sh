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

# === Find nightly PRs ===
nightly_prs=$(echo "$prs" | jq -r '.[] | select(.user.login == "github-actions[bot]" and 
    (.head.ref | type) == "string" and 
    (.head.ref // "" | startswith("'"$BRANCH_PREFIX"'")))')

echo "Found $(echo "$nightly_prs" | jq -s '. | length') nightly PRs."

# === Sort by PR number descending and pick latest ===
latest_pr=$(echo "$nightly_prs" | jq -s 'sort_by(.number) | reverse | .[0]')

latest_branch=$(echo "$latest_pr" | jq -r '.head.ref')
branch_repo_fullname=$(echo "$latest_pr" | jq -r '.head.repo.full_name')
branch_repo_clone_url=$(echo "$latest_pr" | jq -r '.head.repo.clone_url')

if [[ -z "$latest_branch" || "$latest_branch" == "null" ]]; then
    echo "No nightly branches found. Exiting."
    exit 1
fi

echo "Latest branch: $latest_branch"
echo "Branch source repo: $branch_repo_fullname"

# === Add remote for PR source repo if needed ===
remote_name="branch-remote"

if ! git remote get-url "$remote_name" &> /dev/null; then
    echo "Adding remote $remote_name -> $branch_repo_clone_url"
    git remote add "$remote_name" "$branch_repo_clone_url"
else
    echo "Remote $remote_name already exists."
fi

# === Fetch the latest branch from its source repo ===
echo "Fetching branch $latest_branch from $remote_name..."

git fetch "$remote_name" "$latest_branch:$latest_branch"

# === Checkout latest branch ===
echo "Checking out $latest_branch..."

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

Update generated types based on bigcommerce/docs changes
EOF

# === END ===
echo "✅ Done. Created changeset file: $changeset_file"