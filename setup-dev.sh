#!/bin/bash

# AI-friendly dev setup script
# This script handles the complete development environment setup

echo "🚀 Setting up development environment..."

# Update system and install Node.js/npm if not present
if ! command -v node &> /dev/null || ! command -v npm &> /dev/null; then
    echo "📦 Installing Node.js and npm..."
    sudo apt-get update && sudo apt-get install -y nodejs npm
else
    echo "✅ Node.js and npm already installed"
fi

# Install dependencies
echo "📥 Installing project dependencies..."
npm install

# Start the dev server
echo "🏃 Starting development server on port 8000..."
npm run dev