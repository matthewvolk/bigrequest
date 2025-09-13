#!/usr/bin/env bash
set -euo pipefail

REPO="bigcommerce/docs"
PATH_FILTER="reference/"

git fetch --no-tags --depth=1 origin main
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
  
  # Get current git branch name for unique filename
  branch_name=$(git rev-parse --abbrev-ref HEAD)
  # Replace any special characters with hyphens for safe filename
  safe_branch_name=$(echo "$branch_name" | sed 's/[^a-zA-Z0-9]/-/g')
  changeset_file=".changeset/${safe_branch_name}.md"
  
  # Create the changeset file
  cat > "$changeset_file" << EOF
---
'bigrequest': patch
---

$(echo "${commit_links[*]}" | sed 's/ /, /g')
EOF
  
  echo "✅ Created changeset file: $changeset_file"

  if [[ ${#matching_shas[@]} -gt 0 ]]; then
    echo "${matching_shas[0]}" > .last_commit
    echo "💾 Wrote most recent commit SHA (${matching_shas[0]}) to .last_commit"
  fi
fi
