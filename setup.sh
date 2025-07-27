#!/bin/bash

# Portfolio Website Deployment Setup Script
# This script helps set up your portfolio website for GitHub Pages deployment

echo "🚀 Charlie McLaughlin Portfolio Website Setup"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the portfolio-website directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "Next steps to deploy to GitHub Pages:"
echo "1. Create a new repository on GitHub named 'charlie-mclaughlin'"
echo "2. Initialize git and add your remote:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit: Portfolio website'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/CharlieIQ/charlie-mclaughlin.git"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages in your repository settings:"
echo "   - Go to Settings > Pages"
echo "   - Select 'GitHub Actions' as the source"
echo "   - The website will be available at: https://charlieiq.github.io/charlie-mclaughlin/"
echo ""
echo "4. For manual deployment, run:"
echo "   npm run deploy"
echo ""
echo "🌐 Local development server:"
echo "   npm run dev"
echo "   Open: http://localhost:5173/charlie-mclaughlin/"
echo ""
echo "Happy coding! 🎯"
