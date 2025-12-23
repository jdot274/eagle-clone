# Eagle Clone - Design Asset Manager

A modern web-based clone of Eagle.cool, the popular design asset management tool. Organize, search, and manage your images, videos, and design files with ease.

## Features

- **File Upload**: Upload images, videos, and any file type
- **Organization**: Create folders and tags to organize your assets
- **Search**: Full-text search across all your assets
- **Color Filtering**: Filter assets by dominant colors
- **Rating System**: Rate your assets with a 5-star system
- **Grid/List View**: Switch between grid and list view modes
- **Notes**: Add notes to each asset
- **Responsive UI**: Works on desktop and mobile devices
- **Dark Mode**: Automatic dark mode support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Storage**: Browser LocalStorage (client-side)

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd eagle-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## Usage

1. **Upload Assets**: Click the "Upload" button to add images, videos, or files
2. **Create Folders**: Use the + button next to "Folders" in the sidebar
3. **Create Tags**: Use the + button next to "Tags" in the sidebar
4. **Organize**: Assign folders and tags when uploading or editing assets
5. **Search**: Use the search bar to find assets by name
6. **Filter by Color**: Click on color swatches to filter assets
7. **Rate**: Use the star rating system to mark favorites

## Limitations

- Files are stored in browser LocalStorage (not persistent across devices)
- File size limits depend on browser LocalStorage limits (~5-10MB)
- For production use, consider implementing backend storage

## Future Enhancements

- Cloud storage integration (AWS S3, Cloudinary)
- User authentication
- Shared collections
- Advanced image editing
- Batch operations
- Import/Export functionality

## License

MIT

## Credits

Inspired by [Eagle.cool](https://eagle.cool)
