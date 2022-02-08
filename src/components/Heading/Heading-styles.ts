import { styled } from '@stitches';

export const Text = styled('h2', {
  textTransform: 'capitalize',
  fontSize: '3.4rem',
  fontFamily: '$secondary',
  color: '$white',
  marginBottom: '2.4rem',
  fontWeight: 'normal',
  position: 'relative',
  display: 'inline-block',
  paddingRight: '4.2rem',

  '&::before': {
    content: '',
    width: '100%',
    height: '1px',
    backgroundImage: '$gradient',
    position: 'absolute',
    top: 0,
  },
  '&::after': {
    content: '',
    width: '30px',
    position: 'absolute',
    right: '0px',
    top: '0px',
    height: 'calc(50% + 5px)',
    borderRight: '1px solid transparent',
    borderBottom: '1px solid transparent',
    borderImage: '$gradient',
    borderImageSlice: 1,
  },

  '& span': {
    backgroundImage: '$gradient',
    backgroundClip: 'text',
    color: 'transparent',
  },

  // '& svg': {
  //   position: 'absolute',
  // },

  '@md': {
    fontSize: '4rem',
  },
});
