import { styled } from '@stitches';

export const HeroContainer = styled('section', {
  height: 'calc(100vh - 7rem)',
  paddingTop: '12rem',
});

export const HeroInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const SubHeading = styled('p', {
  fontSize: '2.6rem',
  fontFamily: '$secondary',
  color: '$forground',
  fontWeight: 'normal',
  display: 'inline-block',

  '@md': {
    fontSize: '3rem',
  },
});

export const Heading = styled('h1', {
  fontSize: '5rem',
  backgroundImage: '$gradient',
  backgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',

  '@md': {
    fontSize: '7.2rem',
  },
});

export const GradientSpan = styled('span', {
  backgroundImage: '$gradient',
  backgroundClip: 'text',
  color: 'transparent',
});

export const ButtonLink = styled('a', {
  height: '6rem',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontSize: '1.8rem',
  color: '$white',
  borderRadius: '$sm',
  marginTop: '5rem',
  display: 'inline-flex',
  fontWeight: '600',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: '$gradient',
  padding: '0 6.5rem',

  '&:focus': {
    ring: '0 0 0 2px',
  },
});

export const CircleContainer = styled('div', {
  position: 'absolute',
  top: '102px',
  right: '0',
  display: 'block',
  '@sm': {
    display: 'none',
  },
});

export const SocialLinks = styled('div', {
  marginTop: '5rem',
  display: 'flex',
  alignItems: 'center',
});

export const Line = styled('div', {
  height: '1px',
  width: '7.5rem',
  backgroundImage: '$gradient',

  '@md': {
    width: '13rem',
  },
});

export const Icons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '1.4rem',
  columnGap: '1.8rem',
});

export const IconBox = styled('div', {
  display: 'flex',
  color: '$forground',
  cursor: 'pointer',
  transition: '$ease-in-out',
  fontSize: '2.4rem',

  '&:hover': {
    color: '$white',
  },
});

export const LogoShape = styled('div', {
  position: 'absolute',
  top: '12rem',
  right: 0,
  display: 'none',

  '@lg': {
    display: 'block',
  },
});
