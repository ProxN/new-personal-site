import { styled } from '@stitches';

export const ContactContainer = styled('section', {
  paddingTop: '28rem',
  paddingBottom: '15rem',
});

export const ContactInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ContactText = styled('p', {
  fontWeight: 'normal',
  color: '$forground',
  textAlign: 'center',
  lineHeight: 1.55,
  marginBottom: '1.4rem',
  fontSize: '1.4rem',

  '& span': {
    color: '$white',
  },

  '@md': {
    fontSize: '1.6rem',
  },
});

export const ContactLinks = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '2.4rem',
  marginTop: '1.4rem',
});

export const ContactLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: '$forground',
  fontWeight: '400',
  textTransform: 'capitalize',
  cursor: 'pointer',
  border: '1px solid transparent',
  padding: '.8rem 1.2rem',
  borderImage: '$gradient',
  borderImageSlice: 1,
  position: 'relative',
  zIndex: '$2',
  transition: '$ease-in-out',
  fontSize: '1.4rem',

  // '&::before': {
  //   content: '',
  //   position: 'absolute',
  //   top: '0',
  //   left: '0',
  //   right: '0',
  //   bottom: '0',
  //   width: '100%',
  //   height: '100%',
  //   backgroundImage: '$gradient',
  //   opacity: 0,
  //   zIndex: '-1',
  //   transition: '$ease-in-out',
  // },
  // '&:hover::before': {
  //   opacity: 1,
  // },

  // '&:hover': {
  //   color: '$white',
  // },

  '@md': {
    fontSize: '1.6rem',
  },
});

export const ContactIcon = styled('div', {
  display: 'flex',
  marginRight: '1rem',
  fontSize: '2rem',
});
