import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  "Home", "About Us", "Services", "Testimonials", "Blog", "Contact Us"
];

const services = [
  "Birth Chart Reading",
  "Love & Marriage",
  "Career Guidance",
  "Gemstone Consultation",
  "Vastu Shastra",
  "Remedial Solutions"
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-red-900 to-red-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl mb-4">Shivani Sharma</h3>
            <p className="text-red-100 mb-6">
              Trusted Vedic astrologer providing accurate predictions and effective remedies for over 20 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-red-100 hover:text-yellow-300 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-red-100 hover:text-yellow-300 transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-red-100">+91 98765 43210</p>
                  <p className="text-red-100">+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-red-100">info@shivanisharma.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-red-100">
                  123 Astrology Center<br />
                  New Delhi, India 110001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-800 mt-12 pt-8 text-center">
          <p className="text-red-100">
            © 2026 Shivani Sharma - Astrologer. All Rights Reserved.
          </p>
          <p className="text-red-200 text-sm mt-2">
            Designed with ❤️ for spiritual guidance
          </p>
        </div>
      </div>
    </footer>
  );
}
