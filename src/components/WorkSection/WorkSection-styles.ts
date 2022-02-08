import { styled } from '@stitches';

export const WorkContainer = styled('section', {
  paddingTop: '15rem',
});

export const Projects = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(30rem,auto))',
  rowGap: '5rem',
  columnGap: '4rem',

  '@md': {
    gridTemplateColumns: 'repeat(2,1fr)',
  },
});
