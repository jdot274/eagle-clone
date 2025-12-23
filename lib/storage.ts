import { Asset, Folder, Tag } from './types';

const ASSETS_KEY = 'eagle_assets';
const FOLDERS_KEY = 'eagle_folders';
const TAGS_KEY = 'eagle_tags';

export const storage = {
  // Assets
  getAssets: (): Asset[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(ASSETS_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveAsset: (asset: Asset): void => {
    if (typeof window === 'undefined') return;
    const assets = storage.getAssets();
    const index = assets.findIndex(a => a.id === asset.id);
    if (index >= 0) {
      assets[index] = asset;
    } else {
      assets.push(asset);
    }
    localStorage.setItem(ASSETS_KEY, JSON.stringify(assets));
  },

  deleteAsset: (id: string): void => {
    if (typeof window === 'undefined') return;
    const assets = storage.getAssets().filter(a => a.id !== id);
    localStorage.setItem(ASSETS_KEY, JSON.stringify(assets));
  },

  // Folders
  getFolders: (): Folder[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(FOLDERS_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveFolder: (folder: Folder): void => {
    if (typeof window === 'undefined') return;
    const folders = storage.getFolders();
    const index = folders.findIndex(f => f.id === folder.id);
    if (index >= 0) {
      folders[index] = folder;
    } else {
      folders.push(folder);
    }
    localStorage.setItem(FOLDERS_KEY, JSON.stringify(folders));
  },

  deleteFolder: (id: string): void => {
    if (typeof window === 'undefined') return;
    const folders = storage.getFolders().filter(f => f.id !== id);
    localStorage.setItem(FOLDERS_KEY, JSON.stringify(folders));
  },

  // Tags
  getTags: (): Tag[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(TAGS_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveTag: (tag: Tag): void => {
    if (typeof window === 'undefined') return;
    const tags = storage.getTags();
    const index = tags.findIndex(t => t.id === tag.id);
    if (index >= 0) {
      tags[index] = tag;
    } else {
      tags.push(tag);
    }
    localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
  },

  deleteTag: (id: string): void => {
    if (typeof window === 'undefined') return;
    const tags = storage.getTags().filter(t => t.id !== id);
    localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
  },
};
