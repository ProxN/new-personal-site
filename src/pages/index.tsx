import { AboutSection } from '@components/AboutSection';
import { BlogSection } from '@components/BlogSection';
import { ContactSection } from '@components/ContactSection';
import { HeroSection } from '@components/HeroSection';
import { WorkSection } from '@components/WorkSection';
import { ArticleMetaData, getARticles } from '@lib/api';

const Index = ({ articles }: { articles: ArticleMetaData[] }) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <BlogSection articles={articles} />
      <ContactSection />
    </>
  );
};

export const getStaticProps = async () => {
  const articles = getARticles()
    .map((el) => el.metadata)
    .slice(0, 2);

  return { props: { articles } };
};

export default Index;
