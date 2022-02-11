import { styled } from '@stitches';

export const ArticleContainer = styled('article', {
  paddingTop: '12rem',
  minHeight: 'calc(100vh - 7rem)',
});

export const ArticleTitle = styled('h1', {
  fontSize: '3.4rem',
  backgroundImage: '$gradient',
  backgroundClip: 'text',
  color: 'transparent',
  textAlign: 'center',
  marginBottom: '2rem',

  '@md': {
    fontSize: '5rem',
  },
});

export const ImageBox = styled('div', {
  position: 'relative',
  width: '100%',
});

export const ArticleContent = styled('div', {
  maxWidth: '75rem',
  margin: '0 auto',
});

export const ArticleMdxContent = styled('div', {
  '& h2,h3,h4,h5,h6': {
    backgroundImage: '$gradient',
    backgroundClip: 'text',
    display: 'inline-block',
    color: 'transparent',
  },

  [`& h2 ~ ${ImageBox}`]: { marginBottom: '2rem' },

  [`& ul + ${ImageBox}`]: {
    marginTop: '2rem',
  },

  '& h2 > a': {
    color: 'transparent',
    fontSize: '3rem',
  },

  '& h3': {
    marginTop: '1.6rem',
  },

  '& h3 > a': {
    color: 'transparent',
    fontSize: '1.6rem',
  },

  '& p': {
    fontSize: '1.4rem',
    lineHeight: 1.74,
    color: '$forground',
    margin: '2rem 0',
  },

  '& ul li': {
    position: 'relative',
    margin: '1rem 0',
    paddingLeft: '1.6rem',
    fontSize: '1.4rem',
  },

  '& ul li:before': {
    content: '',
    position: 'absolute',
    backgroundImage: '$gradient',
    height: '6px',
    width: '6px',
    borderRadius: '999px',
    left: 0,
    top: '8px',
  },

  '& ol': {
    padding: '0 1.5rem',
  },
  '& ol li::marker': {
    color: '$primaryColor',
  },

  '& code, & strong': {
    color: '$primaryColor',
    fontWeight: '600',
  },

  '& pre': {
    margin: '2.4rem 0',
  },

  '& pre code': {
    backgroundImage: '$gradient2',
    border: '1px solid $colors$borderColor',
    borderRadius: '$sm',
    marginBottom: '2rem',
    color: '$forground',
  },

  '& a': {
    color: '$primaryColor',
    fontSize: '1.4rem',
  },

  '& a:focus': {
    ring: '0 0 0 2px',
  },

  '@md': {
    '& h2': {
      fontSize: '3.4rem',
    },

    '& p': {
      fontSize: '1.6rem',
    },

    '& ul li, & a, & pre code, & ol li': {
      fontSize: '1.6rem',
    },
  },
});

export const ArticleHeader = styled('div', {
  display: 'flex',
  margin: '3rem 0',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const ArticleAvatar = styled('div', {
  width: '4rem',
  height: '4rem',
  borderRadius: '9999px',
  position: 'relative',
  overflow: 'hidden',
});

export const ArticleAuthor = styled('a', {
  fontSize: '1.4rem',
  color: '$forground !important',
  marginLeft: '2rem',
  cursor: 'pointer',
  padding: '0.5rem 0',

  '@md': {
    fontSize: '1.6rem',
  },
});

export const ArticleText = styled('span', {
  fontSize: '1.4rem',
  display: 'inline-block',

  '@md': {
    fontSize: '1.6rem',
  },
});

export const Dot = styled('span', {
  backgroundImage: '$gradient',
  backgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
  margin: '0 1.5rem',
});

export const Line = styled('span', {
  height: '1px',
  backgroundImage: '$gradient',
  width: '100%',
  display: 'block',
  margin: '3.4rem 0',
});

export const Tags = styled('ul', {
  display: 'flex',
  columnGap: '2rem',
  marginBottom: '3rem',
});

export const Tag = styled('a', {
  padding: '.4rem .8rem',
  cursor: 'pointer',
  backgroundImage: '$gradient2',
  border: '1px solid $colors$borderColor',
  borderRadius: 'sm',
  color: '$forground',
  fontSize: '1.4rem',
  display: 'inline-block',
});
