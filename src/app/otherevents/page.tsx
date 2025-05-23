'use client'


import { useEffect, useState } from 'react';
import EventCard from '../../../components/EventCard2';

interface Event {
  _id: string;
  title: string;
  description: string;
  time: string;
  date: string; // keep as string for fetch, convert during use
  location: string;
  category: string;
  attendees: number;
  artist:string
  imageUrl: string;
  joinCode: string;
}

export default function AllEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('http://localhost:5000/events');
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p className="p-4">Loading events...</p>;

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">All Events</h1>
      {events.length === 0 ? (
        <p className="text-2xl text-center">No events found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={{
                ...event,
                date: new Date(event.date),
              }}
            />
          ))}
        </div>
      )}
    </main>
  );
}
