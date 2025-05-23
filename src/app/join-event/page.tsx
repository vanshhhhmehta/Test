'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
// import { id } from 'date-fns/locale';

const JoinEventPage = () => {
  const [joinCode, setJoinCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

   const token = localStorage.getItem("token"); // ✅ Move here
  if (!token) {
    alert("You must be logged in to create an event.");
    return;
  }


  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!joinCode.trim()) {
      setError('Please enter a valid Join Code.');
      return;
    }

    setLoading(true);

    try {
      const code = joinCode.trim().toUpperCase();
    //   console.log("====",code)
     const res = await fetch(`http://localhost:5000/join/${code}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

      

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to join event');
      }

      const event = await res.json();
      setSuccess('Successfully joined the event!');
      setJoinCode('');
      router.push(`/events/${event._id}`);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-gray-300 p-28'>
    <div className="max-w-md mx-auto  p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Join Event</h1>

      <form onSubmit={handleJoin} className="flex flex-col gap-4">
        <label htmlFor="joinCode" className="font-semibold text-gray-700">
          Enter Join Code
        </label>
        <input
          id="joinCode"
          type="text"
          value={joinCode}
          onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
          placeholder="e.g. ABC123"
          maxLength={10}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-700 text-sm">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md disabled:opacity-60 transition"
        >
          {loading ? 'Joining...' : 'Join Event'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default JoinEventPage;
