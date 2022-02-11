import { styled } from '@stitches';
import { Text } from '../Heading/Heading-styles';

export const ArticlesContainer = styled('section', {
  paddingTop: '15rem',
  minHeight: 'calc(100vh - 7rem)',
});

export const Container = styled('div', {
  maxWidth: '75rem',
  margin: '0 auto',
});

export const ArticlesList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  rowGap: '2.4rem',
});

export const ArticlesHeading = styled('h1', Text, {
  fontSize: '4.4rem',
});
