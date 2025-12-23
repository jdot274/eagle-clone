'use client';

import { Asset } from '@/lib/types';
import { formatFileSize } from '@/lib/utils';
import { Star, Trash2, Edit } from 'lucide-react';
import Image from 'next/image';

interface AssetCardProps {
  asset: Asset;
  onDelete: (id: string) => void;
  onEdit: (asset: Asset) => void;
}

export default function AssetCard({ asset, onDelete, onEdit }: AssetCardProps) {
  const renderPreview = () => {
    if (asset.type === 'image') {
      return (
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
          <Image
            src={asset.url}
            alt={asset.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      );
    }

    if (asset.type === 'video') {
      return (
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
          <video src={asset.url} className="w-full h-full object-cover" />
        </div>
      );
    }

    return (
      <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <div className="text-4xl text-gray-400">📄</div>
      </div>
    );
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {renderPreview()}

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        <button
          onClick={() => onEdit(asset)}
          className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Edit className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
        <button
          onClick={() => onDelete(asset.id)}
          className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-red-50 dark:hover:bg-red-900"
        >
          <Trash2 className="w-4 h-4 text-red-500" />
        </button>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate flex-1">
            {asset.name}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < asset.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          {asset.colors.slice(0, 5).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          {asset.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
            >
              {tag}
            </span>
          ))}
          {asset.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
              +{asset.tags.length - 3}
            </span>
          )}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {formatFileSize(asset.size)}
        </p>
      </div>
    </div>
  );
}
