# Deployment Guide for Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at https://vercel.com)
3. Your portfolio code pushed to a GitHub repository

## Step 1: Prepare Your Environment Variables

Before deploying, you need to set up your environment variables in Vercel:

1. Go to your Vercel dashboard
2. Select your project (or import it first)
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app-specific password

### How to Generate Gmail App-Specific Password:

1. Go to your Google Account settings
2. Enable 2-Step Verification if not already enabled
3. Go to **Security** → **2-Step Verification** → **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password and use it as `EMAIL_PASS`

## Step 2: Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel will automatically detect it's a React app
4. Click **Deploy**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Step 3: Post-Deployment

After deployment:

1. Verify all API endpoints are working:
   - `/api/contact` - Contact form
   - `/api/projects` - Projects list
   - `/api/chat` - Chatbot

2. Test the contact form with a real email
3. Verify all images and assets are loading correctly

## Troubleshooting

### Issue: API routes not working
- **Solution**: Make sure environment variables are set in Vercel dashboard

### Issue: Images not loading
- **Solution**: Ensure all image paths are correct and images are in the `public` folder

### Issue: Email not sending
- **Solution**: 
  - Check if `EMAIL_USER` and `EMAIL_PASS` are correctly set
  - Verify Gmail app password is valid
  - Check Vercel function logs for errors

## Project Structure

```
My-Portfolio/
├── api/              # Serverless functions for Vercel
│   ├── chat.js       # Chatbot API
│   ├── contact.js    # Contact form API
│   └── projects.js   # Projects API
├── public/           # Static assets
├── src/              # React source code
├── data/             # JSON data files
├── vercel.json       # Vercel configuration
└── package.json      # Dependencies
```

## Important Notes

1. **Build Command**: Vercel will automatically run `npm run build`
2. **Output Directory**: `build`
3. **Node Version**: Vercel uses Node.js 18.x by default
4. **Serverless Functions**: API routes are automatically converted to serverless functions

## Environment Variables

Make sure to set these in Vercel:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow the DNS configuration instructions

## Support

If you encounter any issues, check:
- Vercel deployment logs
- Browser console for errors
- Network tab for API call failures

---

**Last Updated**: November 2025
