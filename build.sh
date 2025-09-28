#!/bin/bash
# Simple build + deploy script for GitHub Pages

set -e

echo "🛠 Building project..."
npm install
npm run build

echo "🚀 Deploying to GitHub Pages..."
npm run deploy
