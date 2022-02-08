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
            <li>
              <ContactLink>
                <ContactIcon>
                  <MailSVG />
                </ContactIcon>
                Email
              </ContactLink>
            </li>
            <li>
              <ContactLink>
                <ContactIcon>
                  <LinkedinSVG />
                </ContactIcon>
                Linkedin
              </ContactLink>
            </li>
            <li>
              <ContactLink>
                <ContactIcon>
                  <TwitterSVG />
                </ContactIcon>
                Twitter
              </ContactLink>
            </li>
          </ContactLinks>
        </ContactInfo>
      </Container>
    </ContactContainer>
  );
};
