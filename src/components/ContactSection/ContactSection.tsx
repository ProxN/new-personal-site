import { Container } from '@components/Container';
import { Heading } from '@components/Heading';
import {
  ContactContainer,
  ContactIcon,
  ContactInfo,
  ContactLink,
  ContactLinks,
  ContactText,
} from './ContactSection-styles';
import MailSVG from '@assets/mail-outline.svg';
import LinkedinSVG from '@assets/logo-linkedin.svg';
import TwitterSVG from '@assets/logo-twitter.svg';

const links = [
  { name: 'email', Icon: MailSVG, link: 'mailto:kanoundev@gmail.com' },
  {
    name: 'linkedin',
    Icon: LinkedinSVG,
    link: 'https://www.linkedin.com/in/ayoubidelkanoun/',
  },
  { name: 'twitter', Icon: TwitterSVG, link: 'https://twitter.com/ProxNN_' },
];

export const ContactSection = () => {
  return (
    <ContactContainer>
      <Container>
        <ContactInfo>
          <Heading>
            Get In <span>Touch</span>
          </Heading>
          <ContactText>
            I&apos;m currently looking for a new opportunity as a
            <span>&nbsp;front-end developer.</span>
          </ContactText>
          <ContactText>Let&apos;s get in touch and talk.</ContactText>
          <ContactLinks>
            {links.map(({ name, link, Icon }) => (
              <li key={`contact-${name}`}>
                <ContactLink href={link} target='_blank' rel='noopener'>
                  <ContactIcon>
                    <Icon />
                  </ContactIcon>
                  {name}
                </ContactLink>
              </li>
            ))}
          </ContactLinks>
        </ContactInfo>
      </Container>
    </ContactContainer>
  );
};
