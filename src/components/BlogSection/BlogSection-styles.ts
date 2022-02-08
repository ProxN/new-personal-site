import { styled } from '@stitches';

export const BlogContainer = styled('section', {
  paddingTop: '15rem',
});

export const Blogs = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '2rem',
  columnGap: '4rem',

  '@sm': {
    gridTemplateColumns: '1fr 1fr',
  },
});

export const Blog = styled('a', {
  cursor: 'pointer',
  backgroundImage: '$gradient2',
  display: 'block',
  padding: '1.2rem 1.6rem',
  border: '1px solid $borderColor',
  borderRadius: '$sm',
});

export const BlogTitle = styled('h3', {
  fontFamily: '$secondary',
  fontSize: '1.6rem',
  color: '$white',
  fontWeight: 'normal',
  marginBottom: '.4rem',
  display: 'inline-block',

  '@md': {
    fontSize: '1.8rem',
  },
});

export const BlogDescription = styled('p', {
  fontSize: '1.2rem',
  lineHeight: 1.55,

  '@md': {
    fontSize: '1.4rem',
  },
});

export const BlogTime = styled('span', {
  fontSize: '1.2rem',
  marginTop: '1rem',
  display: 'inline-block',
});
