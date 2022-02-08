import { Container } from '@components/Container';
import {
  ButtonLink,
  CircleContainer,
  GradientSpan,
  Heading,
  HeroContainer,
  HeroInfo,
  IconBox,
  Icons,
  Line,
  SocialLinks,
  SubHeading,
} from './HeroSection-styles';
import CircleSVG from '@assets/circle.svg';
import MailSVG from '@assets/mail-outline.svg';
import TwitterSVG from '@assets/logo-twitter.svg';
import LinkedinSVG from '@assets/logo-linkedin.svg';
import GithubSVG from '@assets/logo-github.svg';

export const HeroSection = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroInfo>
          <SubHeading>Hey there!</SubHeading>
          <Heading>I&apos;m Ayoub.</Heading>
          <SubHeading>
            I&apos;m a <GradientSpan>Full-Stack Developer</GradientSpan> based
            in Morocco.
          </SubHeading>
          <ButtonLink>My Work</ButtonLink>
          <SocialLinks>
            <Line />
            <Icons>
              <IconBox>
                <MailSVG />
              </IconBox>
              <IconBox>
                <LinkedinSVG />
              </IconBox>
              <IconBox>
                <GithubSVG />
              </IconBox>
              <IconBox>
                <TwitterSVG />
              </IconBox>
            </Icons>
          </SocialLinks>
        </HeroInfo>
        <CircleContainer>
          <CircleSVG />
        </CircleContainer>
        {/* <LogoShape>
          <LargeLogo />
        </LogoShape> */}
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
