import { styled } from '@stitches';

export const ProjectContainer = styled('div', {
  backgroundImage: '$gradient2',
  borderRadius: '$sm',
  overflow: 'hidden',
  border: '1px solid $borderColor',
});

export const ProjectImage = styled('a', {
  cursor: 'pointer',
  position: 'relative',
  display: 'block',
  zIndex: '$2',
  height: '30rem',

  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: '$1',
    background: 'rgba(0,0,0,.24)',
  },
});

export const ProjectInfo = styled('div', {
  padding: '1.6rem',
});

export const ProjectHeader = styled('div', {
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ProjectTitle = styled('h3', {
  color: '$white',
  fontSize: '1.6rem',
  fontWeight: '600',
  fontFamily: '$secondary',
  textTransform: 'capitalize',
});

export const PorjectDescription = styled('p', {
  fontSize: '1.4rem',
});

export const ProjectLink = styled('a', {
  cursor: 'pointer',
  color: '$white',

  '&:first-child': {
    marginRight: '2rem',
  },
});

export const ProjectTools = styled('div', {
  marginTop: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  columnGap: '3.4rem',
});

export const ProjectToolName = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2rem',

  '& span': {
    height: '.6rem',
    width: '.6rem',
    backgroundImage: '$gradient',
    display: 'inline-block',
    borderRadius: '9999px',
    marginRight: '.8rem',
  },

  '@md': {
    fontSize: '1.4rem',
  },
});
