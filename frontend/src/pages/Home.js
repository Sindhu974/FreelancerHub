import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import FreelancerCard from "../components/FreelancerCard";

function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-gray-100 min-h-screen"}>

      <Navbar />

      {/* Dark Mode Button */}
      <div className="flex justify-end p-4">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

      </div>

      {/* Hero Section */}
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="bg-blue-600 text-white py-20 px-10"
>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Left Side */}
    <div>

      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        Find Top Freelancers
      </motion.h1>

      <p className="mt-6 text-xl">
        Hire developers, designers and AI experts
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold"
      >
        Explore Now
      </motion.button>

    </div>

    {/* Right Side */}
    <div className="flex justify-center">

      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt=""
        className="rounded-2xl shadow-2xl w-full max-w-lg"
      />

    </div>

  </div>

</motion.div>

      {/* Search Section */}
      <div className="bg-white p-10 shadow-md">

        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Search Freelancers
        </h1>

        <div className="flex justify-center">

          <input
            type="text"
            placeholder="Search skills like React, UI Design..."
            className="w-full md:w-1/2 border p-4 rounded-l-lg outline-none text-black"
          />

          <button className="bg-blue-600 text-white px-6 rounded-r-lg">
            Search
          </button>

        </div>

      </div>

      {/* Top Freelancers */}
      <div className="p-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          Top Freelancers
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >

          <FreelancerCard
            image="https://i.pravatar.cc/150?img=1"
            name="John Doe"
            role="MERN Stack Developer"
          />

          <FreelancerCard
            image="https://i.pravatar.cc/150?img=2"
            name="Sarah"
            role="UI/UX Designer"
          />

          <FreelancerCard
            image="https://i.pravatar.cc/150?img=3"
            name="Alex"
            role="AI Engineer"
          />

        </motion.div>

      </div>

      {/* Categories Section */}
      <div className="p-10 bg-white">

        <h1 className="text-4xl font-bold text-center mb-10 text-black">
          Popular Categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-blue-100 p-8 rounded-xl text-center shadow">
            <h2 className="text-2xl font-bold text-black">
              Web Development
            </h2>
          </div>

          <div className="bg-green-100 p-8 rounded-xl text-center shadow">
            <h2 className="text-2xl font-bold text-black">
              UI/UX Design
            </h2>
          </div>

          <div className="bg-yellow-100 p-8 rounded-xl text-center shadow">
            <h2 className="text-2xl font-bold text-black">
              AI & ML
            </h2>
          </div>

          <div className="bg-pink-100 p-8 rounded-xl text-center shadow">
            <h2 className="text-2xl font-bold text-black">
              Mobile Apps
            </h2>
          </div>

        </div>

      </div>
{/* Portfolio Section */}
<div className="p-10">

  <h1 className="text-4xl font-bold text-center mb-10">
    Freelancer Portfolio
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Portfolio Card 1 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt=""
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          Ecommerce Website
        </h2>

        <p className="text-gray-600 mt-3">
          Modern MERN stack ecommerce platform.
        </p>

      </div>

    </div>

    {/* Portfolio Card 2 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692"
        alt=""
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          AI Dashboard
        </h2>

        <p className="text-gray-600 mt-3">
          Analytics dashboard using AI technologies.
        </p>

      </div>

    </div>

    {/* Portfolio Card 3 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt=""
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          Mobile App UI
        </h2>

        <p className="text-gray-600 mt-3">
          Beautiful mobile application interface design.
        </p>

      </div>

    </div>

  </div>

</div>

{/* Pricing Plans */}
<div className="p-10 bg-white">

  <h1 className="text-4xl font-bold text-center mb-10">
    Pricing Plans
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Basic Plan */}
    <div className="bg-gray-100 p-8 rounded-xl shadow-lg text-center">

      <h2 className="text-3xl font-bold">
        Basic
      </h2>

      <p className="text-5xl font-bold mt-6">
        ₹499
      </p>

      <ul className="mt-6 space-y-3 text-gray-600">

        <li>5 Project Posts</li>
        <li>Basic Support</li>
        <li>Limited Access</li>

      </ul>

      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Choose Plan
      </button>

    </div>

    {/* Pro Plan */}
    <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg text-center">

      <h2 className="text-3xl font-bold">
        Pro
      </h2>

      <p className="text-5xl font-bold mt-6">
        ₹999
      </p>

      <ul className="mt-6 space-y-3">

        <li>Unlimited Projects</li>
        <li>Priority Support</li>
        <li>Featured Profile</li>

      </ul>

      <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg">
        Choose Plan
      </button>

    </div>

    {/* Enterprise Plan */}
    <div className="bg-gray-100 p-8 rounded-xl shadow-lg text-center">

      <h2 className="text-3xl font-bold">
        Enterprise
      </h2>

      <p className="text-5xl font-bold mt-6">
        ₹1999
      </p>

      <ul className="mt-6 space-y-3 text-gray-600">

        <li>Dedicated Manager</li>
        <li>Premium Support</li>
        <li>Unlimited Access</li>

      </ul>

      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Choose Plan
      </button>

    </div>

  </div>

</div>

{/* Testimonials Section */}
<div className="p-10">

  <h1 className="text-4xl font-bold text-center mb-10">
    Client Testimonials
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-white p-8 rounded-xl shadow-lg">

      <p className="text-gray-600">
        "Amazing platform to hire talented freelancers."
      </p>

      <h2 className="text-2xl font-bold mt-6">
        John Smith
      </h2>

    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg">

      <p className="text-gray-600">
        "Very professional UI and easy to use."
      </p>

      <h2 className="text-2xl font-bold mt-6">
        Sarah Johnson
      </h2>

    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg">

      <p className="text-gray-600">
        "Best freelancer marketplace experience."
      </p>

      <h2 className="text-2xl font-bold mt-6">
        Alex Brown
      </h2>

    </div>

  </div>

</div>
      {/* Footer */}
      <footer className="bg-black text-white p-10 mt-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h1 className="text-3xl font-bold">
              Freelancer Hub
            </h1>

            <p className="mt-4 text-gray-400">
              Find the best freelancers for your projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Freelancers</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Contact
            </h2>

            <p className="text-gray-400">
              freelancerhub@gmail.com
            </p>

            <p className="text-gray-400 mt-2">
              +91 9876543210
            </p>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10">
          © 2026 Freelancer Hub. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;