// Shared slug helpers so sitemap URLs and route matching stay consistent.

/**
 * Creates the exact same slug format used in sitemap generation.
 * - lowercases
 * - converts whitespace to hyphens
 * - strips non [a-z0-9-]
 */
export const slugify = (input: string): string => {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};
