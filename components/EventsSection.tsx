import Link from "next/link";

const events = [
  {
    id: "1",
    title: "Live Concert: Arijit Singh",
    date: "25 May 2025",
    location: "Mumbai, India",
    image: "/assets/Arjit.jpeg",
  },
  {
    id: "2",
    title: "Stand-Up: Zakir Khan",
    date: "30 May 2025",
    location: "Delhi, India",
    image: "/assets/Zakir.jpeg",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    date: "10 June 2025",
    location: "Bangalore, India",
    image: "/assets/Ravi.jpeg",
  },
  {
    id: "4",
    title: "Art & Wine Workshop",
    date: "18 June 2025",
    location: "Pune, India",
    image: "/assets/wine.jpeg",
  },
];



export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Events Section */}
      <section className="bg-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Upcoming Events</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-80 p-4 rounded-2xl object-cover object-top"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
