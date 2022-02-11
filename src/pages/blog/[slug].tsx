import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeHighlight from 'rehype-highlight';
import { serialize } from 'next-mdx-remote/serialize';
import { getArticleBySlug, getArticlesSlugs } from '@lib/api';
import { Article, MdxArticle } from '@components/Article';
import 'highlight.js/styles/atom-one-dark.css';

const ArticlePage = ({ article }: { article: MdxArticle }) => {
  return (
    <Article data={article}>
      <Head>
        <title>Ayoub Idelkanoun - {article.metadata.title}</title>
      </Head>
    </Article>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const { params } = props;
  const { slug } = params as { slug: string };
  const { content, metadata } = getArticleBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeExternalLinks, { target: 'true', rel: ['noopener'] }],
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { article: { source: mdxSource, metadata } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlesSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
