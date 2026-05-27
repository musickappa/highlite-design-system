#!/usr/bin/env node
/**
 * New Client Setup
 * Usage: npm run new <client-slug>
 * Example: npm run new my-client
 *
 * Copies _template/profile.json → clients/<slug>/profile.json
 * and sets client_slug + created_at automatically.
 */

const fs   = require('fs');
const path = require('path');

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: npm run new <client-slug>');
  console.error('  slug must be lowercase alphanumeric + hyphens (e.g. my-client)');
  process.exit(1);
}

const root       = path.join(__dirname, '..');
const srcPath    = path.join(root, 'clients', '_template', 'profile.json');
const destDir    = path.join(root, 'clients', slug);
const destPath   = path.join(destDir, 'profile.json');

if (fs.existsSync(destPath)) {
  console.error(`Already exists: clients/${slug}/profile.json`);
  console.error('Edit it directly, then run: npm run poc ' + slug);
  process.exit(1);
}

const profile = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
profile._meta.client_slug = slug;
profile._meta.created_at  = new Date().toISOString().slice(0, 10);
profile._meta.created_by  = 'Highlite';

fs.mkdirSync(destDir, { recursive: true });
fs.writeFileSync(destPath, JSON.stringify(profile, null, 2), 'utf8');

console.log(`\n✓ Client folder created: clients/${slug}/`);
console.log(`  1. Edit: clients/${slug}/profile.json`);
console.log(`  2. Generate: npm run poc ${slug}\n`);
