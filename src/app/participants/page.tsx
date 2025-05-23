// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function ParticipantsPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [participants, setParticipants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) return;
    
//     const fetchParticipants = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await fetch(`http://localhost:5000/event/${id}/participants`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         const data = await res.json();
//         setParticipants(data.participants || []);
//       } catch (error) {
//         console.error('Failed to load participants:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchParticipants();
//   }, [id]);

//   if (loading) return <p>Loading participants...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Participants Joined</h1>
//       {participants.length === 0 ? (
//         <p>No participants have joined this event yet.</p>
//       ) : (
//         <ul className="space-y-2">
//           {participants.map((p) => (
//             <li key={p._id} className="border p-3 rounded shadow bg-white">
//               <p><strong>Username:</strong> {p.username}</p>
//               <p><strong>ID:</strong> {p._id}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
