import { AboutSection } from '@components/AboutSection';
// import { BlogSection } from '@components/BlogSection';
import { ContactSection } from '@components/ContactSection';
import { HeroSection } from '@components/HeroSection';
import { WorkSection } from '@components/WorkSection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  );
};

export default Index;
