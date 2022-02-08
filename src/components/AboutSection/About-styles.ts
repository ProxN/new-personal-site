import { styled } from '@stitches';

export const AboutContainer = styled('section', {
  paddingTop: '15rem',
});

export const Paragraph = styled('p', {
  color: '$forground',
  fontSize: '1.4rem',
  lineHeight: 1.65,
  marginBottom: '2.4rem',
  maxWidth: '48rem',

  '& span': {
    color: '$white',
  },

  '@md': {
    fontSize: '1.6rem',
  },
});

export const Skills = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  rowGap: '1rem',
  maxWidth: '48rem',
});

export const SkillItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: '0 0 33.3333%',
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
