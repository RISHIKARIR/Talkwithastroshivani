import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1719500495894-980ced7a4c1d?q=80&w=1200",
    title: "Professional Astrologer",
    subtitle: "Guiding Your Destiny with Ancient Wisdom",
  },
  {
    url: "https://images.unsplash.com/photo-1725483733290-134e28219b8e?q=80&w=1200",
    title: "Vedic Astrology",
    subtitle: "Traditional Wisdom for Modern Life",
  },
  {
    url: "https://images.unsplash.com/photo-1532968787238-51611422cb5b?q=80&w=1200",
    title: "Cosmic Guidance",
    subtitle: "Navigate Life's Journey with Clarity",
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        loop
        className="h-[500px] md:h-[600px]"
      >
        {carouselImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="container mx-auto px-6">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-6xl mb-4">
                      {item.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                      {item.subtitle}
                    </p>
                    <button className="bg-red-800 hover:bg-red-700 px-8 py-3 rounded-full text-lg transition">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full">
        <ChevronLeft className="w-6 h-6 text-red-900" />
      </button>

      <button className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full">
        <ChevronRight className="w-6 h-6 text-red-900" />
      </button>
    </div>
  );
}
