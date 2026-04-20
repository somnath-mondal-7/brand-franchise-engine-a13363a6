#!/usr/bin/env node
/**
 * Copies pre-rendered HTML files from dist/__prerendered/ into dist/
 * for SEO-heavy programmatic routes only.
 *
 * Important: do NOT overwrite core React pages like /blog, /about, /services, etc.
 * Those should always use the main app design for real visitors.
 */

import { cpSync, existsSync, rmSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PRERENDERED = join(DIST, '__prerendered');

if (!existsSync(PRERENDERED)) {
  console.log('⚠️ No pre-rendered files found. Skipping.');
  process.exit(0);
}

const blockedTopLevelRoutes = new Set([
  'about',
  'services',
  'digital-marketing',
  'contact',
  'blog',
  'testimonials',
  'buy-franchise-leads',
  'case-studies',
  'franchise-leads-usa',
  'franchise-leads-uk',
  'franchise-leads-india',
  'franchise-leads-canada',
  'franchise-leads-australia',
  'franchise-leads-dubai',
  'franchise-leads-kuwait',
  'legal-terms',
]);

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

function shouldCopy(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/');
  if (normalized === 'index.html') return false;

  const firstSegment = normalized.split('/')[0];
  return !blockedTopLevelRoutes.has(firstSegment);
}

function copyAllowedFiles(sourceDir, targetDir) {
  for (const entry of readdirSync(sourceDir)) {
    const sourcePath = join(sourceDir, entry);
    const stat = statSync(sourcePath);

    if (stat.isDirectory()) {
      copyAllowedFiles(sourcePath, targetDir);
      continue;
    }

    const relativePath = relative(PRERENDERED, sourcePath);
    if (!shouldCopy(relativePath)) continue;

    const destinationPath = join(targetDir, relativePath);
    cpSync(sourcePath, destinationPath, { force: true });
  }
}

const fileCount = countFiles(PRERENDERED);
console.log(`📦 Reviewing ${fileCount.toLocaleString()} pre-rendered HTML files...`);

copyAllowedFiles(PRERENDERED, DIST);
rmSync(PRERENDERED, { recursive: true, force: true });

console.log('✅ Done! Core React pages are preserved; only programmatic SEO pages are copied.');
