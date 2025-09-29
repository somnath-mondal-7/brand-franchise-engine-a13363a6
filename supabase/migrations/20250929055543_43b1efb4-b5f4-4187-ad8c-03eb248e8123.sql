-- Create session recordings table for storing user session replays
CREATE TABLE public.session_recordings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  events JSONB NOT NULL,
  duration INTEGER DEFAULT 0,
  user_agent TEXT,
  page_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.session_recordings ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to view all recordings (for admin)
CREATE POLICY "Authenticated users can view session recordings" 
ON public.session_recordings 
FOR SELECT 
USING (true);

-- Create policy for anyone to insert recordings
CREATE POLICY "Anyone can create session recordings" 
ON public.session_recordings 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_session_recordings_updated_at
BEFORE UPDATE ON public.session_recordings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add indexes for better performance
CREATE INDEX idx_session_recordings_created_at ON public.session_recordings(created_at DESC);
CREATE INDEX idx_session_recordings_session_id ON public.session_recordings(session_id);