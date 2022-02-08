import { styled } from '@stitches';

export const FooterContainer = styled('footer', {
  height: '6rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1.5rem',
});

export const FooterText = styled('p', {
  fontSize: '1.4rem',
  color: '$forground',
  fontWeight: 'normal',

  '& span': {
    backgroundImage: '$gradient',
    backgroundClip: 'text',
    color: 'transparent',
  },

  '@md': {
    fontSize: '1.6rem',
  },
});
