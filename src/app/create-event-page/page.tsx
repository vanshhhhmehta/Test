'use client'


import { useState } from "react";
import { useRouter } from 'next/navigation'; 



const CreateEventPage = ()=>  {
  const [form, setForm] = useState({
    title: "",
    artist:"",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    attendees: 1,
    imageUrl: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
 const router = useRouter();
  const [joinCode, setJoinCode] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.title.trim()) newErrors.title = "Event title is required";
    if (!form.artist) newErrors.artist = "Event Artist is required";
    if (!form.date) newErrors.date = "Date is required";
    if (!form.time) newErrors.time = "Time is required";
    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.category) newErrors.category = "Please select a category";
    if (form.attendees < 1 || form.attendees > 50) newErrors.attendees = "Attendees must be between 1 and 50";
    return newErrors;
  }

   const token = localStorage.getItem("token"); // ✅ Move here
  if (!token) {
    alert("You must be logged in to create an event.");
    return;
  }

  
 const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
    const response = await fetch("http://localhost:5000/createnewevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(form),

    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Something went wrong");
    } else {
      setJoinCode(result.joinCode);
      alert("Event Created Successfully!");
      setForm({
        title: "",
        artist:"",
        description: "",
        date: "",
        time: "",
        location: "",
        category: "",
        attendees: 1,
        imageUrl: "",
      });
      
      setTimeout(() => {
          router.push("/my-events");
        }, 4000); // Delay navigation to show joinCode
      }
  } catch (error) {
    alert("Failed to connect to server.");
    console.error("Error submitting event:", error);
  }
  console.log('======',form)
}


//     // TODO: Submit form data to API or backend
//     alert("Event Created Successfully!");
//   }

  return (
    <main className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-md shadow-md my-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Create New Event</h1>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">
            Event Title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-300"
            }`}
            placeholder="Enter event title"
          />
          {errors.title && <p className="text-red-500 mt-1 text-sm">{errors.title}</p>}
        </div>

         {/* Title */}
        <div>
          <label htmlFor="artist" className="block font-semibold mb-1">
            Artist Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="artist"
            id="artist"
            value={form.artist}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.artist ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-300"
            }`}
            placeholder="Enter artist name"
          />
          {errors.artist && <p className="text-red-500 mt-1 text-sm">{errors.artist}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Describe your event"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block font-semibold mb-1">
              Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.date ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-300"
              }`}
            />
            {errors.date && <p className="text-red-500 mt-1 text-sm">{errors.date}</p>}
          </div>

          <div>
            <label htmlFor="time" className="block font-semibold mb-1">
              Time<span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.time ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-300"
              }`}
            />
            {errors.time && <p className="text-red-500 mt-1 text-sm">{errors.time}</p>}
          </div>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block font-semibold mb-1">
            Location<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.location ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-300"
            }`}
            placeholder="Venue or address"
          />
          {errors.location && <p className="text-red-500 mt-1 text-sm">{errors.location}</p>}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block font-semibold mb-1">
            Category<span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.category ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-300"
            }`}
          >
            <option value="">Select category</option>
            <option value="Music">Music</option>
            <option value="Comedy">Comedy</option>
            <option value="Sports">Sports</option>
            <option value="Workshop">Workshop</option>
            <option value="Theatre">Theatre</option>
            <option value="Other">Other</option>
          </select>
          {errors.category && <p className="text-red-500 mt-1 text-sm">{errors.category}</p>}
        </div>

        {/* Attendees */}
<div>
  <label htmlFor="attendees" className="block font-semibold mb-1">
    Number of Attendees<span className="text-red-500">*</span>
  </label>
  <input
    type="number"
    id="attendees"
    name="attendees"
    value={form.attendees}
    min={1}
    max={50}
    onChange={handleChange}
    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
      errors.attendees ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-300"
    }`}
  />
  {errors.attendees && <p className="text-red-500 mt-1 text-sm">{errors.attendees}</p>}
</div>


        {/* Image URL */}
        <div>
          <label htmlFor="imageUrl" className="block font-semibold mb-1">
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {joinCode && (
        <div className="bg-green-100 text-green-800 border border-green-300 px-4 py-3 rounded mb-6 text-center">
          <strong>Success!</strong> Your event join code is: <span className="font-bold">{joinCode}</span>
        </div>
      )}

        {/* Submit Button */}
        <button
        // onClick={
        //     router.push("/my-events")
        // }
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Create Event
        </button>
      </form>
    </main>
  );
}


export default CreateEventPage;
