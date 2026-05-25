import { useState } from "react";
import HeroCarousel from "./HeroCarousel";
import Navigation from "./Navigation";
import ServicesSection from "./ServicesSection";
import MediaSection from "./MediaSection";
import PodcastSection from "./PodcastSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openBooking = (service = "") => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedService("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={() => openBooking()} />

      <main>
        <section id="home">
          <HeroCarousel onBookingClick={() => openBooking()} />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="services">
          <ServicesSection onBookingClick={openBooking} />
        </section>

        <section>
          {/* <MediaSection /> */}
        </section>

        <section>
          <PodcastSection />
        </section>

        <section>
          <TestimonialsSection />
        </section>
      </main>

      <Footer onBookingClick={() => openBooking()} />

      <BookingForm
        isOpen={isBookingOpen}
        onClose={closeBooking}
        selectedService={selectedService}
      />
    </div>
  );
}