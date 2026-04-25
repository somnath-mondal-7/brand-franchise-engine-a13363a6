#!/usr/bin/env node
/**
 * Cleans up generated pre-rendered HTML files.
 *
 * Important: real visitors must always receive the React SPA version of pages,
 * including /locations/* and service/location programmatic routes. Search bots are
 * already handled by api/render.js at request time, so we should not copy static
 * HTML into dist/ where it can override the live site design.
 */

import { existsSync, rmSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PRERENDERED = join(DIST, '__prerendered');

if (!existsSync(PRERENDERED)) {
  console.log('⚠️ No pre-rendered files found. Skipping.');
  process.exit(0);
}

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
console.log(`🧹 Removing ${fileCount.toLocaleString()} pre-rendered HTML files so visitor routes keep the React SPA design...`);

rmSync(PRERENDERED, { recursive: true, force: true });

console.log('✅ Done! Pre-rendered HTML was not copied into dist, so visitor-facing pages keep the live website styling.');
