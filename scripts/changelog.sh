#!/usr/bin/env bash
set -euo pipefail

REPO="bigcommerce/docs"
PATH_FILTER="reference/"

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <until_commit_sha>"
  exit 1
fi
UNTIL_COMMIT="$1"

echo "🔍 Fetching commits for $REPO from HEAD until $UNTIL_COMMIT..."

branch="main"
all_commits=$(gh api "repos/$REPO/commits?sha=$branch" --paginate -q ".[].sha")

found=0
matching_commits=()
for sha in $all_commits; do
  if [[ "$sha" == "$UNTIL_COMMIT" ]]; then
    break
  fi

  files=$(gh api repos/$REPO/commits/$sha -q '.files[].filename')

  while IFS= read -r file; do
    if [[ "$file" == *"$PATH_FILTER"* ]]; then
      short_sha=$(echo "$sha" | cut -c1-7)
      matching_commits+=("$REPO@$short_sha")
      break
    fi
  done <<< "$files"
done

if [[ ${#matching_commits[@]} -eq 0 ]]; then
  echo "✅ No commits found that touch '$PATH_FILTER'"
else
  echo ""
  echo "📝 Commits touching '$PATH_FILTER':"
  for entry in "${matching_commits[@]}"; do
    echo "$entry"
  done
fi
