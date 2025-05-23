'use client'

import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import Link from 'next/link';
import { format } from 'date-fns';

interface Event {
  _id: string;
  artist: string;
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

const EventCard = ({ event }: { event: Event }) => {
  const [showFullDescription] = useState(false);

  let description = event.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Event Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs uppercase px-3 py-1 rounded-full shadow-md">
          {event.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">{event.title}</h3>
        <p className="mb-3 text-gray-500">
          Artist Name : <b className="text-[20px] text-black uppercase">{event.artist}</b>
        </p>
        <div className="text-black font-medium mb-2">
          {format(event.date, 'dd/MM/yyyy')} | {event.time}
        </div>
        <div className="flex items-center text-orange-700 mb-4">
          <FaMapMarker className="mr-2" /> {event.location}
        </div>

        <div className="flex items-center text-gray-600 mb-4 text-sm">
          🎟️ Max Attendees: <span className="ml-1 font-semibold">{event.attendees}</span>
        </div>

        <p className="text-gray-700 mb-3 flex-grow">{description}</p>
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <span className="font-semibold">Join Code:</span>
          <span className="font-mono font-bold uppercase tracking-wide bg-white px-2 py-1 rounded text-black shadow-sm">
            {event.joinCode}
          </span>
        </div>

        {/* View Details Button Only */}
        <div className="mt-auto">
          <Link
            href={`/events/${event._id}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
