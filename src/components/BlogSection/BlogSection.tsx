import { Container } from '@components/Container';
import { Heading } from '@components/Heading';
import {
  Blog,
  BlogContainer,
  BlogDescription,
  Blogs,
  BlogTime,
  BlogTitle,
} from './BlogSection-styles';

export const BlogSection = () => {
  return (
    <BlogContainer>
      <Container>
        <Heading>
          <span>Recent</span> Articles
        </Heading>
        <Blogs>
          <Blog>
            <BlogTitle>What is Lorem Ipsum?</BlogTitle>
            <BlogDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </BlogDescription>
            <BlogTime>June 20 2021 • 2 min read</BlogTime>
          </Blog>
          <Blog>
            <BlogTitle>What is Lorem Ipsum?</BlogTitle>
            <BlogDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </BlogDescription>
            <BlogTime>June 20 2021 • 2 min read</BlogTime>
          </Blog>
        </Blogs>
      </Container>
    </BlogContainer>
  );
};
