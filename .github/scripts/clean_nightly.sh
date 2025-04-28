#!/bin/bash

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

# === Sort PRs by number descending (higher = newer) ===
latest_pr_number=$(echo "$nightly_prs" | jq -s 'sort_by(.number) | reverse | .[0].number')

echo "Latest nightly PR is #$latest_pr_number."

# === Check if there are any nightly PRs ===
if [[ -z "$latest_pr_number" ]]; then
    echo "No nightly PRs found. Exiting."
    exit 0
fi

echo "Keeping PR #$latest_pr_number. Closing older ones..."

# === Iterate and close older PRs ===
for row in $(echo "$nightly_prs" | jq -r '. | @base64'); do
    _jq() {
     echo ${row} | base64 --decode | jq -r ${1}
    }

    pr_number=$(_jq '.number')
    branch_name=$(_jq '.branch')

    if [[ "$pr_number" != "$latest_pr_number" ]]; then
        echo "Closing PR #$pr_number and deleting branch $branch_name..."

        # Close PR
        curl -s -X PATCH -H "Authorization: Bearer $GITHUB_TOKEN" \
            -d '{"state": "closed"}' \
            "$API_URL/repos/$REPO_OWNER/$REPO_NAME/pulls/$pr_number"

        # # Delete branch
        curl -s -X DELETE -H "Authorization: Bearer $GITHUB_TOKEN" \
            "$API_URL/repos/$REPO_OWNER/$REPO_NAME/git/refs/heads/$branch_name"
    fi

done

# === END ===

echo "Done."
