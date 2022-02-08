import { Container } from '@components/Container';
import { Heading } from '@components/Heading';
import { AboutContainer, Paragraph, SkillItem, Skills } from './About-styles';

const skills = [
  'Javascript',
  'React.js',
  'Typescript',
  'Node.js',
  'Express',
  'Type-graphql',
  'Postgres',
  'Git',
  'React-query',
];

export const AboutSection = () => {
  return (
    <AboutContainer>
      <Container>
        <Heading>
          <span>About</span> Me
        </Heading>
        <Paragraph>
          Hello! I&apos;m <span>ayoub</span>, a
          <span> full-stack developer</span> based in Morocco, I love building
          beautiful & modern web applications. In my spare time, I&apos;m
          usually building things and searching for new skills to learn.
        </Paragraph>
        <Paragraph>
          Here are a few technologies I&apos;ve been working with recently:
        </Paragraph>
        <Skills>
          {skills.map((el) => (
            <SkillItem key={el}>
              <span />
              {el}
            </SkillItem>
          ))}
        </Skills>
      </Container>
    </AboutContainer>
  );
};
