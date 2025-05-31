#!/usr/bin/env bash
set -euo pipefail

SEARCH_QUERY='[nightly] in:title'
LIMIT=100

echo "Fetching up to $LIMIT PRs with title containing '[nightly]'..."
response=$(gh pr list --search "$SEARCH_QUERY" --state open --json number,title,createdAt,headRefName --limit "$LIMIT")

count=$(echo "$response" | jq 'length')

if [[ "$count" -eq 0 ]]; then
  echo "✅ No PRs found with '[nightly]' in the title. Exiting."
  exit 0
fi

if [[ "$count" -eq 1 ]]; then
  echo "✅ Only 1 '[nightly]' PR found. Nothing to delete."
  exit 0
fi

sorted=$(echo "$response" | jq 'sort_by(.createdAt)')

to_delete=$(echo "$sorted" | jq '.[0:-1]') 
to_keep=$(echo "$sorted" | jq '.[-1]')

echo ""
echo "🗃️  Found $count '[nightly]' PRs. Will keep the most recent one:"
echo "$to_keep" | jq -r '"🔒 Keep PR #\(.number): \(.title) (created \(.createdAt))"'
echo ""
echo "🧹 PRs to be closed and their branches deleted:"
echo "$to_delete" | jq -r '.[] | "🗑️ Close PR #\(.number): \(.title) (branch: \(.headRefName), created \(.createdAt))"'
echo ""

read -p "❓ Proceed with deletion of the above PRs and branches? (y/N): " confirm
if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
  echo "❌ Aborted by user."
  exit 1
fi

echo ""
echo "🚧 Starting deletion..."
echo "$to_delete" | jq -c '.[]' | while read -r pr; do
  number=$(echo "$pr" | jq '.number')
  branch=$(echo "$pr" | jq -r '.headRefName')

  echo "🔒 Closing PR #$number..."
  gh pr close "$number" --delete-branch
done

echo ""
echo "✅ Done. Kept PR #$(echo "$to_keep" | jq '.number')"
