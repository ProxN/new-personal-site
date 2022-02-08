import { Container } from '@components/Container';
import { Heading } from '@components/Heading';
import { Project } from '@components/Project';
import { Projects, WorkContainer } from './WorkSection-styles';

export const WorkSection = () => {
  return (
    <WorkContainer>
      <Container>
        <Heading>
          Recent <span>Work</span>
        </Heading>
        <Projects>
          <Project />
          <Project />
          <Project />
          <Project />
        </Projects>
      </Container>
    </WorkContainer>
  );
};
