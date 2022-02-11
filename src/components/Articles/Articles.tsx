import {
  ArticlesContainer,
  ArticlesList,
  ArticlesHeading,
  Container,
} from './Articles-styles';

interface ArticlesProps {
  title: string;
}

export const Articles: React.FC<ArticlesProps> = ({ title, children }) => {
  return (
    <ArticlesContainer>
      <Container>
        <ArticlesHeading>
          <span>{title}</span>
        </ArticlesHeading>
        <ArticlesList>{children}</ArticlesList>
      </Container>
    </ArticlesContainer>
  );
};

export default Articles;
