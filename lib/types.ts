export interface Asset {
  id: string;
  name: string;
  url: string;
  thumbnail?: string;
  type: 'image' | 'video' | 'file';
  size: number;
  tags: string[];
  folders: string[];
  colors: string[];
  rating: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface Folder {
  id: string;
  name: string;
  color: string;
  createdAt: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export type ViewMode = 'grid' | 'list';
export type SortBy = 'date' | 'name' | 'size' | 'rating';
