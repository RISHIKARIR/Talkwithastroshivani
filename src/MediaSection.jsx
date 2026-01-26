const mediaChannels = [
  {
    name: "India News",
    image: "https://images.unsplash.com/photo-1586339949216-35c2747cc63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    name: "Sadhana TV",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    name: "Iswar TV",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  }
];

export default function MediaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 text-red-900">As Seen On</h2>
          <p className="text-gray-600">Trusted by leading media outlets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mediaChannels.map((channel, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 rounded-lg p-6 hover:bg-red-50 transition border border-gray-200 shadow-md"
            >
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-white">
                <img 
                  src={channel.image} 
                  alt={channel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-red-900 mb-4">{channel.name}</h3>
              <button className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-700 transition w-full">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
