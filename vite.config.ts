import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Custom plugin to generate sitemap after build
const sitemapPlugin = () => {
  return {
    name: 'generate-sitemap',
    async closeBundle() {
      console.log('🗺️  Generating sitemap...');
      try {
        await execAsync('npx tsx src/scripts/buildSitemap.ts');
        console.log('✅ Sitemap generated successfully');
      } catch (error) {
        console.error('❌ Failed to generate sitemap:', error);
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
