-- Schedule automatic blog generation every 24 hours at 9 AM UTC
SELECT
  cron.schedule(
    'auto-blog-generator-daily',
    '0 9 * * *',
    $$
    SELECT
      net.http_post(
        url:='https://yquuidpajigvecyonqir.supabase.co/functions/v1/auto-blog-generator',
        headers:=jsonb_build_object(
          'Content-Type', 'application/json',
          'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdXVpZHBhamlndmVjeW9ucWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTM1MDMsImV4cCI6MjA3NDM2OTUwM30.FIpWeiS_2B98HSE2Z2yxuOGp4gkO74rYIrAp-Aj2YTg'
        ),
        body:='{"force": true, "intervalHours": 24, "publishAsDraft": false}'::jsonb
      ) AS request_id;
    $$
  );