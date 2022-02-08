import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { styled } from '@stitches';

const MainContainer = styled('main', {
  minHeight: '100vh',
  width: '100%',
});

export const Layout: React.FC = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      {children}
      <Footer />
    </MainContainer>
  );
};
