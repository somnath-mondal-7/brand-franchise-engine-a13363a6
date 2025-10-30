import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Updating published_at for all published posts without dates...');

    // Update all published posts that don't have published_at set
    const { data, error } = await supabase
      .from('blog_posts')
      .update({ published_at: new Date().toISOString() })
      .is('published_at', null)
      .eq('is_published', true)
      .select('id, title, published_at');

    if (error) {
      console.error('Error updating posts:', error);
      throw error;
    }

    console.log(`Successfully updated ${data?.length || 0} blog posts`);

    return new Response(
      JSON.stringify({
        success: true,
        updated: data?.length || 0,
        posts: data
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in update-blog-dates function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
