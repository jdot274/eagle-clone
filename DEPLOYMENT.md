# Deployment Guide

## Quick Deploy to Vercel (Recommended - FREE)

Vercel offers free hosting for Next.js applications with automatic deployments.

### Option 1: Deploy via GitHub (Easiest)

1. **Push to GitHub**:
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/eagle-clone.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects Next.js settings)
   - Your app will be live in ~2 minutes at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd /Users/joeywalter/eagle-clone
   vercel
   ```

3. Follow the prompts:
   - Login to Vercel (if first time)
   - Confirm project settings
   - Wait for deployment to complete

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

## Alternative Hosting Options

### Netlify (FREE)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

### Railway (FREE tier available)

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Next.js and deploys

### Cloudflare Pages (FREE)

1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect GitHub repository
5. Build command: `npm run build`
6. Build output: `.next`
7. Deploy!

## Environment Variables

This app uses browser LocalStorage, so no backend environment variables are needed. However, if you add features like:

- Cloud storage (AWS S3, Cloudinary)
- Authentication (NextAuth, Clerk)
- Database (MongoDB, PostgreSQL)

You'll need to add environment variables in your hosting platform's dashboard.

## Custom Domain

All hosting platforms above support custom domains:

1. Purchase a domain (Namecheap, Google Domains, etc.)
2. In your hosting dashboard, go to "Domains" or "Custom Domains"
3. Add your domain and follow DNS configuration instructions
4. Wait for DNS propagation (usually 5-60 minutes)

## Post-Deployment

After deployment, your app will be live at a URL like:
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`
- Railway: `https://your-project.up.railway.app`

You can share this URL with anyone to use your Eagle.cool clone!

## Local Development

To run locally:
```bash
npm run dev
# Open http://localhost:3000
```

## Troubleshooting

**Build fails**: Run `npm run build` locally first to check for errors

**App doesn't load**: Check browser console for errors (usually CORS or API issues)

**Files not persisting**: This app uses LocalStorage - files are stored per-browser/device

**Dark mode issues**: Ensure your browser supports `prefers-color-scheme`

## Notes

- The app is completely free to host on all platforms mentioned above
- No backend required - everything runs in the browser
- Files are stored locally in each user's browser (not shared across devices)
- For production use with real persistence, consider adding backend storage
