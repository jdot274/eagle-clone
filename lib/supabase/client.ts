import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';

export type Database = {
  public: {
    Tables: {
      assets: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          file_path: string;
          file_url: string;
          thumbnail_url: string | null;
          type: 'image' | 'video' | 'file' | 'code' | 'game' | 'model' | 'app';
          file_type: string;
          size: number;
          tags: string[];
          folders: string[];
          colors: string[];
          rating: number;
          notes: string;
          metadata: any;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          file_path: string;
          file_url: string;
          thumbnail_url?: string | null;
          type: 'image' | 'video' | 'file' | 'code' | 'game' | 'model' | 'app';
          file_type: string;
          size: number;
          tags?: string[];
          folders?: string[];
          colors?: string[];
          rating?: number;
          notes?: string;
          metadata?: any;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          file_path?: string;
          file_url?: string;
          thumbnail_url?: string | null;
          type?: 'image' | 'video' | 'file' | 'code' | 'game' | 'model' | 'app';
          file_type?: string;
          size?: number;
          tags?: string[];
          folders?: string[];
          colors?: string[];
          rating?: number;
          notes?: string;
          metadata?: any;
          created_at?: string;
          updated_at?: string;
        };
      };
      folders: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          color: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          color: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          color?: string;
          created_at?: string;
        };
      };
      tags: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          color: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          color: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          color?: string;
        };
      };
    };
  };
};

// Client-side Supabase client
export const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Server-side or admin client (only use with env vars)
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient<Database>(supabaseUrl, supabaseKey);
}
