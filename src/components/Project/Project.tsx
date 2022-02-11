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
  IconContainer,
} from './Project.styles';
import GithubSVG from '@assets/logo-github.svg';
import LinkSVG from '@assets/open-outline.svg';

type Link = {
  type: string;
  url: string;
};
export interface ProjectProps {
  title: string;
  image: string;
  description: string;
  tech: string[];
  links: Link[];
}

export const Project: React.FC<ProjectProps> = ({
  description,
  image,
  links,
  tech,
  title,
}) => {
  return (
    <ProjectContainer>
      <ProjectImage href={links[1].url} target='_blank' rel='noopener'>
        <Image src={image} alt='dfg' layout='fill' objectFit='cover' />
      </ProjectImage>
      <ProjectInfo>
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <div>
            {links.map((el) => (
              <ProjectLink
                key={el.url}
                href={el.url}
                target='_blank'
                rel='noopener'
              >
                <IconContainer label={el.type}>
                  {el.type === 'code' ? <GithubSVG /> : <LinkSVG />}
                </IconContainer>
              </ProjectLink>
            ))}
          </div>
        </ProjectHeader>
        <PorjectDescription>{description}</PorjectDescription>
        <ProjectTools>
          {tech.map((el) => (
            <ProjectToolName key={`work-${el}`}>
              <span />
              {el}
            </ProjectToolName>
          ))}
        </ProjectTools>
      </ProjectInfo>
    </ProjectContainer>
  );
};
