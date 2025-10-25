#!/bin/bash

# TechX Florida 2025 - GitHub Pages Deployment Script (macOS/Linux)
# This script builds and deploys the website to GitHub Pages

set -e  # Exit on error

echo "Starting TechX Florida deployment..."

# Step 1: Remove old docs folder if it exists
echo "Cleaning up old docs folder..."
if [ -d "docs" ]; then
    rm -rf docs
    echo "Removed old docs folder"
else
    echo "No existing docs folder found"
fi

# Step 2: Navigate to TechX_Website directory
echo "Navigating to TechX_Website..."
cd TechX_Website

# Step 3: Run the build
echo "Building the website..."
npm run build

# Step 4: Move .docs to parent directory as docs
echo "Moving build output..."
if [ -d ".docs" ]; then
    mv .docs ../docs
    echo "Moved .docs to ../docs"
else
    echo "Error: .docs folder not found after build"
    exit 1
fi

# Step 5: Return to root directory
cd ..

# Step 6: Create CNAME file
echo "Creating CNAME file..."
echo -n "techxflorida.com" > docs/CNAME
echo "Created CNAME with techxflorida.com"
echo "Successfully deployed, please proceed to making commit and pushing to GitHub."