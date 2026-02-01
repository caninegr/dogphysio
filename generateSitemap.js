// generateSitemap-standalone.js
// This version doesn't require importing - it reads and parses your blogs.js file
// Run: node generateSitemap-standalone.js

const fs = require('fs');
const path = require('path');

// Your website URL
const WEBSITE_URL = 'https://dogphysio.gr';

// Read the blogs.js file
const blogsPath = path.join(__dirname, 'src', 'data', 'blogs.js');
const blogsFileContent = fs.readFileSync(blogsPath, 'utf-8');

// Extract blog data using regex (simple parser)
// This extracts the array content between [ and ];
const match = blogsFileContent.match(/export const blogContent = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('❌ Could not parse blogs.js file');
  process.exit(1);
}

// Use eval to parse the array (Note: only safe because we control the source)
const blogContent = eval(match[1]);

console.log(`📚 Found ${blogContent.length} blog posts`);

// Generate XML for each blog post
const generateBlogUrls = () => {
  return blogContent.map(blog => {
    const lastmod = blog.sortDate || new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${WEBSITE_URL}/blog-article/${blog.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');
};

// Static pages (add/remove as needed)
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog-masonry', priority: '0.9', changefreq: 'weekly' },
  { path: '/team', priority: '0.7', changefreq: 'monthly' },
  { path: '/service', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/coming-soon', priority: '0.7', changefreq: 'monthly' },
  // Add more static pages here
];

const generateStaticUrls = () => {
  const today = new Date().toISOString().split('T')[0];
  return staticPages.map(page => {
    return `  <url>
    <loc>${WEBSITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');
};

// Generate complete sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generateStaticUrls()}
${generateBlogUrls()}
</urlset>`;

// Write to public folder
const publicPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemap);

console.log('✅ Sitemap generated successfully!');
console.log(`📄 Location: ${publicPath}`);
console.log(`📊 Total URLs: ${staticPages.length + blogContent.length}`);
console.log(`\nTo verify: ${WEBSITE_URL}/sitemap.xml`);