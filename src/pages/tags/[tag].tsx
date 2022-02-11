import { Articles } from '@components/Articles';
import BlogCard from '@components/BlogCard/BlogCard';
import { ArticleMetaData, getARticles } from '@lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';

const TagPage = ({
  tag,
  articles,
}: {
  tag: string;
  articles: ArticleMetaData[];
}) => {
  return (
    <Articles title={tag}>
      {articles.map((el) => (
        <BlogCard key={el.slug} {...el} />
      ))}
    </Articles>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as { tag: string };
  const filteredArticles = getARticles().filter((el) =>
    el.metadata.tags.includes(tag)
  );
  const articles = filteredArticles.map((el) => el.metadata);

  return {
    props: {
      tag,
      articles,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getARticles().map((el) => el.metadata.tags);
  const fullTags = new Set(tags.flat());

  const paths = Array.from(fullTags).map((el) => ({ params: { tag: el } }));

  return { paths, fallback: false };
};

export default TagPage;
