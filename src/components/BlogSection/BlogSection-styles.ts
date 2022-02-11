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
