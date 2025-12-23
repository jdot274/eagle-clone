-- Create storage bucket for assets
INSERT INTO storage.buckets (id, name, public)
VALUES ('assets', 'assets', true)
ON CONFLICT DO NOTHING;

-- Enable RLS for storage
CREATE POLICY "Users can upload their own assets"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'assets' AND
    auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can view their own assets"
ON storage.objects FOR SELECT
USING (
    bucket_id = 'assets' AND
    auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own assets"
ON storage.objects FOR UPDATE
USING (
    bucket_id = 'assets' AND
    auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own assets"
ON storage.objects FOR DELETE
USING (
    bucket_id = 'assets' AND
    auth.uid()::text = (storage.foldername(name))[1]
);
