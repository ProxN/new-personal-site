import { globalCss } from '@stitches';

const Css = globalCss({
  '*,*::before,*::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
  },
  html: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    fontSize: '10px',
    scrollBehavior: 'smooth',
  },
  body: {
    lineHeight: 1.45,
    fontWeight: 'normal',
    color: '$forground',
    backgroundColor: '$background',
    fontSize: '$sm',
    fontFamily: `$secondary, $default`,
  },
  a: {
    textDecoration: 'none',
  },
  ul: {
    listStyle: 'none',
  },
  'h1,h2,h3,h4,h5,h6': {
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
    margin: 0,
  },

  'a:focus': {
    ring: '0 0 0 2px',
  },
});

export const GlobalCss = () => {
  Css();
  return null;
};
