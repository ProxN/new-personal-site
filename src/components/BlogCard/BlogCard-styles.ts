import { styled } from '@stitches';

export const Blog = styled('a', {
  cursor: 'pointer',
  backgroundImage: '$gradient2',
  padding: '1.2rem 1.6rem',
  border: '1px solid $borderColor',
  transition: '$ease-in-out',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',

  '&:hover': {
    borderColor: '$primaryColor',
  },

  '&:focus': {
    ring: '0 0 0 2px',
  },
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
  color: '$forground',
  flex: 1,

  '@md': {
    fontSize: '1.4rem',
  },
});

export const BlogTime = styled('span', {
  fontSize: '1.2rem',
  color: '$forground',
  marginTop: '1rem',
  display: 'inline-block',
});
