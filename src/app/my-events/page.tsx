'use client';

import React, { useEffect, useState } from 'react';
import EventCard from '../../../components/EventCard';
import Link from 'next/link';

interface Event {
  _id: string;
  artist: string;
  title: string;
  description: string;
  time: string;
  date: string;
  location: string;
  category: string;
  attendees: number;
  joinCode: string;
  imageUrl: string;
}

const MyEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Your are not logged in!');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/myevents', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch events');
        const data: Event[] = await res.json();
        setEvents(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 px-4">
    <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-3">Access Denied</h1>
      <p className="text-gray-700 text-base mb-4">
        {error || "You are not authorized to access this page."}
      </p>
      <p className="text-gray-500 text-sm mb-8">
        Please log in with your account credentials to continue.
      </p>
      <Link
        href="/login"
        className="inline-block px-6 py-3 rounded-md bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition"
      >
        Login to Your Account
      </Link>
    </div>
  </div>
);



  return (
    <main className="p-4 bg-gray-400">
      <h1 className="text-3xl font-bold text-center mb-8">My Events</h1>
      {events.length === 0 ? (

        <p className='text-4xl text-center'>No events found.</p>
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
};

export default MyEventsPage;
