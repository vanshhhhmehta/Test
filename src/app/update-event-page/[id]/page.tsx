'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const UpdateEventPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [eventData, setEventData] = useState({
    title: '',
    artist: '',
    description: '',
    time: '',
    date: '',
    location: '',
    category: '',
    imageUrl: '',
    attendees: 0,
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`http://localhost:5000/events/${id}`);
        if (!res.ok) throw new Error('Failed to fetch event');
        const data = await res.json();
        setEventData({
          title: data.title,
          artist: data.artist,
          description: data.description,
          time: data.time,
          date: data.date?.slice(0, 10),
          location: data.location,
          category: data.category,
          imageUrl: data.imageUrl,
          attendees: data.attendees || 0,
        });
      } catch (err) {
        toast.error('Failed to load event');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setUpdating(true);
      const res = await fetch(`http://localhost:5000/events/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });

      if (!res.ok) throw new Error('Failed to update event');
      toast.success('Event updated successfully');
      router.push('/my-events');
    } catch (err) {
      toast.error('Update failed');
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="p-6 text-center text-gray-600">Loading...</div>;

  return (
    <>
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-md mt-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Edit Event</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              placeholder="Event Title"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Artist */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Artist</label>
            <input
              type="text"
              name="artist"
              value={eventData.artist}
              onChange={handleChange}
              placeholder="Artist Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Describe the event..."
              rows={5}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              type="text"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              placeholder="HH:MM (e.g., 18:00)"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              placeholder="Venue or Address"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={eventData.category}
              onChange={handleChange}
              placeholder="Music, Tech, Sports..."
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Attendees */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Attendees</label>
            <input
              type="number"
              name="attendees"
              value={eventData.attendees}
              onChange={(e) => setEventData({ ...eventData, attendees: Number(e.target.value) })}
              min={0}
              placeholder="e.g. 200"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={eventData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={updating}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 disabled:opacity-60"
            >
              {updating ? 'Updating...' : 'Update Event'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateEventPage;
