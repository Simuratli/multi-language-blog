// app/sitemap.ts
import { categoriesQuery, postsQuery } from '@/constants/requests'
import client from '@/sanity'
import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

async function getPages() {
  // Fetch categories and posts
  const categories = await client.fetch(categoriesQuery)
  const posts = await client.fetch(postsQuery)

  // Generate category and post URLs with language support
  const categoriesUrls = categories.flatMap((category: any) => [
    { slug: `categories/${category.slug.current}`, lang: 'en' },
    { slug: `az/categories/${category.slug.current}`, lang: 'az' },
  ])

  const postsUrls = posts.flatMap((post: any) => [
    { slug: `blog/${post.slug.current}`, lang: 'en' },
    { slug: `az/blog/${post.slug.current}`, lang: 'az' },
  ])

  // Combine static and dynamic URLs
  const dynamicPages = [...categoriesUrls, ...postsUrls]

  return dynamicPages
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get the host from headers
  const headersList = await headers()
  const host = headersList.get('host') || 'example.com'
  const baseUrl = `https://${host}`

  // Get dynamic pages
  const pages = await getPages()

  // Define static routes with correct type for changeFrequency
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Generate dynamic routes with language support and hreflang for alternate pages
  const dynamicRoutes: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternate: [
      {
        href: `${baseUrl}/en/${page.slug}`,
        hreflang: 'en',
      },
      {
        href: `${baseUrl}/az/${page.slug}`,
        hreflang: 'az',
      },
    ],
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
