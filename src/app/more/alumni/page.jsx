'use client'
import React, { useState } from 'react';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'
import { Search, Mail, Calendar, Heart, Users, BookOpen, ArrowRight } from 'lucide-react';

const AlumniPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockAlumni = [
    { name: "Sarah Chen", year: "2018", career: "Software Engineer at Google" },
    { name: "Michael Patel", year: "2015", career: "Environmental Scientist" },
    { name: "Jessica Rodriguez", year: "2010", career: "Award-winning Filmmaker" }
  ];

  const filteredAlumni = mockAlumni.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <div>
     {/* Enhanced Navbar */}
     <div>
     <Navbar />
      </div>

    <div className="min-h-screen bg-[#EBEBD3]">
      {/* Hero Section */}
      <div className="bg-[#083D77] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Welcome Back, Alumni!</h1>
          <p className="text-xl max-w-2xl">Join our thriving community of graduates who continue to shape our school's legacy and inspire future generations.</p>
        </div>
      </div>

      {/* Notable Alumni Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#083D77]">Notable Alumni</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-[#DA4167]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Distinguished Graduate {index + 1}</h3>
                  <p className="text-gray-600">Class of 201{index + 5}</p>
                  <p className="mt-4">Achieving excellence in their field and making a difference in the community.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Directory */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#083D77]">Alumni Directory</h2>
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search alumni..."
                className="w-full pl-12 pr-4 py-3 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-4">
            {filteredAlumni.map((alumni, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">{alumni.name}</h3>
                <p className="text-gray-600">Class of {alumni.year}</p>
                <p className="mt-2">{alumni.career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Reunions */}
      <section className="py-16 px-4 bg-[#F4D35E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#083D77]">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Calendar className="w-12 h-12 text-[#DA4167] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Annual Alumni Reunion</h3>
              <p className="mb-4">Join us for a night of memories and networking with fellow alumni.</p>
              <button className="bg-[#DA4167] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-[#DA4167] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mentorship Program</h3>
              <p className="mb-4">Share your experience with current students and help shape their future.</p>
              <button className="bg-[#DA4167] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Join as Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#083D77]">Alumni Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F78764] p-8 rounded-lg text-white">
              <BookOpen className="w-12 h-12 mb-4" />
              <blockquote className="text-lg italic mb-4">
                "My years at this school shaped who I am today. The friendships and lessons learned here continue to guide my path."
              </blockquote>
              <p className="font-semibold">- Class of 2012 Graduate</p>
            </div>
            <div className="bg-[#DA4167] p-8 rounded-lg text-white">
              <Heart className="w-12 h-12 mb-4" />
              <blockquote className="text-lg italic mb-4">
                "The support and guidance I received from my teachers and peers were invaluable. I'm proud to be an alumnus."
              </blockquote>
              <p className="font-semibold">- Class of 2016 Graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Network CTA */}
      <section className="bg-[#083D77] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Alumni Network</h2>
          <p className="text-xl mb-8">Stay connected, access exclusive resources, and be part of our growing community.</p>
          <button className="bg-[#F78764] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center">
            Register Now
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Alumni Association</h3>
            <p className="flex items-center">
              <Mail className="mr-2" /> alumni@school.edu
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="hover:text-[#F4D35E] transition-colors">Facebook</button>
            <button className="hover:text-[#F4D35E] transition-colors">LinkedIn</button>
            <button className="hover:text-[#F4D35E] transition-colors">Instagram</button>
          </div>
        </div>
      </footer>
    </div>


{/* Call to action */}
<div>
<Cta />
</div>

{/* Enhanced Footer */}
<div>
  <Footer />
</div>
    </div>
  );
};

export default AlumniPage;