#!/bin/bash

# Exit on error
set -e

echo "📦 Installing dependencies..."
npm install

echo "🚀 Restarting PM2 server..."
pm2 restart nithin || pm2 start npm --name "nithin" -- start

echo "✅ Server deployment complete."