import Image from "next/image";
import Link from "next/link";
import { fetchBlogById } from "../api/BlogAPI";
import { notFound } from "next/navigation";

import './blog-content.css';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  // Fetch blog data from API
  let blogData;
  try {
    blogData = await fetchBlogById(slug);
  } catch (error) {
    console.error('Error loading blog:', error);
    notFound();
  }

  if (!blogData) {
    notFound();
  }

  const { blog } = blogData;

  if (!blog) {
    notFound();
  }

  return (
    <>
      {/* Header Section */}
      <section className="w-full grid place-items-center bg-white dark:bg-[var(--prim-dark-bg)] mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] dark:text-gray-100 transition-colors duration-300">
        <div className="w-full flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#DAF8F1] before:to-transparent dark:before:from-[#0D2244] dark:before:to-transparent before:rounded-t-4xl before:-z-10 transition-colors duration-300">
          <div className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-12 xl:py-20 2xl:py-24 max-w-4xl">
            {/* Breadcrumb */}
            <div className="w-full text-sm text-gray-600 dark:text-gray-300">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {' / '}
              <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
              {' / '}
              <span className="text-gray-800 dark:text-gray-200">{blog.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <span>{formatDate(blog.pubDate)}</span>
              {blog.category && (
                <>
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="bg-blue-100 text-blue-700 dark:bg-white/10 dark:text-[#7dd3fc] px-3 py-1 rounded">
                    {blog.category}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="w-full px-4 md:px-6 lg:px-10 py-10 bg-white dark:bg-[var(--prim-dark-bg)] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {blog.images && (
            <div className="mb-10">
              <Image
                src={blog.images}
                alt={blog.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-[filter] duration-300 dark:grayscale dark:hover:grayscale-0"
                priority
              />
            </div>
          )}

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none blog-content
                        /* Light Mode Colors */
                        prose-headings:text-gray-800 prose-headings:font-bold
                        prose-p:text-gray-700 prose-p:leading-relaxed
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-gray-900
                        prose-ul:list-disc prose-ul:pl-6
                        prose-ol:list-decimal prose-ol:pl-6
                        prose-li:text-gray-700
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-4 prose-blockquote:italic
                        prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                        prose-pre:bg-gray-900 prose-pre:text-gray-100
                        prose-img:rounded-lg prose-img:shadow-md

                        /* Replace your dark: section with this for better visibility */
                        dark:prose-invert
                        dark:prose-headings:text-white 
                        dark:prose-p:text-gray-200
                        dark:prose-strong:text-white
                        dark:prose-li:text-gray-200"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags Section */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-white/15 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blogs Button */}
          <div className="mt-12 text-center">
            <Link
              href="/blogs"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const blogData = await fetchBlogById(slug);

  if (!blogData?.blog) {
    notFound();
  }

  const { blog } = blogData;

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDesc || blog.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    keywords: blog.focusKeyword?.join(', ') || blog.tags?.join(', '),
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDesc || blog.content.substring(0, 160).replace(/<[^>]*>/g, ''),
      images: blog.images ? [blog.images] : [],
      type: 'article',
      publishedTime: blog.pubDate,
    },
  };
}