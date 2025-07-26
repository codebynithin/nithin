#!/bin/bash

# Exit on error
set -e

echo "📦 Installing dependencies..."
npm install

echo "🧱 Building client..."
npm run build

echo "📂 Copying client build to backend public directory..."
cp -r build /var/www/nithin

echo "✅ Client deployment complete."