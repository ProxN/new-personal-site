import { AboutSection } from '@components/AboutSection';
// import { BlogSection } from '@components/BlogSection';
import { ContactSection } from '@components/ContactSection';
import { HeroSection } from '@components/HeroSection';
import Seo from '@components/Seo/Seo';
import { WorkSection } from '@components/WorkSection';

const Index = () => {
  return (
    <Seo>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </Seo>
  );
};

export default Index;
