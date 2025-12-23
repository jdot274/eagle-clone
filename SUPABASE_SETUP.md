# Supabase Setup Guide

## 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new organization (if you don't have one)
4. Click "New Project"
5. Fill in:
   - Name: `eagle-clone`
   - Database Password: (generate a strong password and save it)
   - Region: Choose closest to you
6. Click "Create new project" (takes ~2 minutes)

## 2. Run Database Migrations

1. In your Supabase project, go to **SQL Editor**
2. Click "New query"
3. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
4. Click "Run" or press `Cmd+Enter`
5. Create another new query
6. Copy and paste the contents of `supabase/migrations/002_storage_setup.sql`
7. Click "Run"

## 3. Configure Storage

1. Go to **Storage** in the left sidebar
2. You should see the `assets` bucket created
3. Click on `assets`
4. The bucket is now ready to accept uploads!

## 4. Get API Credentials

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (long key)

## 5. Configure Environment Variables

1. In your project root, create `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## 6. Enable Authentication Providers (Optional)

1. Go to **Authentication** → **Providers**
2. Enable providers you want:
   - Email (enabled by default)
   - Google OAuth
   - GitHub OAuth
   - etc.

## 7. Test Connection

```bash
npm run dev
```

The app should now connect to Supabase!

## Troubleshooting

**"Missing Supabase environment variables"**
- Make sure `.env.local` exists and has the correct values
- Restart the dev server after adding env vars

**"Row Level Security policy violation"**
- Make sure you ran both migration files
- Check that RLS policies are enabled in Supabase dashboard

**Upload fails**
- Check storage bucket policies are created
- Verify bucket name is `assets`
- Check file size limits in Supabase settings

## Storage Limits

- Free tier: 1GB storage
- Pro tier: 100GB storage
- Can be increased as needed

## Database Limits

- Free tier: 500MB database
- Pro tier: 8GB database
- Unlimited rows

Your Eagle Clone is now powered by Supabase! 🚀
