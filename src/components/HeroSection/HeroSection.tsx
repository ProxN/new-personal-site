import NextLink from 'next/link';
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
  IconSVG,
} from './HeroSection-styles';
import CircleSVG from '@assets/circle.svg';
import MailSVG from '@assets/mail-outline.svg';
import TwitterSVG from '@assets/logo-twitter.svg';
import LinkedinSVG from '@assets/logo-linkedin.svg';
import GithubSVG from '@assets/logo-github.svg';

const socialLinks = [
  { name: 'email', Icon: MailSVG, link: 'mailto:kanoundev@gmail.com' },
  { name: 'github', Icon: GithubSVG, link: 'https://github.com/ProxN' },
  {
    name: 'linkedin',
    Icon: LinkedinSVG,
    link: 'https://www.linkedin.com/in/ayoubidelkanoun/',
  },
  { name: 'twitter', Icon: TwitterSVG, link: 'https://twitter.com/ProxNN_' },
];

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
          <NextLink href='/#work'>
            <ButtonLink tabIndex={0}>My Work</ButtonLink>
          </NextLink>
          <SocialLinks>
            <Line />
            <Icons>
              {socialLinks.map(({ name, Icon, link }) => (
                <IconBox key={name} href={link} target='_blank'>
                  <IconSVG label='name'>
                    <Icon />
                  </IconSVG>
                </IconBox>
              ))}
            </Icons>
          </SocialLinks>
        </HeroInfo>
        <CircleContainer>
          <CircleSVG />
        </CircleContainer>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
