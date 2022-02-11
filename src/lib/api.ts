import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import readingTime from 'reading-time';
import matter from 'gray-matter';

const ARTICLES_PATH = path.join(process.cwd(), 'src', 'articles');

export interface Article {
  content: string;
  metadata: ArticleMetaData;
}

export interface ArticleMetaData {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  time: string;
  excerpt: string;
}

export const getArticlesSlugs = () => {
  const paths = sync(`${ARTICLES_PATH}/*.mdx`);

  return paths.map((p) => {
    const parts = p.split('/');
    const fileName = parts[parts.length - 1];
    const [slug] = fileName.split('.');
    return slug;
  });
};

export const getArticleBySlug = (slug: string): Article => {
  const articlePath = path.join(ARTICLES_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);
  const { data, content } = matter(source);

  const time = readingTime(content);

  return {
    content,
    metadata: {
      time: time.text,
      slug,
      title: data.title,
      tags: data.tags,
      excerpt: data.excerpt,
      date: data.date,
    },
  };
};

export const getARticles = () => {
  const articles = getArticlesSlugs().map((slug) => getArticleBySlug(slug));

  const sortedArticles = articles
    .sort((a, b) => {
      const aDate = new Date(a.metadata.date).getTime();
      const bDate = new Date(b.metadata.date).getTime();
      return aDate - bDate;
    })
    .reverse();

  return sortedArticles;
};
