import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Sparkles,
  ArrowRight,
  Heart,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const servicesList = [
  "Astrology Consultation",
  "Numerology Consultation",
  "Vastu Consultation",
  "Palmistry",
  "Akashic Record Reading",
  "Love & Marriage Guidance",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/talkwithastroshivani?igsh=MXFqaTNvZmRiYXJ3eQ==",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@talkwithastroshivani?si=CrOGtq5SCj9Lvu1h",
    icon: Youtube,
  },
];

export default function Footer({ onBookingClick = () => {} }) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#180303] via-[#2b0707] to-[#4a0b0b] text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-700/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        {/* Top CTA */}
        <div className="mb-16 overflow-hidden rounded-[32px] border border-yellow-400/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md lg:p-12">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-red-950">
            <Sparkles className="h-8 w-8" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Discover Your Cosmic Path?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">
            Book a personalized consultation with Shivani and receive clear,
            practical guidance for love, career, marriage, vastu and life
            decisions.
          </p>

          <button
            onClick={() => onBookingClick("General Consultation")}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 font-bold text-red-950 shadow-xl shadow-yellow-500/20 transition hover:-translate-y-1 hover:shadow-yellow-500/40"
          >
            Book Your Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/Logo.jpeg"
                alt="Shivani Sharma Logo"
                className="h-14 w-14 rounded-2xl border border-yellow-400/30 object-cover shadow-lg"
                loading="lazy"
              />

              <div>
                <h3 className="text-xl font-bold">Shivani Sharma</h3>
                <p className="text-sm text-yellow-200">
                  Astrologer & Spiritual Guide
                </p>
              </div>
            </a>

            <p className="mt-5 text-sm leading-7 text-white/70">
              A modern Indian astrology portfolio offering personalized
              consultation for clarity, direction and spiritual growth through
              Vedic astrology, numerology, vastu and intuitive guidance.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-red-950"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-yellow-200">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-yellow-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 opacity-0 transition group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-yellow-200">
              Our Services
            </h3>

            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onBookingClick(service)}
                    className="group inline-flex items-center gap-2 text-left text-sm text-white/70 transition hover:text-yellow-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 opacity-0 transition group-hover:opacity-100" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-yellow-200">
              Contact Details
            </h3>

            <div className="space-y-4">
              <a
                href="tel:+919911552153"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/40 hover:bg-white/10"
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Call Us</p>
                  <p className="mt-1 text-sm text-white/70">
                    +91 9911552153
                  </p>
                </div>
              </a>

              <a
                href="mailto:talkwithastroshivanisharma.com"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/40 hover:bg-white/10"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <p className="mt-1 text-sm text-white/70">
                    talkwithastroshivanisharma.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    3828 Gali No 8,Kanhiya Nagar,Main road,New Delhi-110035
                    <br />
                    Online Consultation Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/60">
              © 2026 Shivani Sharma - Vedic Astrologer. All Rights Reserved.
            </p>

            <p className="flex items-center gap-2 text-sm text-white/60">
              Designed with
              <Heart className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              for spiritual clarity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}