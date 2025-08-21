# Sitemap Generation Guide

This project includes automated sitemap generation tools to help with SEO optimization.

## Available Scripts

### Basic Sitemap Generation
```bash
npm run sitemap
# or
npm run sitemap:generate
```

### Advanced Sitemap Generation
```bash
npm run sitemap:advanced
```

### Build with Sitemap
```bash
npm run build:with-sitemap
```

## What Gets Generated

### 1. `public/sitemap.xml`
- XML sitemap following the sitemap protocol
- Includes all static pages with appropriate priorities and change frequencies
- **Dynamically fetches and includes all product, business, job, tender, article, and digital magazine URLs**
- Uses GraphQL API with guest authentication to retrieve current data
- Automatically updated with current timestamp

### 2. `public/robots.txt`
- Search engine crawling instructions
- References the sitemap location
- Disallows private/admin areas
- Allows important content pages

## Page Configuration

The sitemap generator includes the following pages with SEO-optimized settings:

### High Priority (0.9-1.0)
- Homepage (`/`) - Priority: 1.0, Change: Daily
- Manufacturing (`/manufacturing`) - Priority: 0.9, Change: Daily

### Medium Priority (0.7-0.8)
- Business listings (`/manufacturing/businesses`) - Priority: 0.8, Change: Weekly
- Products (`/manufacturing/product`) - Priority: 0.8, Change: Weekly
- Jobs (`/manufacturing/jobs`) - Priority: 0.8, Change: Weekly
- Tenders (`/manufacturing/tenders`) - Priority: 0.8, Change: Weekly
- Articles (`/manufacturing/article`) - Priority: 0.8, Change: Weekly
- Digital Catalogue (`/manufacturing/digital`) - Priority: 0.7, Change: Weekly
- Special (`/manufacturing/special`) - Priority: 0.7, Change: Weekly
- List Business (`/manufacturing/list-business`) - Priority: 0.7, Change: Monthly
- About (`/manufacturing/about`) - Priority: 0.7, Change: Monthly
- Contact (`/manufacturing/contact`) - Priority: 0.7, Change: Monthly
- Pricing (`/pricing`) - Priority: 0.7, Change: Monthly
- Cart (`/cart`) - Priority: 0.6, Change: Weekly

### Lower Priority (0.4-0.5)
- Login (`/login`) - Priority: 0.5, Change: Monthly
- Register (`/register`) - Priority: 0.5, Change: Monthly
- Forgot Password (`/forgot-password`) - Priority: 0.4, Change: Monthly

## Customization

### Adding New Pages
Edit `scripts/generate-sitemap-advanced.js` and add new pages to the `PAGE_CONFIG.static` array:

```javascript
{ path: '/new-page', priority: '0.8', changefreq: 'weekly' }
```

### Dynamic URL Generation
The advanced sitemap generator automatically fetches dynamic URLs from the GraphQL API:

- **Products**: Fetched from `GET_PRODUCT_LIST` query
- **Businesses**: Fetched from `GET_BUSINESS_LIST` query  
- **Jobs**: Fetched from `GET_POST_LIST` query with `postType: "job"`
- **Tenders**: Fetched from `GET_POST_LIST` query with `postType: "tender"`
- **Articles**: Fetched from `GET_POST_LIST` query with `postType: "article"`
- **Digital Magazines**: Fetched from `GET_MAGAZINES_LIST` query

Each dynamic URL includes:
- SEO-friendly slugified paths
- Appropriate priority (0.7 for products/magazines, 0.6 for others)
- Weekly change frequency
- Current timestamp

### Changing Base URL
Update the `BASE_URL` constant in the script files:

```javascript
const BASE_URL = 'https://yourdomain.com';
```

## Integration with Build Process

### Option 1: Automatic (Recommended)
The sitemap and robots.txt are now **automatically generated** every time you run:
```bash
npm run build
```

This happens through the Next.js build hook in `next.config.ts`.

### Option 2: Manual Generation
If you need to generate manually:
```bash
npm run sitemap:advanced
```

### Option 3: Original Build (without sitemap)
If you need to build without sitemap generation:
```bash
npm run build:original
```

### Option 4: CI/CD Integration
For CI/CD pipelines, the sitemap will be automatically generated during build:
```yaml
- name: Build Application
  run: npm run build
  # Sitemap is automatically generated during build
```

## SEO Benefits

1. **Search Engine Discovery**: Helps search engines find and index all your pages
2. **Crawl Efficiency**: Provides optimal crawling instructions via robots.txt
3. **Priority Indication**: Tells search engines which pages are most important
4. **Update Frequency**: Indicates how often content changes
5. **Complete Coverage**: Ensures no important pages are missed

## Maintenance

- Run sitemap generation after adding new pages
- Update page priorities based on business importance
- Adjust change frequencies based on content update patterns
- Monitor search console for sitemap submission status

## Troubleshooting

### Common Issues

1. **Permission Errors**: Ensure the `public` directory is writable
2. **Missing Pages**: Check that all page paths are correctly configured
3. **Invalid URLs**: Verify the `BASE_URL` is correct and accessible
4. **GraphQL Authentication Errors**: Ensure the guest login functionality is working
5. **Dynamic URL Fetching Failures**: Check GraphQL API connectivity and query validity
6. **Large Sitemap Size**: Monitor sitemap size as dynamic content grows (current: 3676+ URLs)

### Validation

Validate your generated sitemap using:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- Online XML validators

## Build Integration

The sitemap generation is now integrated into the build process via package.json scripts. This means:

- **Automatic**: Sitemap and robots.txt are generated after every build
- **No extra steps**: Just run `npm run build` as usual
- **Consistent**: Always up-to-date with your latest build
- **CI/CD friendly**: Works seamlessly in deployment pipelines
- **Current Status**: 3676+ URLs included in the sitemap (17 static + 3659 dynamic)
  - 72 product pages
  - 3206 business listings
  - 6 job postings
  - 0 tender listings (when available)
  - 0 article pages (when available)
  - 375 digital magazine pages

## Files Structure

```
scripts/
├── generate-sitemap.js          # Basic sitemap generator
├── generate-sitemap-advanced.js # Advanced generator with configuration
package.json                     # Build script integration
public/
├── sitemap.xml                  # Generated sitemap
└── robots.txt                   # Generated robots.txt
docs/
└── SITEMAP.md                   # This documentation
```
