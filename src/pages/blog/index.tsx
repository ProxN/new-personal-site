import Head from 'next/head';
import { Articles } from '@components/Articles';
import BlogCard from '@components/BlogCard/BlogCard';
import { ArticleMetaData, getARticles } from '@lib/api';

const Blog = ({ articles }: { articles: ArticleMetaData[] }) => {
  return (
    <Articles title='Articles'>
      <Head>
        <title>Ayoub idelkanoun - Articles</title>
      </Head>
      {articles.map((el) => (
        <BlogCard key={el.slug} {...el} />
      ))}
    </Articles>
  );
};

export const getStaticProps = async () => {
  const articles = getARticles().map((el) => el.metadata);

  return { props: { articles } };
};

export default Blog;
