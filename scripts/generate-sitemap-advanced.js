const fs = require('fs');
const path = require('path');
const { ApolloClient, InMemoryCache, gql, createHttpLink } = require('@apollo/client');
const fetch = require('cross-fetch');
const slugify = require('slugify');

// Base URL for your website
const BASE_URL = 'https://manufacturingezyfind.com';

// Environment configuration
const ENV = {
  GRAPHQL_API: process.env.NEXT_PUBLIC_GRAPHQL_API || 'https://api.ezyfind.co.za/graphql',
  CATEGORY_ID: parseInt(process.env.NEXT_PUBLIC_CATEGORY_ID || '1402', 10)
};

// Function to fetch dynamic product URLs
async function fetchProductUrls() {
  try {
    console.log('Fetching product data...');
    
    // Initialize authenticated client if not already done
    if (!apolloClient) {
      await initializeAuthenticatedClient();
    }
    
    // First query to get total count
    const { data: tempData } = await apolloClient.query({
      query: GET_PRODUCTS,
      variables: {
        domainCategoryIds: String(ENV.CATEGORY_ID),
        scopeId: null,
        salesTypeId: null,
        page: 1,
        size: 1
      }
    });

    const totalCount = tempData.getPrdProductList.count;
    console.log(`Found ${totalCount} products`);

    if (totalCount === 0) {
      return [];
    }

    // Second query to get all products
    const { data: finalData } = await apolloClient.query({
      query: GET_PRODUCTS,
      variables: {
        domainCategoryIds: String(ENV.CATEGORY_ID),
        scopeId: null,
        salesTypeId: null,
        page: 1,
        size: totalCount
      }
    });

    const products = finalData.getPrdProductList?.result || [];
    
    return products.map(product => ({
      path: `/manufacturing/product/${product.productID}/${slugify(product.productName)}`,
      priority: PAGE_CONFIG.dynamic.products.priority,
      changefreq: PAGE_CONFIG.dynamic.products.changefreq
    }));
  } catch (error) {
    console.error('Error fetching product URLs:', error);
    return [];
  }
}

// Function to fetch business URLs
async function fetchBusinessUrls() {
  try {
    console.log('Fetching business data...');
    
    // Initialize authenticated client if not already done
    if (!apolloClient) {
      await initializeAuthenticatedClient();
    }
    
    // First query to get total count
    const { data: tempData } = await apolloClient.query({
      query: GET_BUSINESS_LIST,
      variables: {
        statusIds: '1',
        companyName: '',
        categoryIds: String(ENV.CATEGORY_ID),
        provinceIds: '',
        cityIds: '',
        suburbIds: '',
        page: 1,
        size: 1
      },
      fetchPolicy: 'no-cache'
    });

    const totalCount = tempData.getBusinessList.count;
    console.log(`Found ${totalCount} businesses`);

    if (totalCount === 0) {
      return [];
    }

    // Second query to get all businesses
    const { data: finalData } = await apolloClient.query({
      query: GET_BUSINESS_LIST,
      variables: {
        statusIds: '1',
        companyName: '',
        categoryIds: String(ENV.CATEGORY_ID),
        provinceIds: '',
        cityIds: '',
        suburbIds: '',
        page: 1,
        size: totalCount
      },
      fetchPolicy: 'no-cache'
    });

    const businesses = finalData.getBusinessList?.result || [];
    
    return businesses.map(business => ({
      path: `/manufacturing/business/${business.companyId}/${slugify(business.companyName)}`,
      priority: PAGE_CONFIG.dynamic.businesses.priority,
      changefreq: PAGE_CONFIG.dynamic.businesses.changefreq
    }));
  } catch (error) {
    console.error('Error fetching business URLs:', error);
    return [];
  }
}

// Function to fetch job URLs
async function fetchJobUrls() {
  try {
    console.log('Fetching job data...');
    
    // Initialize authenticated client if not already done
    if (!apolloClient) {
      await initializeAuthenticatedClient();
    }
    
    // First query to get total count
    const { data: tempData } = await apolloClient.query({
      query: GET_POST_LIST,
      variables: {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: 1, // Jobs category
        page: 1,
        size: 1
      },
      fetchPolicy: 'no-cache'
    });

    const totalCount = tempData.getPostList.count;
    console.log(`Found ${totalCount} jobs`);

    if (totalCount === 0) {
      return [];
    }

    // Second query to get all jobs
    const { data: finalData } = await apolloClient.query({
      query: GET_POST_LIST,
      variables: {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: 1, // Jobs category
        page: 1,
        size: totalCount
      },
      fetchPolicy: 'no-cache'
    });

    const jobs = finalData.getPostList?.result || [];
    
    return jobs.map(job => ({
      path: `/manufacturing/jobs/${job.postID}/${slugify(job.title)}`,
      priority: PAGE_CONFIG.dynamic.jobs.priority,
      changefreq: PAGE_CONFIG.dynamic.jobs.changefreq
    }));
  } catch (error) {
    console.error('Error fetching job URLs:', error);
    return [];
  }
}

// Function to fetch tender URLs
async function fetchTenderUrls() {
  try {
    console.log('Fetching tender data...');
    
    // Initialize authenticated client if not already done
    if (!apolloClient) {
      await initializeAuthenticatedClient();
    }
    
    // First query to get total count
    const { data: tempData } = await apolloClient.query({
      query: GET_POST_LIST,
      variables: {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: 2, // Tender category
        page: 1,
        size: 1
      },
      fetchPolicy: 'no-cache'
    });

    const totalCount = tempData.getPostList.count;
    console.log(`Found ${totalCount} tenders`);

    if (totalCount === 0) {
      return [];
    }

    // Second query to get all tenders
    const { data: finalData } = await apolloClient.query({
      query: GET_POST_LIST,
      variables: {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: 2, // Tender category
        page: 1,
        size: totalCount
      },
      fetchPolicy: 'no-cache'
    });

    const tenders = finalData.getPostList?.result || [];
    
    return tenders.map(tender => ({
      path: `/manufacturing/tenders/${tender.postID}/${slugify(tender.title)}`,
      priority: PAGE_CONFIG.dynamic.tenders.priority,
      changefreq: PAGE_CONFIG.dynamic.tenders.changefreq
    }));
  } catch (error) {
    console.error('Error fetching tender URLs:', error);
    return [];
  }
}

// Function to fetch article URLs
async function fetchArticleUrls() {
  try {
    console.log('Fetching article data...');
    
    // Initialize authenticated client if not already done
    if (!apolloClient) {
      await initializeAuthenticatedClient();
    }
    
    // First query to get total count
    const { data: tempData } = await apolloClient.query({
      query: GET_POST_LIST,
      variables: {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: 3, // Blog/Article category
        page: 1,
        size: 1
      },
      fetchPolicy: 'no-cache'
    });

    const totalCount = tempData.getPostList.count;
    console.log(`Found ${totalCount} articles`);

    if (totalCount === 0) {
      return [];
    }

    // Second query to get all articles
    const { data: finalData } = await apolloClient.query({
      query: GET_POST_LIST,
      variables: {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: 3, // Blog/Article category
        page: 1,
        size: totalCount
      },
      fetchPolicy: 'no-cache'
    });

    const articles = finalData.getPostList?.result || [];
    
    return articles.map(article => ({
      path: `/manufacturing/article/${article.postID}/${slugify(article.title)}`,
      priority: PAGE_CONFIG.dynamic.articles.priority,
      changefreq: PAGE_CONFIG.dynamic.articles.changefreq
    }));
  } catch (error) {
    console.error('Error fetching article URLs:', error);
    return [];
  }
}

// Function to fetch digital magazine URLs
async function fetchDigitalUrls() {
  try {
    console.log('Fetching digital magazine data...');
    
    // Initialize authenticated client if not already done
    if (!apolloClient) {
      await initializeAuthenticatedClient();
    }
    
    // First query to get total count
    const { data: tempData } = await apolloClient.query({
      query: GET_MAGAZINES_LIST,
      variables: {
        statusIds: '2',
        page: 1,
        size: 1
      },
      fetchPolicy: 'no-cache'
    });

    const totalCount = tempData.getMagazinesList.count;
    console.log(`Found ${totalCount} digital magazines`);

    if (totalCount === 0) {
      return [];
    }

    // Second query to get all magazines
    const { data: finalData } = await apolloClient.query({
      query: GET_MAGAZINES_LIST,
      variables: {
        statusIds: '2',
        page: 1,
        size: totalCount
      },
      fetchPolicy: 'no-cache'
    });

    const magazines = finalData.getMagazinesList?.result || [];
    
    return magazines.map(magazine => ({
      path: `/manufacturing/digital/${magazine.eflyerId}/${slugify(magazine.magazineName)}`,
      priority: '0.6',
      changefreq: 'weekly'
    }));
  } catch (error) {
    console.error('Error fetching digital magazine URLs:', error);
    return [];
  }
}

// Function to fetch all dynamic URLs
async function fetchDynamicUrls() {
  const dynamicUrls = [];
  
  // Fetch product URLs
  const productUrls = await fetchProductUrls();
  dynamicUrls.push(...productUrls);
  
  // Fetch business URLs
  const businessUrls = await fetchBusinessUrls();
  dynamicUrls.push(...businessUrls);
  
  // Fetch job URLs
  const jobUrls = await fetchJobUrls();
  dynamicUrls.push(...jobUrls);
  
  // Fetch tender URLs
  const tenderUrls = await fetchTenderUrls();
  dynamicUrls.push(...tenderUrls);
  
  // Fetch article URLs
  const articleUrls = await fetchArticleUrls();
  dynamicUrls.push(...articleUrls);
  
  // Fetch digital magazine URLs
  const digitalUrls = await fetchDigitalUrls();
  dynamicUrls.push(...digitalUrls);
  
  return dynamicUrls;
}

// Initialize Apollo Client for guest login
const guestHttpLink = createHttpLink({
  uri: ENV.GRAPHQL_API,
  fetch: fetch
});

const guestClient = new ApolloClient({
  link: guestHttpLink,
  cache: new InMemoryCache()
});

// Function to get guest token
async function getGuestToken() {
  try {
    console.log('Getting guest token...');
    const { data } = await guestClient.query({
      query: GUEST_LOGIN,
      fetchPolicy: 'no-cache'
    });
    
    const result = data?.guestLogin?.result;
    if (result?.value) {
      console.log('Guest token obtained successfully');
      return result.value;
    }
    
    throw new Error('No token received from guest login');
  } catch (error) {
    console.error('Failed to get guest token:', error);
    throw error;
  }
}

// Initialize authenticated Apollo Client
let apolloClient = null;

async function initializeAuthenticatedClient() {
  const token = await getGuestToken();
  
  const authHttpLink = createHttpLink({
    uri: ENV.GRAPHQL_API,
    fetch: fetch,
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    }
  });

  apolloClient = new ApolloClient({
    link: authHttpLink,
    cache: new InMemoryCache()
  });
  
  return apolloClient;
}

// GraphQL Queries
const GUEST_LOGIN = gql`
  query GuestLogin {
    guestLogin {
      message
      result {
        validTo
        value
      }
    }
  }
`;

const GET_PRODUCTS = gql`
  query GetProducts(
    $salesTypeId: Int = null
    $domainCategoryIds: String = null
    $scopeId: Int = null
    $size: Int = null
    $page: Int = null
    $companyId: Int = null
  ) {
    getPrdProductList(
      salesTypeId: $salesTypeId
      domainCategoryIds: $domainCategoryIds
      scopeId: $scopeId
      page: $page
      size: $size
      companyId: $companyId
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      success
      totalPages
      result {
        categoryID
        categoryName
        description
        companyID
        salesTypeId
        scopeID
        productID
        productImage
        productName
        domainCategory
        endDate
        unitCost
        prdBid {
          bidId
          createdDate
          bidAmount
          userId
        }
      }
    }
  }
`;

const GET_BUSINESS_LIST = gql`
  query getBusinessList(
    $statusIds: String!
    $companyName: String!
    $categoryIds: String!
    $provinceIds: String!
    $cityIds: String!
    $suburbIds: String!
    $size: Int = null
    $page: Int = null
  ) {
    getBusinessList(
      statusIds: $statusIds
      companyName: $companyName
      categoryIds: $categoryIds
      provinceIds: $provinceIds
      cityIds: $cityIds
      suburbIds: $suburbIds
      page: $page
      size: $size
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      success
      totalPages
      result {
        companyId
        companyName
        joinDate
        logoPath
        compProvinceName
        compCityName
        compSuburb
        compStreetAddress
        compDescription
        latitude
        longitude
      }
    }
  }
`;

const GET_POST_LIST = gql`
  query GetPostList (
    $postId: Int = null
    $title: String = null
    $domainId: Int = null
    $categoryId: Int = null
    $companyId: Int = null
    $location: String = null
    $page: Int = null
    $size: Int = null
  ) {
    getPostList (
      postId: $postId
      title: $title
      domainId: $domainId
      categoryId: $categoryId
      companyId: $companyId
      location: $location
      page: $page
      size: $size
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      result {
        postID
        title
        descriptionSEO
        companyID
        companyName
        startDate
        endDate
      }
      success
      totalPages
    }
  }
`;

const GET_MAGAZINES_LIST = gql`
  query GetMag(
    $companyIds: String
    $provinceIds: String
    $cityIds: String
    $suburbIds: String
    $statusIds: String
    $page: Int
    $size: Int
  ) {
    getMagazinesList(
      provinceIds: $provinceIds
      companyIds: $companyIds
      cityIds: $cityIds
      suburbIds: $suburbIds
      statusIds: $statusIds
      page: $page
      size: $size
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      success
      totalPages
      result {
        eflyerId
        magazineName
        eFlyerDescription
        companyName
        startDate
        endDate
        provinceName
        cityName
        suburb
        mapEflyersUploadDtos {
          filePath
          thumbNailImagePath
        }
      }
    }
  }
`;

// Configuration for different types of pages
const PAGE_CONFIG = {
  static: [
    // Main pages
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/manufacturing', priority: '0.9', changefreq: 'daily' },
    
    // Manufacturing section pages
    { path: '/manufacturing/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/manufacturing/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/manufacturing/businesses', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/product', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/jobs', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/tenders', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/article', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/digital', priority: '0.7', changefreq: 'weekly' },
    { path: '/manufacturing/special', priority: '0.7', changefreq: 'weekly' },
    { path: '/manufacturing/list-business', priority: '0.7', changefreq: 'monthly' },
    
    // Auth and utility pages
    { path: '/login', priority: '0.5', changefreq: 'monthly' },
    { path: '/register', priority: '0.5', changefreq: 'monthly' },
    { path: '/forgot-password', priority: '0.4', changefreq: 'monthly' },
    { path: '/cart', priority: '0.6', changefreq: 'weekly' },
    { path: '/pricing', priority: '0.7', changefreq: 'monthly' }
  ],
  // Dynamic routes configuration
  dynamic: {
    products: { priority: '0.7', changefreq: 'weekly' },
    businesses: { priority: '0.7', changefreq: 'weekly' },
    articles: { priority: '0.6', changefreq: 'weekly' },
    jobs: { priority: '0.6', changefreq: 'weekly' },
    tenders: { priority: '0.6', changefreq: 'weekly' }
  }
};

// Function to generate sitemap XML
async function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  PAGE_CONFIG.static.forEach(page => {
    const url = page.path === '' ? BASE_URL : `${BASE_URL}${page.path}`;
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add dynamic pages
  console.log('Fetching dynamic URLs...');
  const dynamicUrls = await fetchDynamicUrls();
  
  dynamicUrls.forEach(page => {
    const url = `${BASE_URL}${page.path}`;
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  console.log(`Generated sitemap with ${PAGE_CONFIG.static.length + dynamicUrls.length} URLs`);
  return sitemap;
}

// Function to generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /_vercel/

# Allow important pages
Allow: /manufacturing/
Allow: /manufacturing/businesses/
Allow: /manufacturing/product/
Allow: /manufacturing/jobs/
Allow: /manufacturing/tenders/
Allow: /manufacturing/article/
Allow: /manufacturing/digital/
Allow: /manufacturing/special/
Allow: /manufacturing/list-business
Allow: /manufacturing/about/
Allow: /manufacturing/contact/
Allow: /pricing
Allow: /login
Allow: /register
Allow: /forgot-password
Allow: /cart

# Crawl delay (optional)
Crawl-delay: 1
`;
}

// Function to write files
async function writeFiles() {
  try {
    // Ensure public directory exists
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate and write sitemap
    const sitemap = await generateSitemap();
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    // Generate and write robots.txt
    const robotsContent = generateRobotsTxt();
    const robotsPath = path.join(publicDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent);

    return { sitemapPath, robotsPath };
  } catch (error) {
    throw new Error(`Failed to write files: ${error.message}`);
  }
}

// Main execution
if (require.main === module) {
  (async () => {
    try {
      console.log('🚀 Starting advanced sitemap generation...\n');
      
      const { sitemapPath, robotsPath } = await writeFiles();
      
      console.log('✅ Sitemap generated successfully!');
      console.log(`📁 Location: ${sitemapPath}`);
      console.log(`🔗 URL: ${BASE_URL}/sitemap.xml`);
      
      console.log('\n✅ Robots.txt generated successfully!');
      console.log(`📁 Location: ${robotsPath}`);
      
      console.log('\n🎉 All files generated successfully!');
      
    } catch (error) {
      console.error('❌ Error generating sitemap:', error.message);
      process.exit(1);
    }
  })();
}

// Export for use in other scripts
module.exports = {
  generateSitemap,
  generateRobotsTxt,
  writeFiles
};
