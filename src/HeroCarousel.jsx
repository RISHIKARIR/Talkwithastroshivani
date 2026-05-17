import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
  CalendarDays,
  PhoneCall,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const carouselImages = [
  {
    url: "/carsoual1.png",
    title: "Unlock Your Future With Vedic Astrology",
    subtitle:
      "Personalized horoscope, kundli reading, love, career, marriage and life guidance by an experienced astrologer.",
    tag: "Trusted Vedic Astrologer",
  },
  {
    url: "/heroimg2.jpeg",
    title: "Ancient Indian Wisdom For Modern Life",
    subtitle:
      "Get spiritual clarity and practical solutions through astrology, numerology, vastu and planetary guidance.",
    tag: "Kundli • Vastu • Numerology",
  },
  {
    url: "/carsoual2.png",
    title: "Find Clarity In Love, Career & Marriage",
    subtitle:
      "Receive meaningful guidance for important life decisions with accurate and confidential consultations.",
    tag: "Private Consultation Available",
  },
];

export default function HeroCarousel() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#180707]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={900}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        loop
        className="
          h-[680px] sm:h-[720px] lg:h-[780px]

          [&_.swiper-pagination]:!bottom-6
          [&_.swiper-pagination-bullet]:!h-2.5
          [&_.swiper-pagination-bullet]:!w-2.5
          [&_.swiper-pagination-bullet]:!bg-white
          [&_.swiper-pagination-bullet]:!opacity-60
          [&_.swiper-pagination-bullet]:!transition-all
          [&_.swiper-pagination-bullet-active]:!w-8
          [&_.swiper-pagination-bullet-active]:!rounded-full
          [&_.swiper-pagination-bullet-active]:!bg-yellow-400
          
        "
      >
        {carouselImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Blurred Background Image */}
              <img
                src={item.url}
                alt=""
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-xl"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-[#3d0b0b]/85 to-[#180707]/70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(250,204,21,0.24),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(220,38,38,0.24),transparent_30%)]" />

              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
                  {/* Text Content */}
                  <div className="max-w-3xl text-white">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-white/10 px-4 py-2 text-sm font-medium text-yellow-100 shadow-lg backdrop-blur-md">
                      <Sparkles className="h-4 w-4 text-yellow-300" />
                      {item.tag}
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                      {item.title}
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-gray-100 sm:text-lg lg:text-xl">
                      {item.subtitle}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                        <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                        5+ Years Experience
                      </div>

                      <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                        <CalendarDays className="h-4 w-4 text-yellow-300" />
                        Online Consultation
                      </div>

                      <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                        <PhoneCall className="h-4 w-4 text-yellow-300" />
                        Personal Guidance
                      </div>
                    </div>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <button className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-base font-semibold text-[#2b0909] shadow-[0_15px_40px_rgba(245,158,11,0.35)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(245,158,11,0.45)]">
                        Book Consultation
                      </button>

                      <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-[#3d0b0b]">
                        View Services
                      </button>
                    </div>
                  </div>

                  {/* Proper Visible Image */}
                  <div className="hidden lg:flex justify-end">
                    <div className="relative h-[560px] w-full max-w-[520px] overflow-hidden rounded-[36px] border border-yellow-400/25 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="h-full w-full rounded-[28px] object-contain"
                        loading={index === 0 ? "eager" : "lazy"}
                      />

                      <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-black/40 p-4 text-white backdrop-blur-md">
                        <p className="text-sm text-yellow-200">
                          Personalized Guidance
                        </p>
                        <h3 className="mt-1 text-lg font-semibold">
                          Kundli • Career • Marriage • Vastu
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Image Glow */}
              <div className="absolute bottom-0 right-0 z-0 block h-full w-full opacity-30 lg:hidden">
                <img
                  src={item.url}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        aria-label="Previous slide"
        className="hero-prev absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-yellow-400 hover:text-[#3d0b0b] md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        aria-label="Next slide"
        className="hero-next absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-yellow-400 hover:text-[#3d0b0b] md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}