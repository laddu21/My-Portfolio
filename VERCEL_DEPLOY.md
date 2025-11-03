# Quick Deployment Steps for Vercel

## 🚀 Quick Start

1. **Push your code to GitHub** (if not already done)

2. **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign in with GitHub

3. **Import Project**: Click "Add New Project" → "Import Git Repository"

4. **Configure**: 
   - Framework Preset: Create React App (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `build` (auto-filled)

5. **Add Environment Variables** (before deploying):
   - `EMAIL_USER` = your-gmail@gmail.com
   - `EMAIL_PASS` = your-gmail-app-password

6. **Click Deploy** 🎉

## 📧 Setting up Gmail App Password

1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Create new password for "Mail"
5. Copy the 16-character password

## ✅ What's Configured

- ✅ Serverless API routes (`/api/contact`, `/api/projects`, `/api/chat`)
- ✅ React build optimization
- ✅ CORS configured
- ✅ Environment variables ready
- ✅ Production-ready configuration

## 📝 Post-Deployment Checklist

- [ ] Test contact form
- [ ] Verify chatbot is working
- [ ] Check all images load correctly
- [ ] Test on mobile devices
- [ ] Add custom domain (optional)

**That's it! Your portfolio will be live in minutes!** 🌟
