import Image from 'next/image';
import {
  ProjectImage,
  ProjectContainer,
  ProjectInfo,
  ProjectTitle,
  ProjectHeader,
  ProjectLink,
  PorjectDescription,
  ProjectToolName,
  ProjectTools,
} from './Project.styles';
import GithubSVG from '@assets/logo-github.svg';
import LinkSVG from '@assets/open-outline.svg';

export const Project = () => {
  return (
    <ProjectContainer>
      <ProjectImage>
        <Image
          src='/fortnite_tracker.png'
          alt='dfg'
          layout='fill'
          objectFit='cover'
        />
      </ProjectImage>
      <ProjectInfo>
        <ProjectHeader>
          <ProjectTitle>Fortnite Stats</ProjectTitle>
          <div>
            <ProjectLink>
              <GithubSVG />
            </ProjectLink>
            <ProjectLink>
              <LinkSVG />
            </ProjectLink>
          </div>
        </ProjectHeader>
        <PorjectDescription>
          An application where users can look upon their Fortnite stats and view
          current items shop, I built this app using vanilla javascript and
          saas.
        </PorjectDescription>
        <ProjectTools>
          <ProjectToolName>
            <span />
            Javascript
          </ProjectToolName>
          <ProjectToolName>
            <span />
            Sass
          </ProjectToolName>
          <ProjectToolName>
            <span />
            Webpack
          </ProjectToolName>
        </ProjectTools>
      </ProjectInfo>
    </ProjectContainer>
  );
};
