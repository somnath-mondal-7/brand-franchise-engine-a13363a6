#!/usr/bin/env node
/**
 * Copies pre-rendered HTML files from dist/__prerendered/ into dist/
 * so Cloudflare Pages serves them for matching routes.
 * 
 * For each route like /locations/usa/california/index.html,
 * Cloudflare Pages will serve it when visiting /locations/usa/california
 */

import { cpSync, existsSync, rmSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PRERENDERED = join(DIST, '__prerendered');

if (!existsSync(PRERENDERED)) {
  console.log('⚠️ No pre-rendered files found. Skipping.');
  process.exit(0);
}

// Count files
function countFiles(dir) {
  let count = 0;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      count += countFiles(full);
    } else {
      count++;
    }
  }
  return count;
}

const fileCount = countFiles(PRERENDERED);
console.log(`📦 Copying ${fileCount.toLocaleString()} pre-rendered HTML files into dist/...`);

// Copy all pre-rendered files into dist (merging, not replacing)
cpSync(PRERENDERED, DIST, { recursive: true, force: false });

// Clean up the __prerendered directory
rmSync(PRERENDERED, { recursive: true, force: true });

console.log(`✅ Done! ${fileCount.toLocaleString()} static HTML files merged into dist/`);
