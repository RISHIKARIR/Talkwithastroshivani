import { CheckCircle } from "lucide-react";

const expertise = [
  "Vedic Astrology & Horoscope Reading",
  "Numerology & Palmistry",
  "Vastu Shastra Consultation",
  "Gemstone Therapy",
  "Match Making & Compatibility",
  "Career & Business Guidance",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* <img
              src="https://images.unsplash.com/photo-1719500495894-980ced7a4c1d?q=80&w=1080"
              alt="Shivani Sharma"
              className="w-full rounded-lg shadow-2xl"
            /> */}
          </div>

          <div>
            <h2 className="text-4xl font-medium mb-6 text-red-900">
              About Shivani Sharma
            </h2>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              With over 20 years of experience in Vedic astrology, Shivani Sharma
              has guided thousands of individuals towards a better understanding
              of their life's purpose.
            </p>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              A renowned astrologer, author, and spiritual guide, she has been
              featured on numerous television channels and publications.
            </p>

            <h3 className="text-2xl mb-4 text-red-900">
              Areas of Expertise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-red-800 text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
