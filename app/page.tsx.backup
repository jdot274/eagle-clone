'use client';

import { useState, useEffect } from 'react';
import { Upload, Search, Grid, List, Filter } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import AssetCard from '@/components/AssetCard';
import UploadModal from '@/components/UploadModal';
import CreateModal from '@/components/CreateModal';
import { Asset, Folder, Tag, ViewMode, SortBy } from '@/lib/types';
import { storage } from '@/lib/storage';

export default function Home() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortBy>('date');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createModalType, setCreateModalType] = useState<'folder' | 'tag'>('folder');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  useEffect(() => {
    setAssets(storage.getAssets());
    setFolders(storage.getFolders());
    setTags(storage.getTags());
  }, []);

  const handleUpload = (asset: Asset) => {
    storage.saveAsset(asset);
    setAssets(storage.getAssets());
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this asset?')) {
      storage.deleteAsset(id);
      setAssets(storage.getAssets());
    }
  };

  const handleEdit = (asset: Asset) => {
    // Simple edit - in a real app, this would open an edit modal
    const newName = prompt('Edit name:', asset.name);
    if (newName && newName !== asset.name) {
      const updated = { ...asset, name: newName, updatedAt: new Date().toISOString() };
      storage.saveAsset(updated);
      setAssets(storage.getAssets());
    }
  };

  const handleCreateFolder = () => {
    setCreateModalType('folder');
    setShowCreateModal(true);
  };

  const handleCreateTag = () => {
    setCreateModalType('tag');
    setShowCreateModal(true);
  };

  const handleCreate = (item: Folder | Tag) => {
    if (createModalType === 'folder') {
      storage.saveFolder(item as Folder);
      setFolders(storage.getFolders());
    } else {
      storage.saveTag(item as Tag);
      setTags(storage.getTags());
    }
  };

  const handleTagToggle = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  const filteredAssets = assets.filter((asset) => {
    // Filter by folder
    if (selectedFolder && !asset.folders.includes(selectedFolder)) {
      return false;
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      const assetTagNames = asset.tags;
      const selectedTagNames = selectedTags.map(
        (id) => tags.find((t) => t.id === id)?.name || ''
      );
      const hasAllTags = selectedTagNames.every((tag) => assetTagNames.includes(tag));
      if (!hasAllTags) return false;
    }

    // Filter by search
    if (searchQuery && !asset.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      const hasColor = selectedColors.some((color) => asset.colors.includes(color));
      if (!hasColor) return false;
    }

    return true;
  });

  // Sort assets
  const sortedAssets = [...filteredAssets].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'size':
        return b.size - a.size;
      case 'rating':
        return b.rating - a.rating;
      case 'date':
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  // Get all unique colors from visible assets
  const availableColors = Array.from(
    new Set(filteredAssets.flatMap((asset) => asset.colors))
  ).slice(0, 20);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <Sidebar
        folders={folders}
        tags={tags}
        selectedFolder={selectedFolder}
        selectedTags={selectedTags}
        onFolderSelect={setSelectedFolder}
        onTagToggle={handleTagToggle}
        onAddFolder={handleCreateFolder}
        onAddTag={handleCreateTag}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 max-w-xl relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="date">Date</option>
                <option value="name">Name</option>
                <option value="size">Size</option>
                <option value="rating">Rating</option>
              </select>

              <div className="flex gap-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setShowUploadModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <Upload className="w-4 h-4" />
                Upload
              </button>
            </div>
          </div>

          {availableColors.length > 0 && (
            <div className="flex items-center gap-2 mt-3">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSelectedColors((prev) =>
                        prev.includes(color)
                          ? prev.filter((c) => c !== color)
                          : [...prev, color]
                      )
                    }
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedColors.includes(color)
                        ? 'border-blue-500'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              {selectedColors.length > 0 && (
                <button
                  onClick={() => setSelectedColors([])}
                  className="text-xs text-blue-500 hover:text-blue-600 ml-2"
                >
                  Clear
                </button>
              )}
            </div>
          )}
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {sortedAssets.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">📦</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No assets yet
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Upload your first asset to get started
              </p>
              <button
                onClick={() => setShowUploadModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <Upload className="w-5 h-5" />
                Upload Asset
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
                  : 'space-y-2'
              }
            >
              {sortedAssets.map((asset) => (
                <AssetCard
                  key={asset.id}
                  asset={asset}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      <UploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onUpload={handleUpload}
        folders={folders}
        tags={tags}
      />

      <CreateModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        type={createModalType}
        onCreate={handleCreate}
      />
    </div>
  );
}
