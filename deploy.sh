#!/bin/bash
# Configuration
REMOTE_HOST="167.88.39.54"        # Replace with your server address
REMOTE_USER="dhruvaldhameliya"               # Replace with your username
DEPLOY_PATH="/home/dhruvaldhameliya/htdocs/dhruvaldhameliya.com"      # Replace with your app directory on the server
SSH_KEY_PATH=".ssh/id_rsa"     # Replace if using a different SSH key

# Commit message (passed as argument or default)
COMMIT_MSG="${1:-Auto-deploy update}"

# Local operations
echo "Adding all changes..."
git add .

echo "Committing changes: $COMMIT_MSG"
if git commit -m "$COMMIT_MSG"; then
    echo "Pushing to remote repository..."
    if git push origin main; then  # Change 'main' to your default branch if needed
        echo "Local commit and push successful!"

        # SSH operations
        echo "Connecting to $REMOTE_USER@$REMOTE_HOST..."
        ssh -i "$SSH_KEY_PATH" "$REMOTE_USER@$REMOTE_HOST" << EOF
cd $DEPLOY_PATH || { echo "Deployment directory not found!"; exit 1; }
echo "📥 Pulling latest code..."
git pull origin main  # Change 'main' to your default branch if needed
echo "📦 Installing dependencies..."
npm ci
echo "🏗️ Building Next.js app..."
npm run build
echo "♻️ Restarting PM2 app..."
pm2 restart dhruvaldhameliya-com --update-env
echo "✅ Deployment completed successfully!"
EOF

        if [ $? -eq 0 ]; then
            echo "Deployment completed successfully!"
        else
            echo "Deployment failed!"
            exit 1
        fi
    else
        echo "Failed to push changes to remote repository!"
        exit 1
    fi
else
    echo "Nothing to commit or commit failed!"
    exit 1
fi
set -e   # stop on first error
#
#echo "🚀 Starting deployment..."
#
#echo "📥 Pulling latest code..."
#git pull
#
#echo "📦 Installing dependencies..."
#npm ci
#
#echo "🏗️ Building Next.js app..."
#npm run build
#
#echo "♻️ Restarting PM2 app..."
#pm2 restart dhruvaldhameliya-com --update-env
#

#echo "✅ Deployment completed successfully!"