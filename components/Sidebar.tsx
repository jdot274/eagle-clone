'use client';

import { Folder, Tag, Image, Video, FileText, Plus } from 'lucide-react';
import { Folder as FolderType, Tag as TagType } from '@/lib/types';

interface SidebarProps {
  folders: FolderType[];
  tags: TagType[];
  selectedFolder: string | null;
  selectedTags: string[];
  onFolderSelect: (folderId: string | null) => void;
  onTagToggle: (tagId: string) => void;
  onAddFolder: () => void;
  onAddTag: () => void;
}

export default function Sidebar({
  folders,
  tags,
  selectedFolder,
  selectedTags,
  onFolderSelect,
  onTagToggle,
  onAddFolder,
  onAddTag,
}: SidebarProps) {
  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-screen">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Eagle Clone</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-1">
            <button
              onClick={() => onFolderSelect(null)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                selectedFolder === null
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              <Image className="w-4 h-4" alt="" />
              All Assets
            </button>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
              Folders
            </h2>
            <button
              onClick={onAddFolder}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
            >
              <Plus className="w-3 h-3 text-gray-500" />
            </button>
          </div>
          <div className="space-y-1">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => onFolderSelect(folder.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                  selectedFolder === folder.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                <Folder className="w-4 h-4" style={{ color: folder.color }} />
                {folder.name}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
              Tags
            </h2>
            <button
              onClick={onAddTag}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
            >
              <Plus className="w-3 h-3 text-gray-500" />
            </button>
          </div>
          <div className="space-y-1">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => onTagToggle(tag.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                  selectedTags.includes(tag.id)
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tag.color }}
                />
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
