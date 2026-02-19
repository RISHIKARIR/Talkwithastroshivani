import  HeroCarousel  from "./HeroCarousel";
import  Navigation  from "./Navigation";
import  ServicesSection  from "./ServicesSection";
import  MediaSection  from "./MediaSection";
import  PodcastSection  from "./PodcastSection";
import  TestimonialsSection  from "./TestimonialsSection";
import  AboutSection  from "./AboutSection";
import  Footer  from "./Footer";



export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <MediaSection />
      <PodcastSection />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
}
