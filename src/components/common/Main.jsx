'use client'
import React, { useState, useEffect } from 'react';
import PhotoPage from '@/components/common/PhotoPage'
import Cta from '@/components/common/Cta'
import {MapPin, Star, Users, BookOpen, Trophy, ArrowRight, Calendar, CalendarDays, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (


<main className={``}>
      {/* Enhanced Hero Section */}
      <div className="relative pb-5 bg-[#083D77] text-white overflow-hidden bg-[url('/images/unnamed.jpg')] bg-cover bg-center w-full">
        <div className="absolute inset-0  bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideDown">
              Welcome to Miniland
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slideDown">
              English Boarding School
            </h1>
            <p className="text-xl font-bold md:text-2xl mb-8 animate-slideUp">
              Nurturing Minds, Building Futures, Creating Leaders
            </p>
            <p className='text-lg font-[300] pb-8 max-w-5xl text-center mx-auto'>
            Discover a place where knowledge meets creativity. We empower students with skills, values, and a passion for learning. Our dedicated educators nurture curiosity and excellence. Join us in shaping a brighter future.
            </p>
            <div className="space-x-4">
              <Link href='/explore-more'>
              <button className="bg-[#DA4167] hover:bg-[#F78764] text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 animate-bounce">
                Explore Us
              </button>
              </Link>
              <Link href='/more/faq'>
              <button className="border-2 border-white hover:bg-white hover:text-[#083D77] text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105">
               Go to FAQS
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* School Stats */}
<div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition duration-300">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#DA4167]" />
              <h3 className="text-4xl font-bold text-[#083D77]">2000+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-[#DA4167]" />
              <h3 className="text-4xl font-bold text-[#083D77]">150+</h3>
              <p className="text-gray-600">Expert Faculty</p>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-[#DA4167]" />
              <h3 className="text-4xl font-bold text-[#083D77]">50+</h3>
              <p className="text-gray-600">Awards</p>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <Star className="w-12 h-12 mx-auto mb-4 text-[#DA4167]" />
              <h3 className="text-4xl font-bold text-[#083D77]">100%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Banner */}
      <div className="bg-[#F4D35E] py-8">
        <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
            <div className='max-w-xl'>
            <img className=' h-auto' src="/images/admission.webp" alt="" />
            </div>
            <div className="mb-4 md:mb-0 flex flex-col gap-2">
              <h1 className='text-4xl font-bold text-[#0b2846]'>Join Our School:</h1>
              <h2 className="text-5xl font-bold text-[#083D77]">Admissions Open 2025-26</h2>

              <p className="text-xl font-bold">Limited seats available for all grades</p>


              <p className='max-w-xl text-[19px]'>Discover the path to a brighter future with our 
                school. Our admissions process is designed to be straightforward and accessible. Apply today to become part of a community that values excellence and growth.
              </p>
              <ul className='mt-5 max-w-xl text-lg flex flex-col gap-2'>
                <li className='flex gap-2'><CalendarDays /> Application Deadline: January  31, 2025</li>
                <li className='flex gap-2'><CalendarDays />Requirements:form, transcripts, and letters</li>
                <li className='flex gap-2'><CalendarDays />Contact Admissions Office for more details</li>
              </ul>

              <div className='mt-10 flex flex-col md:flex-row gap-10 items-center'>
                <button className="bg-[#0a5491] hover:bg-[#2497f5] text-white font-bold py-3 px-20 rounded-full transition duration-300 transform hover:scale-105 flex items-center">
             Contact Us
            </button>
                <button className="bg-[#DA4167] hover:bg-[#F78764] text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center">
             Admission Procedure <ArrowRight className="ml-2" />
            </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      

      {/* Featured Programs */}
      <div className="py-16 bg-[#EBEBD3]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#083D77] mb-12">Our Featured Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "STEAM Education",
                description: "Innovative approach to learning Science, Technology, Engineering, Arts, and Mathematics",
                icon: "🔬"
              },
              {
                title: "Sports Excellence",
                description: "State-of-the-art facilities for various sports with professional coaching",
                icon: "🏆"
              },
              {
                title: "Performing Arts",
                description: "Comprehensive programs in music, dance, and theater",
                icon: "🎭"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-[#083D77] mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                {/* <button className="mt-4 text-[#DA4167] hover:text-[#F78764] font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className=''>
        <PhotoPage />
      </div>
      

      {/* Testimonials */}
      <div className="py-16 bg-[#083D77] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The school's commitment to excellence and personal attention to each student is remarkable.",
                author: "Sarah Johnson",
                role: "Parent of Grade 5 Student"
              },
              {
                text: "Outstanding faculty and innovative teaching methods have helped my child excel academically.",
                author: "Michael Chen",
                role: "Parent of Grade 8 Student"
              },
              {
                text: "The perfect balance of academics, sports, and extracurricular activities makes this school special.",
                author: "Emma Thompson",
                role: "Parent of Grade 3 Student"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="text-[#DA4167] text-4xl mb-4">"</div>
                <p className="mb-4">{testimonial.text}</p>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
     
      {/* Call to Action */}
      <div>
        <Cta />
      </div>

      
  </main>
    
  );
};

export default MainPage;

// Add these animations to your global CSS
