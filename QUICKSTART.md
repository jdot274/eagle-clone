# Quick Start Guide

## Run Locally (RIGHT NOW!)

```bash
cd /Users/joeywalter/eagle-clone
npm run dev
```

Then open http://localhost:3000 (or the port shown in terminal) in your browser.

## Deploy Online (FREE - 5 minutes)

### Fastest Way: Vercel

1. **Push to GitHub**:
   ```bash
   # Create a new repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/eagle-clone.git
   git push -u origin main
   ```

2. **Deploy**:
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your `eagle-clone` repo
   - Click "Deploy"
   - Done! Your app is live at `https://your-app.vercel.app`

### Alternative: Vercel CLI

```bash
npm install -g vercel
cd /Users/joeywalter/eagle-clone
vercel
```

Follow the prompts, and you'll get a live URL in seconds!

## What You Get

Your Eagle.cool clone includes:

✅ File upload (images, videos, any file)
✅ Folder organization
✅ Tag system
✅ Search functionality
✅ Color filtering
✅ Rating system (5 stars)
✅ Grid/List view toggle
✅ Notes for each asset
✅ Dark mode support
✅ Fully responsive design

## How to Use

1. Click "Upload" to add files
2. Create folders with the + button in sidebar
3. Create tags with the + button in sidebar
4. Search by name in the search bar
5. Filter by clicking on colors
6. Rate assets with stars
7. Switch between grid and list views

## Important Note

Files are stored in **browser LocalStorage**, which means:
- They're stored locally on each device/browser
- They persist between sessions
- They're NOT synced across devices
- They're NOT uploaded to any server
- Each user's files are separate

For production use with cloud storage, you'd need to add a backend.

## Customization

Edit these files to customize:
- `/app/globals.css` - Colors and styling
- `/components/*` - UI components
- `/lib/types.ts` - Data structure

## Support

For issues or questions, check:
- README.md - Full documentation
- DEPLOYMENT.md - Detailed deployment guide

Enjoy your Eagle.cool clone! 🦅
