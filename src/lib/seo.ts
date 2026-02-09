const SITE_URL = "https://dhruvaldhameliya.com";
const SITE_NAME = "Dhruval Dhameliya";

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function generateArticleJsonLd(post: {
  title: string;
  description: string;
  date: string;
  updated?: string;
  coverImage?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: getCanonicalUrl(`/blog/${post.slug}`),
    ...(post.coverImage && { image: post.coverImage }),
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: "Software Engineer, Android",
    worksFor: {
      "@type": "Organization",
      name: "Meta",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Shree Swami Atmanand Saraswati Institute of Technology",
      },
    ],
    sameAs: [
      "https://github.com/dcdhameliya",
      "https://linkedin.com/in/dcdhameliya",
    ],
  };
}
