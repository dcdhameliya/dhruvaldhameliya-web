#!/bin/bash
set -e   # stop on first error

echo "🚀 Starting deployment..."

echo "📥 Pulling latest code..."
git pull

echo "📦 Installing dependencies..."
npm ci

echo "🏗️ Building Next.js app..."
npm run build

echo "♻️ Restarting PM2 app..."
pm2 restart nextjs-dhruvaldhameliya.com

pm2 restart nextjs-dhruvaldhameliya.com --update-env

echo "✅ Deployment completed successfully!"