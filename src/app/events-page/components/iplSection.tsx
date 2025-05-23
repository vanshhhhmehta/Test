'use client';

import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface IPLMatch {
  id: string;
  team1: string;
  team2: string;
  date: Date;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Completed';
  matchNumber?: string;
}

const sampleMatches: IPLMatch[] = [
  {
    id: '1',
    team1: 'Mumbai Indians',
    team2: 'Chennai Super Kings',
    date: new Date('2025-05-30T19:30:00'),
    venue: 'Wankhede Stadium, Mumbai',
    status: 'Upcoming',
    matchNumber: 'Match 10',
  },
  {
    id: '2',
    team1: 'Delhi Capitals',
    team2: 'Royal Challengers Bangalore',
    date: new Date('2025-05-31T19:30:00'),
    venue: 'Feroz Shah Kotla, Delhi',
    status: 'Live',
    matchNumber: 'Match 11',
  },
  {
    id: '3',
    team1: 'Kolkata Knight Riders',
    team2: 'Sunrisers Hyderabad',
    date: new Date('2025-06-01T19:30:00'),
    venue: 'Eden Gardens, Kolkata',
    status: 'Completed',
    matchNumber: 'Match 12',
  },
];

const StatusBadge = ({ status }: { status: IPLMatch['status'] }) => {
  const statusColor = {
    Upcoming: 'bg-blue-500',
    Live: 'bg-red-500',
    Completed: 'bg-green-600',
  }[status];

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColor}`}>
      {status}
    </span>
  );
};

const IPLMatchCard = ({ match, index }: { match: IPLMatch; index: number }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col p-6 border border-gray-100"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm text-gray-500 font-medium">{match.matchNumber}</span>
      <StatusBadge status={match.status} />
    </div>

    <div className="flex flex-col items-center mb-4">
      <div className="text-center text-xl font-bold text-gray-800">
        {match.team1} <span className="text-gray-400 text-base">vs</span> {match.team2}
      </div>
    </div>

    <div className="text-sm text-gray-600 mb-2">
      📅 <strong>{format(match.date, 'dd MMM yyyy')}</strong> at <strong>{format(match.date, 'HH:mm')}</strong>
    </div>
    <div className="text-sm text-gray-600 mb-4">📍 {match.venue}</div>

    <div className="mt-auto flex justify-center">
      <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm">
        View Match
      </button>
    </div>
  </motion.div>
);

const IPLMatchesThreeCards = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">IPL Match Center</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleMatches.map((match, idx) => (
          <IPLMatchCard key={match.id} match={match} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default IPLMatchesThreeCards;
