import { supabase } from './client';
import type { Asset, Folder, Tag } from '../types';
import type { Database } from './client';

type DBAsset = Database['public']['Tables']['assets']['Row'];
type DBFolder = Database['public']['Tables']['folders']['Row'];
type DBTag = Database['public']['Tables']['tags']['Row'];

// Convert DB asset to App asset
function dbAssetToAsset(dbAsset: DBAsset): Asset {
  return {
    id: dbAsset.id,
    name: dbAsset.name,
    url: dbAsset.file_url,
    thumbnail: dbAsset.thumbnail_url || undefined,
    type: dbAsset.type as Asset['type'],
    size: Number(dbAsset.size),
    tags: dbAsset.tags || [],
    folders: dbAsset.folders || [],
    colors: dbAsset.colors || [],
    rating: dbAsset.rating,
    notes: dbAsset.notes,
    createdAt: dbAsset.created_at,
    updatedAt: dbAsset.updated_at,
  };
}

// Assets
export async function getAssets(): Promise<Asset[]> {
  const { data, error } = await supabase
    .from('assets')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data || []).map(dbAssetToAsset);
}

export async function createAsset(asset: Omit<Asset, 'id' | 'createdAt' | 'updatedAt'>): Promise<Asset> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await (supabase
    .from('assets')
    .insert({
      user_id: user.id,
      name: asset.name,
      file_path: asset.url,
      file_url: asset.url,
      thumbnail_url: asset.thumbnail,
      type: asset.type,
      file_type: asset.type,
      size: asset.size,
      tags: asset.tags,
      folders: asset.folders,
      colors: asset.colors,
      rating: asset.rating,
      notes: asset.notes,
      metadata: {},
    } as any)
    .select()
    .single());

  if (error) throw error;
  return dbAssetToAsset(data);
}

export async function updateAsset(id: string, updates: Partial<Asset>): Promise<Asset> {
  const { data, error} = await supabase
    .from('assets')
    .update({
      name: updates.name,
      tags: updates.tags,
      folders: updates.folders,
      colors: updates.colors,
      rating: updates.rating,
      notes: updates.notes,
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return dbAssetToAsset(data);
}

export async function deleteAsset(id: string): Promise<void> {
  const { error } = await supabase
    .from('assets')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Folders
export async function getFolders(): Promise<Folder[]> {
  const { data, error } = await supabase
    .from('folders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data || []).map((f: DBFolder) => ({
    id: f.id,
    name: f.name,
    color: f.color,
    createdAt: f.created_at,
  }));
}

export async function createFolder(folder: Omit<Folder, 'id' | 'createdAt'>): Promise<Folder> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('folders')
    .insert({
      user_id: user.id,
      name: folder.name,
      color: folder.color,
    })
    .select()
    .single();

  if (error) throw error;
  return {
    id: data.id,
    name: data.name,
    color: data.color,
    createdAt: data.created_at,
  };
}

export async function deleteFolder(id: string): Promise<void> {
  const { error } = await supabase
    .from('folders')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Tags
export async function getTags(): Promise<Tag[]> {
  const { data, error } = await supabase
    .from('tags')
    .select('*');

  if (error) throw error;
  return (data || []).map((t: DBTag) => ({
    id: t.id,
    name: t.name,
    color: t.color,
  }));
}

export async function createTag(tag: Omit<Tag, 'id'>): Promise<Tag> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('tags')
    .insert({
      user_id: user.id,
      name: tag.name,
      color: tag.color,
    })
    .select()
    .single();

  if (error) throw error;
  return {
    id: data.id,
    name: data.name,
    color: data.color,
  };
}

export async function deleteTag(id: string): Promise<void> {
  const { error } = await supabase
    .from('tags')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// File Upload
export async function uploadFile(file: File, userId: string): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('assets')
    .upload(fileName, file);

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('assets')
    .getPublicUrl(fileName);

  return publicUrl;
}
