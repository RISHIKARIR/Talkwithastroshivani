import { Star, Calculator, Home, Hand, Sparkles } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Astrology Consultation",
    description: "Complete horoscope reading and life predictions",
    price: "₹5100",
    image: "/Astrology-Consultation.webp"
  },
  {
    icon: Calculator,
    title: "Numerology Consultation",
    description: "Discover your life path through numbers",
    price: "₹5100",
    image: "/numerology.avif"
  },
  {
    icon: Home,
    title: "Vastu",
    description: "Harmonize your space with ancient wisdom",
    price: "51,000",
    image: "/vastu.webp"
  },
  {
    icon: Hand,
    title: "Palmistry",
    description: "Read your destiny through palm lines",
    price: "₹3100",
    image: "/palmistry.jpg"
  },
  {
    icon: Sparkles,
    title: "Akashic Record Reading",
    description: "Access your soul's eternal wisdom",
    price: "₹61000",
    image: "/akshic.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4 text-red-900">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive spiritual services tailored to guide you through life's journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-red-100 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-red-800" />
                  </div>
                  <h3 className="text-xl mb-2 text-red-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-red-800">{service.price}</span>
                    <button className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-yellow-500 text-red-900 px-8 py-3 rounded-full text-lg hover:bg-yellow-400 transition">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
