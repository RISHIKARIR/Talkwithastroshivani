import { Podcast, Play, Headphones } from "lucide-react";

const podcasts = [
  {
    title: "Spiritual Awakening",
    description: "Journey to inner peace and consciousness",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    title: "Astrology Insights",
    description: "Understanding cosmic influences on life",
    duration: "38 min",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    title: "Healing Sessions",
    description: "Meditation and energy healing techniques",
    duration: "52 min",
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    title: "Vedic Wisdom",
    description: "Ancient knowledge for modern living",
    duration: "41 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  }
];

export default function PodcastSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Podcast className="w-10 h-10 text-red-800" />
            <h2 className="text-4xl text-red-900">Podcasts</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Listen to spiritual wisdom and guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={podcast.image} 
                  alt={podcast.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-red-800 mb-3">
                  <Headphones className="w-4 h-4" />
                  <span className="text-sm">{podcast.duration}</span>
                </div>
                <h3 className="text-xl mb-2 text-red-900">{podcast.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{podcast.description}</p>
                <button className="w-full bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 transition flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Listen Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-yellow-500 text-red-900 px-8 py-3 rounded-full text-lg hover:bg-yellow-400 transition">
            View All Podcasts
          </button>
        </div>
      </div>
    </section>
  );
}
