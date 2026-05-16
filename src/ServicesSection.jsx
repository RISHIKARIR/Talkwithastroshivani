import {
  Star,
  Calculator,
  Home,
  Hand,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Sun,
  Gem,
} from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";

const services = [
  {
    icon: Star,
    title: "Astrology Consultation",
    subtitle: "Kundli • Grah Dasha • Remedies",
    description:
      "A complete Vedic horoscope reading for love, marriage, career, finance, family matters and important life decisions.",
    image: "/Astrology-Consultation.webp",
    points: ["Birth Chart Analysis", "Planetary Guidance", "Simple Remedies"],
    cta: "Book Kundli Reading",
  },
  {
    icon: Calculator,
    title: "Numerology Consultation",
    subtitle: "Name • Date of Birth • Lucky Numbers",
    description:
      "Understand your life path, destiny number, personal year cycle, name vibration and favorable timing through numerology.",
    image: "/numerology.avif",
    points: ["Name Correction", "Lucky Number Guidance", "Career Direction"],
    cta: "Check My Numbers",
  },
  {
    icon: Home,
    title: "Vastu Consultation",
    subtitle: "Home • Office • Business Space",
    description:
      "Bring balance, positivity and better energy flow into your home, workplace or commercial space through Vastu principles.",
    image: "/vastu.webp",
    points: ["Home Vastu", "Office Vastu", "Energy Correction"],
    cta: "Request Vastu Guidance",
  },
  {
    icon: Hand,
    title: "Palmistry Reading",
    subtitle: "Palm Lines • Personality • Future Path",
    description:
      "Decode your palm lines to understand your strengths, emotional nature, opportunities, challenges and life direction.",
    image: "/palmistry.jpg",
    points: ["Life Line Reading", "Career Signs", "Relationship Insights"],
    cta: "Read My Palm",
  },
  {
    icon: Sparkles,
    title: "Akashic Record Reading",
    subtitle: "Soul Path • Karma • Inner Clarity",
    description:
      "A deeper spiritual reading to understand soul lessons, karmic patterns, emotional blocks and personal transformation.",
    image: "/akshic.jpg",
    points: ["Soul Guidance", "Karmic Insight", "Spiritual Clarity"],
    cta: "Explore Soul Reading",
  },
];

export default function ServicesSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookingClick = (serviceName = "") => {
    setSelectedService(serviceName);
    setFormOpen(true);
  };

  return (
    <>
      <section
        id="services"
        className="relative overflow-hidden bg-[#fff8ed] py-20 lg:py-28"
      >
        {/* Indian-style soft mandala background */}
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full border border-orange-300/50" />
        <div className="absolute left-[-90px] top-32 h-[260px] w-[260px] rounded-full border border-red-900/15" />
        <div className="absolute right-[-130px] bottom-16 h-[400px] w-[400px] rounded-full border border-yellow-500/40" />

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-900/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-[#8b2c12] shadow-sm">
              <Sun className="h-4 w-4 text-orange-500" />
              Divine Guidance Services
            </div>

            <h2 className="font-serif text-4xl font-normal leading-tight text-[#5b1d0d] sm:text-5xl lg:text-6xl">
              Choose Your Path to{" "}
              <span className="text-orange-500">Clarity</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#7c5a4a] sm:text-lg">
              Personalized Indian astrology services crafted for your life
              questions, emotional clarity, spiritual growth and practical
              decision-making.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`group relative overflow-hidden rounded-[34px] border border-orange-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl ${
                    index === 4 ? "lg:col-start-2" : ""
                  }`}
                >
                  {/* Top Image */}
                  <div className="relative h-64 overflow-hidden bg-orange-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#3b0b05]/90 via-black/25 to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#5b1d0d] shadow-md backdrop-blur-md">
                      {service.subtitle}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/40 bg-white/15 text-yellow-300 shadow-xl backdrop-blur-md">
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Decorative number */}
                    <div className="absolute bottom-5 right-5 font-serif text-5xl text-white/20">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-[#5b1d0d]">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[92px] text-sm leading-7 text-[#7c5a4a]">
                      {service.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-sm font-semibold text-[#6d4636]"
                        >
                          <CheckCircle className="h-4 w-4 shrink-0 text-orange-500" />
                          {point}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleBookingClick(service.title)}
                      className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5b1d0d] to-[#8b2c12] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:-translate-y-1 hover:shadow-red-900/35"
                    >
                      {service.cta}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 overflow-hidden rounded-[34px] border border-orange-200 bg-gradient-to-r from-[#5b1d0d] via-[#7a2510] to-[#9a3a12] p-8 text-center text-white shadow-2xl lg:p-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-[#5b1d0d]">
              <Gem className="h-7 w-7" />
            </div>

            <h3 className="font-serif text-3xl font-bold">
              Not Sure Which Service You Need?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Share your concern and Shivani’s team will guide you toward the
              most suitable consultation.
            </p>

            <button
              onClick={() => handleBookingClick("General Guidance")}
              className="mt-7 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-9 py-4 text-base font-bold text-[#4b1608] shadow-xl shadow-yellow-500/20 transition hover:-translate-y-1 hover:shadow-yellow-500/40"
            >
              Ask for Personal Guidance
            </button>
          </div>
        </div>
      </section>

      <BookingForm
        isOpen={formOpen}
        selectedService={selectedService}
        onClose={() => setFormOpen(false)}
      />
    </>
  );
}