#!/bin/bash
# Pre-deployment checklist script

echo "🔍 Running pre-deployment checks..."
echo ""

# Check if .env exists locally
if [ -f .env ]; then
    echo "✅ .env file found (remember to add these to Vercel)"
else
    echo "⚠️  Warning: .env file not found. Make sure to set environment variables in Vercel!"
fi

# Check if build works
echo ""
echo "📦 Testing build process..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo ""
echo "✅ All checks passed!"
echo ""
echo "📋 Deployment Checklist:"
echo "  1. Push code to GitHub"
echo "  2. Go to vercel.com and import your repository"
echo "  3. Add environment variables:"
echo "     - EMAIL_USER"
echo "     - EMAIL_PASS"
echo "  4. Click Deploy"
echo ""
echo "🚀 Ready to deploy!"
