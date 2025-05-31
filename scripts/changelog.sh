#!/usr/bin/env bash
set -euo pipefail

REPO="bigcommerce/docs"
PATH_FILTER="reference/"

UNTIL_COMMIT=$(git show origin/main:.last_commit)

if [[ -z "$UNTIL_COMMIT" ]]; then
  echo "❌ FATAL: No commit found in .last_commit file"
  exit 1
fi

echo "🔍 Fetching commits for $REPO from HEAD until $UNTIL_COMMIT..."

commits=$(gh api "repos/$REPO/compare/$UNTIL_COMMIT...main" -q '.commits[].sha' | tac)

commit_links=()
matching_shas=()

for sha in $commits; do
  files=$(gh api "repos/$REPO/commits/$sha" --paginate -q '.files[].filename')

  while IFS= read -r file; do
    if [[ "$file" == *"$PATH_FILTER"* ]]; then
      short_sha=$(git rev-parse --short "$sha")
      commit_links+=("[bigcommerce/docs@\`$short_sha\`](https://github.com/bigcommerce/docs/commit/$sha)")
      matching_shas+=("$sha")
      break
    fi
  done <<<"$files"
done

if [[ ${#commit_links[@]} -eq 0 ]]; then
  echo "✅ No commits found that touch '$PATH_FILTER'"
else
  echo ""
  echo "📝 Changelog:"
  echo "${commit_links[*]}" | sed 's/ /, /g'

  echo ""
  echo "❓ Would you like to copy this to your clipboard? (y/N)"
  read -r response

  if [[ "$response" =~ ^[Yy]$ ]]; then
    # TODO: write to changeset file
    echo "${commit_links[*]}" | sed 's/ /, /g' | pbcopy
    echo "✅ Copied to clipboard!"
  fi

  if [[ ${#matching_shas[@]} -gt 0 ]]; then
    echo "${matching_shas[0]}" > .last_commit
    echo "💾 Wrote most recent commit SHA (${matching_shas[0]}) to .last_commit"
  fi
fi
