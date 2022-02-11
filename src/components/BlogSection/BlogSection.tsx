import BlogCard from '@components/BlogCard/BlogCard';
import { Container } from '@components/Container';
import { Heading } from '@components/Heading';
import { ArticleMetaData } from '@lib/api';
import { BlogContainer, Blogs } from './BlogSection-styles';

interface BlogSectionProps {
  articles: ArticleMetaData[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ articles }) => {
  return (
    <BlogContainer>
      <Container>
        <Heading>
          <span>Recent</span> Articles
        </Heading>
        <Blogs>
          {articles.map((el) => (
            <BlogCard key={el.slug} {...el} />
          ))}
        </Blogs>
      </Container>
    </BlogContainer>
  );
};
