#!/usr/bin/env bash
set -euo pipefail

# Check if PR number is provided
if [ $# -eq 0 ]; then
  echo "❌ Error: PR number is required"
  echo "Usage: $0 <pr_number>"
  exit 1
fi

KEEP_PR_NUMBER="$1"
SEARCH_QUERY='[nightly] in:title'
LIMIT=100

echo "Fetching up to $LIMIT PRs with title containing '[nightly]'..."
response=$(gh pr list --search "$SEARCH_QUERY" --state open --json number,title,createdAt,headRefName --limit "$LIMIT")

count=$(echo "$response" | jq 'length')

if [[ "$count" -eq 0 ]]; then
  echo "✅ No PRs found with '[nightly]' in the title. Exiting."
  exit 0
fi

# Check if the PR we want to keep exists in the list
to_keep=$(echo "$response" | jq --argjson keep_pr "$KEEP_PR_NUMBER" '.[] | select(.number == $keep_pr)')

if [[ -z "$to_keep" ]]; then
  echo "⚠️  Warning: PR #$KEEP_PR_NUMBER not found in the list of '[nightly]' PRs"
  echo "   This is likely because the GitHub API hasn't indexed the new PR yet."
  echo "   Will delete all existing '[nightly]' PRs to clean up stale ones."
  
  # When target PR not found, delete all existing PRs (they're all stale)
  to_delete="$response"
  to_keep_display="PR #$KEEP_PR_NUMBER (not yet indexed)"
else
  echo "✅ Found target PR #$KEEP_PR_NUMBER in the list."
  to_keep_display=$(echo "$to_keep" | jq -r '"PR #\(.number): \(.title)"')
  
  # Get all PRs except the one we want to keep
  to_delete=$(echo "$response" | jq --argjson keep_pr "$KEEP_PR_NUMBER" '[.[] | select(.number != $keep_pr)]')
fi

delete_count=$(echo "$to_delete" | jq 'length')

if [[ "$delete_count" -eq 0 ]]; then
  echo "✅ No PRs to delete. Target PR #$KEEP_PR_NUMBER is the only '[nightly]' PR."
  exit 0
fi

echo ""
echo "🗃️  Found $count '[nightly]' PRs. Will keep: $to_keep_display"
if [[ -n "$to_keep" ]]; then
  echo "$to_keep" | jq -r '"🔒 Keep PR #\(.number): \(.title) (created \(.createdAt))"'
fi
echo ""
echo "🧹 PRs to be closed and their branches deleted ($delete_count PRs):"
echo "$to_delete" | jq -r '.[] | "🗑️ Close PR #\(.number): \(.title) (branch: \(.headRefName), created \(.createdAt))"'
echo ""

echo ""
echo "🚧 Starting deletion..."
echo "$to_delete" | jq -c '.[]' | while read -r pr; do
  number=$(echo "$pr" | jq '.number')
  branch=$(echo "$pr" | jq -r '.headRefName')

  # Safety check: never delete the target PR (double-check protection)
  if [[ "$number" -eq "$KEEP_PR_NUMBER" ]]; then
    echo "🛡️  Safety check: Skipping PR #$number (target PR to keep)"
    continue
  fi

  echo "🔒 Closing PR #$number..."
  gh pr close "$number" --delete-branch
done

echo ""
echo "✅ Done. Kept PR #$KEEP_PR_NUMBER"
