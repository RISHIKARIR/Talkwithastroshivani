import { useState } from "react";
import {
  CheckCircle,
  Sparkles,
  Star,
  Users,
  Youtube,
  Instagram,
  ArrowRight,
  Quote,
  MoonStar,
} from "lucide-react";
import BookingForm from "./BookingForm";

const expertise = [
  "Vedic Astrology & Horoscope Reading",
  "Numerology & Palmistry",
  "Vastu Shastra Consultation",
  "Gemstone Therapy",
  "Match Making & Compatibility",
  "Career & Business Guidance",
];

const stats = [
  {
    icon: Star,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Instagram,
    value: "79K+",
    label: "Instagram Followers",
  },
  {
    icon: Youtube,
    value: "62K+",
    label: "YouTube Subscribers",
  },
];

export default function AboutSection() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-[#fff8ed] py-20 lg:py-28"
      >
        {/* Handmade background pattern */}
        <div className="absolute inset-0 opacity-[0.45]">
          <div className="absolute left-[-120px] top-20 h-[340px] w-[340px] rounded-full border border-orange-300" />
          <div className="absolute left-[-70px] top-32 h-[230px] w-[230px] rounded-full border border-red-900/20" />
          <div className="absolute bottom-10 right-[-110px] h-[360px] w-[360px] rounded-full border border-yellow-500/40" />
        </div>

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-900/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Image / Brand Story Side */}
            <div className="relative">
              <div className="absolute -left-5 -top-5 hidden rounded-full bg-[#5b1d0d] px-6 py-3 text-sm font-semibold text-yellow-200 shadow-xl md:block">
                Since 2015
              </div>

              <div className="relative rounded-[40px] bg-[#5b1d0d] p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[32px] bg-white">
                  <img
                    src="about-image.png"
                    alt="Shivani Sharma - Professional Astrologer"
                    className=" w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Quote card */}
                <div className="absolute -bottom-8 left-5 right-5 rounded-[28px] border border-yellow-400/30 bg-white p-5 shadow-2xl md:left-8 md:right-8">
                  <Quote className="mb-3 h-8 w-8 text-orange-400" />

                  <p className="text-[15px] leading-7 text-[#6d4636]">
                    “Astrology is not about fear. It is about timing, awareness
                    and making better choices with clarity.”
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5b1d0d] text-yellow-300">
                      <MoonStar className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#5b1d0d]">
                        Shivani Sharma
                      </h4>
                      <p className="text-sm text-gray-500">
                        Astrologer & Spiritual Guide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating trust card */}
              {/* <div className="absolute -right-4 top-12 hidden rounded-[26px] border border-orange-200 bg-white px-5 py-4 shadow-xl lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Users className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Trusted Community</p>
                    <h4 className="text-lg font-bold text-[#5b1d0d]">
                      140K+
                    </h4>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Content Side */}
            <div className="pt-10 lg:pt-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-[#8b2c12] shadow-sm">
                <Sparkles className="h-4 w-4 text-orange-500" />
                About The Astrologer
              </div>

              <h2 className="font-serif text-4xl font-normal leading-tight text-[#5b1d0d] sm:text-5xl lg:text-6xl">
                Guidance That Feels Personal, Not Scripted
              </h2>

              <p className="mt-6 text-lg leading-9 text-[#6d4636]">
                Shivani Sharma brings a refined, modern and deeply intuitive
                approach to Indian astrology. Her work blends Vedic principles,
                planetary timing, emotional understanding and practical decision
                guidance.
              </p>

              <p className="mt-4 text-base leading-8 text-[#7c5a4a]">
                With over 9 years of professional experience and a growing
                digital community across Instagram and YouTube, her sessions are
                designed for people who want clarity without confusion, remedies
                without fear, and direction without pressure.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-[26px] border border-orange-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5b1d0d] text-yellow-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-2xl font-bold text-[#5b1d0d]">
                        {stat.value}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Expertise */}
              <div className="mt-10">
                <h3 className="mb-5 text-2xl font-bold text-[#5b1d0d]">
                  Areas of Expertise
                </h3>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {expertise.map((item) => (
                    <div
                      key={item}
                      className="group flex items-center gap-3 rounded-2xl border border-orange-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg"
                    >
                      <CheckCircle className="h-5 w-5 shrink-0 text-orange-500" />

                      <span className="text-sm font-semibold text-[#6d4636] group-hover:text-[#5b1d0d]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5b1d0d] to-[#8b2c12] px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-900/20 transition hover:-translate-y-1 hover:shadow-red-900/30"
                >
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5" />
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-orange-300 bg-white px-8 py-4 text-base font-bold text-[#5b1d0d] transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingForm
        isOpen={formOpen}
        selectedService="Astrology Consultation"
        onClose={() => setFormOpen(false)}
      />
    </>
  );
}