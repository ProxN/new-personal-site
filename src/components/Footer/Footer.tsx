import { FooterContainer, FooterText } from './Footer-styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Made with <span>Next.js</span> and hosted on <span>Vercel</span>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
