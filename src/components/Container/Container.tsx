import { styled } from '@stitches';

const StyledContainer = styled('div', {
  padding: '0 1.5rem',

  '@md': {
    maxWidth: '114rem',
    margin: '0 auto',
  },
});

export const Container: React.FC = (props) => {
  return <StyledContainer {...props} />;
};
