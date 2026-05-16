import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote, Sparkles, MapPin } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aarav Mehta",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Shivani ji gave me very clear guidance about my career direction. Her reading felt practical, accurate and deeply personal.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
  },
  {
    name: "Ananya Sharma",
    location: "Delhi NCR",
    rating: 5,
    text: "The marriage compatibility session was very detailed. I loved how calmly she explained everything with logic and remedies.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
  },
  {
    name: "Rohan Kapoor",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Her numerology consultation helped me understand my strengths and timing. The suggestions were simple but very effective.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
  },
  {
    name: "Meera Iyer",
    location: "Bengaluru, Karnataka",
    rating: 5,
    text: "Very professional and respectful consultation. Shivani ji explained my kundli in a way that gave me confidence and clarity.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300",
  },
  {
    name: "Kavya Malhotra",
    location: "Chandigarh",
    rating: 5,
    text: "I booked a Vastu consultation and the advice was very practical. The energy of my workspace feels much better now.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300",
  },
  {
    name: "Nikhil Verma",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "The consultation was honest, detailed and positive. I felt guided without any fear-based advice. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-[#fff8ed] via-white to-[#fff1d6] py-20 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-red-900/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-900/10 bg-red-900/5 px-4 py-2 text-sm font-semibold text-red-900">
            <Sparkles className="h-4 w-4 text-yellow-600" />
            Client Experiences
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-red-950 sm:text-5xl">
            What Clients Say About Shivani
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Real guidance, thoughtful remedies and personal consultations that
            help clients find clarity in love, career, marriage, vastu and life
            decisions.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-red-900/10 bg-white p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-red-950">4.9/5</h3>
            <p className="mt-1 text-sm text-gray-500">Average Rating</p>
          </div>

          <div className="rounded-3xl border border-red-900/10 bg-white p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-red-950">9+</h3>
            <p className="mt-1 text-sm text-gray-500">Years Experience</p>
          </div>

          <div className="rounded-3xl border border-red-900/10 bg-white p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-red-950">1000+</h3>
            <p className="mt-1 text-sm text-gray-500">Consultations</p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={26}
          slidesPerView={1}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1180: { slidesPerView: 3 },
          }}
          className="
            !pb-14

            [&_.swiper-pagination]:!bottom-0
            [&_.swiper-pagination-bullet]:!h-2.5
            [&_.swiper-pagination-bullet]:!w-2.5
            [&_.swiper-pagination-bullet]:!bg-red-900
            [&_.swiper-pagination-bullet]:!opacity-30
            [&_.swiper-pagination-bullet]:!transition-all
            [&_.swiper-pagination-bullet-active]:!w-8
            [&_.swiper-pagination-bullet-active]:!rounded-full
            [&_.swiper-pagination-bullet-active]:!bg-yellow-500
            [&_.swiper-pagination-bullet-active]:!opacity-100
          "
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-red-900/10 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute right-6 top-6 text-red-900/5 transition group-hover:text-yellow-500/20">
                  <Quote className="h-16 w-16" />
                </div>

                {/* Profile */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={`${t.name} from ${t.location}`}
                      className="h-16 w-16 rounded-2xl border-2 border-yellow-400/50 object-cover shadow-md"
                      loading="lazy"
                    />

                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-900">
                      <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-red-950">{t.name}</h3>

                    <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-3.5 w-3.5 text-yellow-600" />
                      {t.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="relative z-10 mt-6 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="relative z-10 mt-5 flex-1 text-[15px] leading-8 text-gray-700">
                  “{t.text}”
                </p>

                {/* Bottom Strip */}
                <div className="relative z-10 mt-6 rounded-2xl bg-gradient-to-r from-red-900 to-red-700 px-4 py-3">
                  <p className="text-sm font-medium text-yellow-100">
                    Verified Consultation Experience
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}