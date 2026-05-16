import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Clock,
  Youtube,
  Sparkles,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const videos = [
  {
    id: "bM2ZoE_ngno",
    url: "https://youtu.be/bM2ZoE_ngno?si=vQtIWjC04yxmlQOK",
    title: "May Horoscope 2026 | May Rashifal",
    description:
      "Discover May 2026 horoscope predictions, remedies, career insights, love guidance and important planetary movements.",
    duration: "1:37:40",
    tag: "Yearly Horoscope",
  },
  {
    id: "BNQIp1Q19Zc",
    url: "https://youtu.be/BNQIp1Q19Zc?si=O8hl6oIwFj3FmvqR",
    title: "April Horoscope 2026 | Monthly Rashifal",
    description:
      "A detailed astrology reading for April 2026 with guidance for all zodiac signs and important life decisions.",
    duration: "1:39:27",
    tag: "Monthly Guidance",
  },
  {
    id: "wJ0Bu0ZZkLI",
    url: "https://youtu.be/wJ0Bu0ZZkLI?si=2HXs3iphMhz9YOZw",
    title: "March Horoscope 2026 | Rashifal & Remedies",
    description:
      "Understand how March 2026 planetary movements can influence success, clarity, relationships and personal growth.",
    duration: "59:40",
    tag: "Astrology Insights",
  },
  {
    id: "7ovrnP5KHuE",
    url: "https://youtu.be/7ovrnP5KHuE?si=06JVbZwgV0TZGav6",
    title: "February Horoscope 2026 | All Zodiac Signs",
    description:
      "Explore February 2026 predictions, important transitions, spiritual remedies and practical astrological advice.",
    duration: "57:58",
    tag: "Rashifal",
  },
];

const tabs = [
  "Yearly Horoscope 2026",
  "Learn Astrology",
  "Planetary Transits",
  "Spiritual Guidance",
];

export default function PodcastSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f1e8] py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-900/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white/70 px-5 py-2 text-sm font-semibold text-orange-700 shadow-sm">
            <Youtube className="h-4 w-4" />
            Watch and Listen
          </div>

          <h2 className="font-serif text-4xl font-normal leading-tight text-[#5b1d0d] sm:text-5xl lg:text-6xl">
            Simplifying Astrology for{" "}
            <span className="text-orange-500">You</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#8a6655] sm:text-lg">
            Watch Shivani’s latest astrology videos, horoscope predictions,
            remedies, spiritual guidance and cosmic insights.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex min-w-max items-center justify-center gap-3 border-b border-[#dec9ae] pb-4">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-[#4b1608] shadow-lg shadow-orange-500/20"
                    : "bg-white/70 text-[#8a6655] hover:bg-white hover:text-[#5b1d0d]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".podcast-prev",
              nextEl: ".podcast-next",
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={26}
            slidesPerView={1.08}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.2 },
            }}
            className="!overflow-visible"
          >
            {videos.map((video) => {
              const thumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

              return (
                <SwiperSlide key={video.id}>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <article className="overflow-hidden rounded-[30px] border border-orange-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl">
                      {/* Thumbnail */}
                      <div className="relative h-[220px] overflow-hidden bg-orange-100">
                        <img
                          src={thumbnail}
                          alt={video.title}
                          onError={(e) => {
                            e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                          }}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Tag */}
                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#5b1d0d] backdrop-blur-md">
                          <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                          {video.tag}
                        </div>

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-xl transition duration-300 group-hover:scale-110">
                            <Play
                              className="ml-1 h-8 w-8 fill-white text-white"
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          <Clock className="h-3.5 w-3.5" />
                          {video.duration}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="line-clamp-2 font-serif text-[22px] font-bold leading-snug text-[#5b1d0d]">
                          {video.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#8a6655]">
                          {video.description}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm font-semibold text-orange-600">
                            Watch on YouTube
                          </span>

                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b1d0d] text-white transition group-hover:bg-orange-500">
                            <ChevronRight className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            aria-label="Previous video"
            className="podcast-prev absolute -left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-orange-200 bg-white text-[#5b1d0d] shadow-xl transition hover:bg-orange-500 hover:text-white md:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            aria-label="Next video"
            className="podcast-next absolute -right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-orange-200 bg-white text-[#5b1d0d] shadow-xl transition hover:bg-orange-500 hover:text-white md:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://youtube.com/@talkwithastroshivani?si=CrOGtq5SCj9Lvu1h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5b1d0d] to-[#8b2c12] px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-900/20 transition hover:-translate-y-1 hover:shadow-red-900/30"
          >
            <Youtube className="h-5 w-5" />
            View All Videos
          </a>
        </div>
      </div>
    </section>
  );
}