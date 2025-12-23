# 🦅 Eagle Clone - Cloud Design Asset Manager

A modern, cloud-based clone of Eagle.cool built with Next.js, Supabase, and TypeScript. Manage your design assets, code files, Unity games, and more with powerful organization and search features.

**Live Demo:** [https://eagle-clone.vercel.app](https://eagle-clone.vercel.app)
**GitHub:** [https://github.com/jdot274/eagle-clone](https://github.com/jdot274/eagle-clone)

## ✨ Features

### Core Functionality
- 📤 **Cloud File Uploads** - Upload any file type to Supabase Storage
- 🔐 **User Authentication** - Email/password, Google, and GitHub sign-in
- 📂 **Folder Organization** - Create custom folders with colors
- 🏷️ **Tag System** - Tag assets for easy categorization
- 🔍 **Full-Text Search** - Find assets instantly by name
- 🎨 **Color Filtering** - Auto-extract and filter by dominant colors
- ⭐ **Rating System** - 5-star rating for each asset
- 📝 **Notes** - Add descriptions and notes to assets
- 🔄 **View Modes** - Switch between grid and list views
- 🌙 **Dark Mode** - Automatic dark mode support
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile

### File Type Support
- **Images**: JPG, PNG, GIF, WebP, SVG
- **Videos**: MP4, MOV, AVI, WebM
- **Code Files**: Swift, C++, Python, JavaScript, etc.
- **3D Models**: OBJ, FBX, GLTF (viewer coming soon)
- **Documents**: PDF, TXT, MD
- **Apps**: Mac .app bundles, Unity WebGL builds
- **Archives**: ZIP, TAR, GZ

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (free)
- Vercel account (free, for deployment)

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/jdot274/eagle-clone.git
cd eagle-clone
npm install
```

### 2. Set Up Supabase

Follow the detailed instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md):

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the database migrations (copy SQL from `supabase/migrations/`)
3. Configure storage bucket
4. Get your API credentials

### 3. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

```bash
# Push to GitHub
git push

# Deploy with Vercel CLI
vercel

# Or connect your GitHub repo at vercel.com
```

Don't forget to add your environment variables in the Vercel dashboard!

## 📁 Project Structure

```
eagle-clone/
├── app/                      # Next.js app directory
│   ├── auth/                # Authentication routes
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main application page
├── components/              # React components
│   ├── AssetCard.tsx        # Asset display card
│   ├── Auth.tsx             # Authentication UI
│   ├── CreateModal.tsx      # Create folder/tag modal
│   ├── Sidebar.tsx          # Navigation sidebar
│   └── UploadModal.tsx      # File upload modal
├── lib/                     # Utilities and API
│   ├── supabase/           # Supabase configuration
│   │   ├── api.ts          # API functions
│   │   └── client.ts       # Supabase client
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Utility functions
├── supabase/               # Supabase migrations
│   └── migrations/         # SQL migration files
└── public/                 # Static assets
```

## 🎯 Usage

### Upload Files
1. Click the "Upload" button
2. Select a file (any type, any size)
3. Add name, folders, tags, rating, and notes
4. Click "Upload" - file is stored in Supabase Storage

### Organize
- **Create Folders**: Click + next to "Folders" in sidebar
- **Create Tags**: Click + next to "Tags" in sidebar
- **Assign**: Select folders and tags when uploading

### Search & Filter
- **Search**: Type in the search bar to find assets by name
- **Filter by Folder**: Click a folder in the sidebar
- **Filter by Tags**: Click tags (supports multiple)
- **Filter by Color**: Click color swatches in the header

### Rate & Annotate
- **Rate**: Click stars when uploading or editing
- **Add Notes**: Add descriptions and comments
- **Edit**: Click the edit icon on any asset card

## 🔒 Security

- **Row Level Security (RLS)**: Users can only see their own assets
- **Secure Storage**: Files are stored with user-specific paths
- **Auth Middleware**: Routes are protected by Supabase Auth
- **Environment Variables**: Sensitive keys stored securely

## 📊 Database Schema

```sql
assets
├── id (uuid, primary key)
├── user_id (uuid, foreign key)
├── name (text)
├── file_path (text)
├── file_url (text)
├── type (text)
├── tags (text[])
├── folders (text[])
├── colors (text[])
├── rating (integer)
└── notes (text)

folders
├── id (uuid, primary key)
├── user_id (uuid, foreign key)
├── name (text)
└── color (text)

tags
├── id (uuid, primary key)
├── user_id (uuid, foreign key)
├── name (text)
└── color (text)
```

## 🚧 Roadmap

### Phase 1: Backend (✅ Complete)
- [x] Supabase authentication
- [x] Cloud storage integration
- [x] Database with RLS
- [x] File upload API

### Phase 2: Advanced Features (📋 Planned)
- [ ] Code syntax highlighting viewer
- [ ] 3D model viewer (Three.js)
- [ ] Unity WebGL player
- [ ] Mac app metadata extractor
- [ ] PDF viewer
- [ ] Video player with controls
- [ ] Batch upload
- [ ] Folder upload
- [ ] Asset sharing
- [ ] Collections/Albums

### Phase 3: AI & Advanced
- [ ] AI-powered tagging
- [ ] Smart search
- [ ] Similar asset suggestions
- [ ] Auto-categorization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for any purpose!

## 🙏 Acknowledgments

- Inspired by [Eagle.cool](https://eagle.cool)
- Built with [Next.js](https://nextjs.org)
- Powered by [Supabase](https://supabase.com)
- Deployed on [Vercel](https://vercel.com)

## 📧 Support

- **GitHub Issues**: [Report bugs](https://github.com/jdot274/eagle-clone/issues)
- **Documentation**: See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
- **Upgrade Guide**: See [UPGRADE_PLAN.md](./UPGRADE_PLAN.md)

---

**Built with ❤️ using Claude Code**

🤖 Generated with [Claude Code](https://claude.com/claude-code)
