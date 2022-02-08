import { Container } from '@components/Container';
import { Heading } from '@components/Heading';
import { Project } from '@components/Project';
import { Projects, WorkContainer } from './WorkSection-styles';

const data = [
  {
    title: 'Fortnite Stats',
    image: '/fortnite_tracker.png',
    description:
      'Fortnite tracker to look up for player stats and view the current item shop.',
    tech: ['javascript', 'sass'],
    links: [
      {
        type: 'code',
        url: 'https://github.com/ProxN/FortniteTracker',
      },
      {
        type: 'demo',
        url: 'https://fortstats.netlify.app/',
      },
    ],
  },
  {
    title: 'Todohub',
    image: '/todohub.png',
    description:
      'A simple time management app that helps you track your monthly goals and daily tasks.',
    tech: ['reactjs', 'typescript'],
    links: [
      {
        type: 'code',
        url: 'https://github.com/ProxN/Todohub',
      },
      {
        type: 'demo',
        url: 'https://todohub1.netlify.app/',
      },
    ],
  },
  {
    title: 'Reddit Timer',
    image: '/reddit_timer.png',
    description:
      'Reddit timer is a website for content creators to look for the best times to post to Reddit.',
    tech: ['reactjs', 'styled-components'],
    links: [
      {
        type: 'code',
        url: 'https://github.com/ooloo-io/reddit-timer-ProxN',
      },
      {
        type: 'demo',
        url: 'https://reddit-timer.netlify.app/',
      },
    ],
  },
  {
    title: 'Anime Chart',
    image: '/anime_chart.jpg',
    description: `An Anime Chart website made with Next.js, 
    This was my first Project after finishing a react course, It displays a list of anime for each season.`,
    tech: ['Next.js', 'Anilist API'],
    links: [
      {
        type: 'code',
        url: 'https://github.com/ProxN/ReactAnimeChart',
      },
      {
        type: 'demo',
        url: 'https://anime-chart.netlify.com/',
      },
    ],
  },
];

export const WorkSection = () => {
  return (
    <WorkContainer id='work'>
      <Container>
        <Heading>
          Recent <span>Work</span>
        </Heading>
        <Projects>
          {data.map((el) => (
            <Project key={el.title} {...el} />
          ))}
        </Projects>
      </Container>
    </WorkContainer>
  );
};
