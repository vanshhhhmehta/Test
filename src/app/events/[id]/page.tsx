'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaMapMarker } from 'react-icons/fa';
import { format } from 'date-fns';

interface Event {
  _id: string;
  title: string;
  description: string;
  time: string;
  date: Date;
  location: string;
  category: string;
  attendees: number;
  imageUrl: string;
  joinCode: string;
}

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`http://localhost:5000/events/${id}`);
        if (!res.ok) throw new Error('Event not found');
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (!event) return <div className="text-center mt-10 text-xl text-red-600">Event not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Event Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-6 shadow-lg">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category */}
      <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm uppercase tracking-wider inline-block mb-4">
        {event.category}
      </span>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>

      {/* Date & Time */}
      <div className="text-lg text-gray-700 mb-2">
        <strong>Date:</strong> {format(new Date(event.date), 'dd/MM/yyyy')}
      </div>
      <div className="text-lg text-gray-700 mb-4">
        <strong>Time:</strong> {event.time}
      </div>

      {/* Location */}
      <div className="flex items-center text-orange-700 text-lg mb-6">
        <FaMapMarker className="mr-2" />
        {event.location}
      </div>

      {/* Max Attendees */}
      <div className="text-md text-gray-800 mb-2">
        <strong>Maximum Attendees:</strong>{' '}
        <span className="font-semibold">{event.attendees}</span>
      </div>

      {/* Join Code */}
      <div className="bg-green-50 border border-green-200 rounded-md px-4 py-3 mb-6 flex items-center gap-2 text-sm text-green-800 shadow-sm">
        <span className="font-semibold">Join Code:</span>
        <span className="font-mono font-bold uppercase tracking-wider bg-white px-3 py-1 rounded text-green-900 border border-green-300">
          {event.joinCode}
        </span>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-xl shadow-md text-gray-800 leading-7 text-justify">
        {event.description}
      </div>
    </div>
  );
};

export default EventDetailsPage;
