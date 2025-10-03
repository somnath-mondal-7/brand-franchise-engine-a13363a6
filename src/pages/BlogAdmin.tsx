import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Edit, Trash2, Eye, Upload, X, FileText } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_name: string;
  category_id: string;
  tags: string[];
  seo_title: string;
  seo_description: string;
  featured_image_url: string;
  is_published: boolean;
  is_featured: boolean;
  read_time_minutes: number;
  created_at: string;
  published_at: string;
  attachments?: any;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author_name: 'FranchiseLeads HQ Team',
    category_id: '',
    tags: '',
    seo_title: '',
    seo_description: '',
    featured_image_url: '',
    is_published: false,
    is_featured: false,
  });

  const [attachments, setAttachments] = useState<Array<{
    name: string;
    url: string;
    type: string;
    size: number;
  }>>([]);
  const [uploadingFiles, setUploadingFiles] = useState(false);

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blog posts",
        variant: "destructive",
      });
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      toast({
        title: "Error", 
        description: "Failed to fetch categories",
        variant: "destructive",
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingFiles(true);
    try {
      const uploadedFiles = [];

      for (const file of Array.from(files)) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blog-attachments')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('blog-attachments')
          .getPublicUrl(filePath);

        uploadedFiles.push({
          name: file.name,
          url: publicUrl,
          type: file.type,
          size: file.size
        });
      }

      setAttachments([...attachments, ...uploadedFiles]);
      toast({ title: "Success", description: "Files uploaded successfully!" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload files",
        variant: "destructive",
      });
    } finally {
      setUploadingFiles(false);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const slug = generateSlug(formData.title);
      const readTime = estimateReadTime(formData.content);
      const tagsArray = formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [];

      const postData = {
        ...formData,
        slug,
        tags: tagsArray,
        read_time_minutes: readTime,
        seo_title: formData.seo_title || formData.title,
        seo_description: formData.seo_description || formData.excerpt,
        published_at: formData.is_published ? new Date().toISOString() : null,
        attachments: attachments,
      };

      if (editingPost) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', editingPost.id);
        
        if (error) throw error;
        toast({ title: "Success", description: "Blog post updated successfully!" });
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);
        
        if (error) throw error;
        toast({ title: "Success", description: "Blog post created successfully!" });
      }

      resetForm();
      fetchPosts();
      setShowForm(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save blog post",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      author_name: 'FranchiseLeads HQ Team',
      category_id: '',
      tags: '',
      seo_title: '',
      seo_description: '',
      featured_image_url: '',
      is_published: false,
      is_featured: false,
    });
    setAttachments([]);
    setEditingPost(null);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || '',
      author_name: post.author_name,
      category_id: post.category_id || '',
      tags: post.tags?.join(', ') || '',
      seo_title: post.seo_title || '',
      seo_description: post.seo_description || '',
      featured_image_url: post.featured_image_url || '',
      is_published: post.is_published,
      is_featured: post.is_featured || false,
    });
    // Load existing attachments if any
    if (post.attachments && Array.isArray(post.attachments)) {
      setAttachments(post.attachments as any);
    } else {
      setAttachments([]);
    }
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: "Success", description: "Blog post deleted successfully!" });
      fetchPosts();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Blog Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Simple content management - no coding required!
              </p>
            </div>
            <Button onClick={() => { resetForm(); setShowForm(true); }}>
              <PlusCircle className="w-4 h-4 mr-2" />
              New Blog Post
            </Button>
          </div>

          <Tabs defaultValue="posts" className="space-y-6">
            <TabsList>
              <TabsTrigger value="posts">All Posts</TabsTrigger>
              <TabsTrigger value="form" className={showForm ? "bg-primary text-primary-foreground" : ""}>
                {editingPost ? 'Edit Post' : 'Write New Post'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-4">
              {posts.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {posts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold">{post.title}</h3>
                              {post.is_published && <Badge variant="default">Published</Badge>}
                              {post.is_featured && <Badge variant="secondary">Featured</Badge>}
                              {!post.is_published && <Badge variant="outline">Draft</Badge>}
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>By {post.author_name}</span>
                              <span>{post.read_time_minutes} min read</span>
                              <span>{new Date(post.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button variant="outline" size="sm" onClick={() => window.open(`/blog/${post.slug}`, '_blank')}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDelete(post.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="form">
              <Card>
                <CardHeader>
                  <CardTitle>{editingPost ? 'Edit Blog Post' : 'Write New Blog Post'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">Blog Title *</Label>
                          <Input
                            id="title"
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            placeholder="Enter your blog title..."
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select value={formData.category_id} onValueChange={(value) => setFormData({...formData, category_id: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="excerpt">Brief Summary</Label>
                          <Textarea
                            id="excerpt"
                            value={formData.excerpt}
                            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                            placeholder="Brief description of your blog post..."
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label htmlFor="tags">Tags (comma separated)</Label>
                          <Input
                            id="tags"
                            value={formData.tags}
                            onChange={(e) => setFormData({...formData, tags: e.target.value})}
                            placeholder="franchise, leads, business, etc."
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="seo_title">SEO Title (for Google)</Label>
                          <Input
                            id="seo_title"
                            value={formData.seo_title}
                            onChange={(e) => setFormData({...formData, seo_title: e.target.value})}
                            placeholder="Will use blog title if empty"
                          />
                        </div>

                        <div>
                          <Label htmlFor="seo_description">SEO Description (for Google)</Label>
                          <Textarea
                            id="seo_description"
                            value={formData.seo_description}
                            onChange={(e) => setFormData({...formData, seo_description: e.target.value})}
                            placeholder="Will use summary if empty"
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label htmlFor="featured_image_url">Featured Image URL</Label>
                          <Input
                            id="featured_image_url"
                            value={formData.featured_image_url}
                            onChange={(e) => setFormData({...formData, featured_image_url: e.target.value})}
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>

                        <div className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="is_published"
                              checked={formData.is_published}
                              onChange={(e) => setFormData({...formData, is_published: e.target.checked})}
                            />
                            <Label htmlFor="is_published">Publish immediately</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="is_featured"
                              checked={formData.is_featured}
                              onChange={(e) => setFormData({...formData, is_featured: e.target.checked})}
                            />
                            <Label htmlFor="is_featured">Featured post</Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="content">Blog Content *</Label>
                      <div className="border rounded-lg overflow-hidden bg-white">
                        <ReactQuill
                          theme="snow"
                          value={formData.content}
                          onChange={(value) => setFormData({...formData, content: value})}
                          modules={{
                            toolbar: [
                              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                              ['bold', 'italic', 'underline', 'strike'],
                              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                              [{ 'indent': '-1'}, { 'indent': '+1' }],
                              [{ 'color': [] }, { 'background': [] }],
                              [{ 'align': [] }],
                              ['link', 'image', 'video'],
                              ['blockquote', 'code-block'],
                              ['clean']
                            ]
                          }}
                          formats={[
                            'header',
                            'bold', 'italic', 'underline', 'strike',
                            'list', 'bullet', 'indent',
                            'color', 'background',
                            'align',
                            'link', 'image', 'video',
                            'blockquote', 'code-block'
                          ]}
                          placeholder="Write your blog post content here..."
                          className="min-h-[500px] bg-white"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 Use the rich text editor toolbar to format your content with headings, bold text, lists, images, and more!
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="attachments">Attachments (Images, PDFs, Documents)</Label>
                      <Input
                        id="attachments"
                        type="file"
                        multiple
                        accept="image/*,.pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        disabled={uploadingFiles}
                        className="cursor-pointer"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Upload images, PDFs, or documents (max 10MB each)
                      </p>
                      
                      {/* Show uploaded attachments */}
                      {attachments.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <Label className="text-sm">Uploaded Files:</Label>
                          {attachments.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                              <span className="text-sm truncate flex-1">{file.name}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeAttachment(index)}
                                className="ml-2"
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Saving...' : editingPost ? 'Update Post' : 'Create Post'}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => { resetForm(); setShowForm(false); }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}