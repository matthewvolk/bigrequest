#!/bin/bash

set -e

# === CONFIGURATION ===
GITHUB_TOKEN="$GITHUB_TOKEN"
GITHUB_API="https://api.github.com"
SOURCE_REPO_OWNER="bigcommerce"
SOURCE_REPO_NAME="docs"
TARGET_REPO_OWNER="matthewvolk"  # or your fork
TARGET_REPO_NAME="bigrequest"
CHANGESET_DIR=".changeset"
BRANCH_PREFIX="nightly-"

REFERENCE_FOLDER="reference/"

echo "Enhancing changeset file based on commits from $SOURCE_REPO_OWNER/$SOURCE_REPO_NAME..."

# === Step 1: Get the timestamp of the latest tag from BigRequest ===
latest_tag=$(git describe --tags --abbrev=0 || echo "")
if [[ -z "$latest_tag" ]]; then
    echo "⚠️ No previous tag found. Using last 7 days as fallback."
    since_date=$(date -u -d '-7 days' +"%Y-%m-%dT%H:%M:%SZ")
else
    echo "Found latest tag: $latest_tag"
    tag_commit_date=$(git log -1 --format=%cI "$latest_tag")
    since_date="$tag_commit_date"
fi

echo "Fetching commits from $SOURCE_REPO_OWNER/$SOURCE_REPO_NAME since $since_date..."

# === Step 2: Get commits since that date ===
commits_json=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
    "$GITHUB_API/repos/$SOURCE_REPO_OWNER/$SOURCE_REPO_NAME/commits?since=$since_date&per_page=100")

# === Step 3: Filter commits that touched /reference/ ===
relevant_commits=()

commit_shas=$(echo "$commits_json" | jq -r '.[].sha')

for sha in $commit_shas; do
    commit_detail=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
        "$GITHUB_API/repos/$SOURCE_REPO_OWNER/$SOURCE_REPO_NAME/commits/$sha")

    touched_files=$(echo "$commit_detail" | jq -r '.files[].filename')

    for file in $touched_files; do
        if [[ "$file" == $REFERENCE_FOLDER* ]]; then
            echo "✅ Commit $sha touches $REFERENCE_FOLDER"
            relevant_commits+=("$sha")
            break
        fi
    done
done

if [[ ${#relevant_commits[@]} -eq 0 ]]; then
    echo "❌ No relevant commits touching $REFERENCE_FOLDER. Exiting."
    exit 0
fi

# === Step 4: Find PRs associated with each relevant commit ===
echo "Looking up PRs associated with relevant commits..."

changeset_lines="Update generated types based on bigcommerce/docs changes:\n\n"

for sha in "${relevant_commits[@]}"; do
    prs_json=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.groot-preview+json" \
        "$GITHUB_API/repos/$SOURCE_REPO_OWNER/$SOURCE_REPO_NAME/commits/$sha/pulls")

    pr_number=$(echo "$prs_json" | jq -r '.[0].number')
    pr_title=$(echo "$prs_json" | jq -r '.[0].title')

    if [[ "$pr_number" != "null" ]]; then
        echo "Found PR #$pr_number for commit $sha"
        changeset_lines+="- ${pr_title} [#${pr_number}](https://github.com/$SOURCE_REPO_OWNER/$SOURCE_REPO_NAME/pull/${pr_number})\n"
    else
        echo "⚠️ No PR found for commit $sha. Linking to commit instead."
        commit_message=$(echo "$commit_detail" | jq -r '.commit.message' | head -n 1)
        changeset_lines+="- ${commit_message} ([commit](https://github.com/$SOURCE_REPO_OWNER/$SOURCE_REPO_NAME/commit/${sha}))\n"
    fi
done

# === Step 5: Find the .changeset/*.md file ===
changeset_file=$(find "$CHANGESET_DIR" -name "*.md" | head -n 1)

if [[ -z "$changeset_file" ]]; then
    echo "❌ No changeset file found. Exiting."
    exit 1
fi

echo "Updating $changeset_file with enhanced commit/PR info..."

# === Step 6: Replace description after second YAML delimiter ===
awk '
BEGIN {found=0}
{
    print $0
    if ($0 == "---") {
        found++
    }
    if (found == 2) {
        exit
    }
}' "$changeset_file" > "${changeset_file}.tmp"

echo -e "$changeset_lines" >> "${changeset_file}.tmp"

mv "${changeset_file}.tmp" "$changeset_file"

echo "✅ Changeset file updated!"

# === Step 7: Commit and push ===
echo "Committing and pushing enhanced changeset..."

# git config user.name "github-actions[bot]"
# git config user.email "github-actions[bot]@users.noreply.github.com"

# git add "$changeset_file"
# git commit -m "chore: enhance changeset with linked PRs from bigcommerce/docs"
# git push origin HEAD

echo "🎉 All done! Changeset enhanced and pushed!"
