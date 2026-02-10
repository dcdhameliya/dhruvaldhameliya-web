#!/bin/bash
set -e   # stop on first error

echo "🚀 Starting deployment..."

echo "📥 Pulling latest code..."
git pull

echo "📦 Installing dependencies..."
npm ci

echo "🏗️ Building Next.js app..."
# Export Firebase env vars for build (NEXT_PUBLIC_* vars are baked into bundle)
export NEXT_PUBLIC_ENV=production
export NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBEIBSjLgyqLdcjAcv63RlKzCLfVOYSmVQ
export NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=dhruvaldhameliya-web.firebaseapp.com
export NEXT_PUBLIC_FIREBASE_PROJECT_ID=dhruvaldhameliya-web
export NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=dhruvaldhameliya-web.firebasestorage.app
export NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=498234887717
export NEXT_PUBLIC_FIREBASE_APP_ID=1:498234887717:web:b73404f3eb614c9739f9cc
export NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-QEKGKE4W3Y

npm run build

echo "♻️ Restarting PM2 app..."
pm2 restart dhruvaldhameliya-com --update-env

echo "✅ Deployment completed successfully!"