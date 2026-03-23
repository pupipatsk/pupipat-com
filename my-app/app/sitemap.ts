import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/photography`, lastModified },
    { url: `${baseUrl}/resume`, lastModified },
    { url: `${baseUrl}/tutoring`, lastModified },
  ];
}

