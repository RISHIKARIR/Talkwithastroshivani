import { Phone, Mail } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold tracking-wide">
          <img src="/public/Logo.jpeg" className="h-15 rounded-4xl" alt="logo"></img>
            {/* <div className="text-sm font-normal text-red-100">Astrologer & Spiritual Guide</div>
             */}
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-yellow-300 transition">Home</a>
            <a href="#services" className="hover:text-yellow-300 transition">Services</a>
            <a href="#about" className="hover:text-yellow-300 transition">About</a>
            <a href="#testimonials" className="hover:text-yellow-300 transition">Testimonials</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 98765 43210</span>
            </div>
            <button className="bg-yellow-500 text-red-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition font-semibold">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
