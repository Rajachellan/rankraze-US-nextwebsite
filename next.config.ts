// next.config.ts
const nextConfig = {
  allowedDevOrigins: ["192.168.6.84", "https://api.rankraze.us"],  // ✅ ADD THIS LINE
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.rankraze.us",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.rankraze.us",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.rankraze.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    qualities: [65, 75],
  },
  productionBrowserSourceMaps: false,
  // Prevent Next.js internals (msw testmode, playwright) from being bundled server-side
  // This fixes the 5.4s "11irsd9k2.msw.js" chunk appearing in production builds
  serverExternalPackages: ['msw', '@mswjs/interceptors'],
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "remixicon-react",
      "lucide-react",
      "react-icons",
      "react-toastify",
    ],
  },
  compress: true,
  turbopack: {},
  webpack(config: any, { isServer, webpack }: any) {
    // Stub MSW out of the client bundle entirely (Turbopack tree-shaking workaround)
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'msw/browser': false,
      'msw': false,
    };
    // Hard-exclude MSW from the bundle so it cannot ship legacy polyfills to production
    // Note: 'webpack' must come from the second param, not config.webpack
    config.plugins.push(
      new webpack.IgnorePlugin({ resourceRegExp: /^(msw|@mswjs)/ })
    );
    if (isServer) {
      // Also exclude from server bundle
      const externals = Array.isArray(config.externals) ? config.externals : [config.externals].filter(Boolean);
      config.externals = [...externals, 'msw', '@mswjs/interceptors'];
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*/en",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        // This matches any request starting with /wp-content/uploads/
        source: '/wp-content/uploads/:path*',
        // This sends it to the exact same path on your new subdomain
        destination: 'https://assets.rankraze.us/wp-content/uploads/:path*',
        permanent: true,
      },
      {
        source: '/virtual-reality-development',
        destination: '/virtual-reality-development-company-dallas',
        permanent: true,
      },
      {
        source: '/virtual-reality-development-chennai-india',
        destination: '/virtual-reality-development-company-dallas',
        permanent: true,
      },
      {
        source: '/augmented-reality-development',
        destination: '/augmented-reality-development-in-texas',
        permanent: true,
      },
      {
        source: '/augmented-reality-development-chennai-india',
        destination: '/augmented-reality-development-in-texas',
        permanent: true,
      },
      {
        source: '/ppc-company-Chennai',
        destination: '/ppc-management-services-in-dallas',
        permanent: true,
      },
      {
        source: '/web-designing-in-Chennai',
        destination: '/web-designing',
        permanent: true,
      },
      {
        source: '/ppc-company-chennai',
        destination: '/ppc-management-services-in-dallas',
        permanent: true,
      },
      {
        source: '/web-designing-in-chennai',
        destination: '/web-designing',
        permanent: true,
      },
      {
        source: '/digital-marketing-services-in-chennai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/boost-your-roi-digital-marketing-agency-chennai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/online-reputation-management-services-chennai',
        destination: '/online-reputation-management-services-in-texas',
        permanent: true,
      },
      {
        source: '/content-writing-agency-chennai',
        destination: '/content-writing-services-dallas',
        permanent: true,
      },
      {
        source: '/web-analytics-service-in-chennai',
        destination: '/web-analytic',
        permanent: true,
      },
      {
        source: '/sentiment-analysis',
        destination: '/sentiment-analysis-services',
        permanent: true,
      },
      {
        source: '/web-development',
        destination: '/web-designing',
        permanent: true,
      },
      {
        source: '/web-hosting-company-service-in-chennai',
        destination: '/web-hosting',
        permanent: true,
      },
      {
        source: '/mobile-app-development-company-chennai',
        destination: '/mobile-app-development',
        permanent: true,
      },
      {
        source: '/2d-and-3d-animation-company-in-chennai-india',
        destination: '/2d-and-3d-animation-services-in-dallas',
        permanent: true,
      },
      {
        source: '/website-portfolio',
        destination: '/web-designing-portfolio',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/case-study',
        permanent: true,
      },
      {
        source: '/seo-company-chennai',
        destination: '/seo-services-in-texas',
        permanent: true,
      },
      {
        source: '/sem-company-chennai',
        destination: '/ppc-management-services-in-dallas',
        permanent: true,
      },
      {
        source: '/request-a-quote',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/branding-and-rebranding',
        destination: '/branding',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about-rankraze-digital-marketing-agency',
        permanent: true,
      },
      {
        source: '/digital-marketing-agency-in-korattur',
        destination: '/',
        permanent: true,
      },
      {
        source: '/digital-marketing-agency-in-guindy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/irqs-case-study-2',
        destination: '/irclass-case-study',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;