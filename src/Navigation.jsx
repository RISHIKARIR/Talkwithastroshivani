import { Phone, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navigation({ onBookingClick = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-yellow-400/20 bg-[#2b0707]/90 text-white shadow-xl backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/Logo.jpeg"
                className="h-13 w-13 rounded-2xl border border-yellow-400/30 object-cover shadow-lg sm:h-14 sm:w-14"
                alt="Shivani Sharma Logo"
                loading="lazy"
              />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400">
                <Sparkles className="h-3 w-3 text-red-950" />
              </span>
            </div>

            <div className="leading-tight">
              <h2 className="text-base font-bold tracking-wide text-white sm:text-lg">
                Shivani Sharma
              </h2>
              <p className="hidden text-xs font-medium text-yellow-200 sm:block">
                Astrologer & Spiritual Guide
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition duration-300 hover:bg-white/10 hover:text-yellow-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:border-yellow-400/50 hover:text-yellow-300 lg:flex"
            >
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>

            <button
              onClick={onBookingClick}
              className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-2.5 text-sm font-bold text-[#2b0707] shadow-lg shadow-yellow-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-yellow-500/40 sm:px-6"
            >
              Book Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileMenuOpen ? "max-h-96 pb-5" : "max-h-0"
          }`}
        >
          <div className="rounded-3xl border border-yellow-400/20 bg-[#3b0909] p-3 shadow-2xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-yellow-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="tel:+919319622331"
                className="mt-2 flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-yellow-200"
              >
                <Phone className="h-4 w-4" />
                +91 9319622331
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}