#!/bin/bash

# Exit on error
set -e

echo "📦 Installing dependencies..."
npm install

echo "🚀 Restarting PM2 server..."
pm2 restart nithin-backend || pm2 start server/index.ts --name nithin-backend

echo "✅ Server deployment complete."