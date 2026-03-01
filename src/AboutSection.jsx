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
             Shivani — The Art of Elite Astrological Mastery
Shivani represents a refined and modern approach to Indian astrology — where ancient wisdom meets strategic life guidance. With over 9 years of professional expertise, she offers more than consultations; she delivers clarity engineered through cosmic intelligence.
Trusted by a growing community of 79K+ followers on Instagram and 62.1K+ subscribers on YouTube, Shivani has positioned herself as a respected voice in digital astrology — known for accuracy, depth, and ethical responsibility.
Her sessions are highly personalized and insight-driven, carefully analyzing planetary dynamics, behavioral patterns, and timing cycles to provide decisive, results-oriented guidance. Each consultation is designed for individuals who value precision, discretion, and transformative direction.
For those who seek not just predictions — but power, positioning, and progress — Shivani offers a premium astrological experience rooted in awareness and elevated decision-making.
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
