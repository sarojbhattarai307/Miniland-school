'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Cta from '@/components/common/Cta'
import { Calendar, Clock, MapPin, ArrowRight, Star, Mail, Send } from 'lucide-react';

const EventPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');
  
  const categories = ['all', 'sports', 'cultural', 'academic', 'competitions'];
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Day 2025",
      date: "March 15, 2025",
      time: "9:00 AM",
      category: "sports",
      location: "School Ground",
      description: "Join us for an exciting day of athletic competitions and team sports."
    },
    {
      id: 2,
      title: "Science Fair Exhibition",
      date: "April 5, 2025",
      time: "10:00 AM",
      category: "academic",
      location: "School Auditorium",
      description: "Showcase of innovative student projects and experiments."
    },
    {
      id: 3,
      title: "Cultural Evening",
      date: "March 28, 2025",
      time: "5:00 PM",
      category: "cultural",
      location: "Main Hall",
      description: "A celebration of diversity through dance, music, and art."
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Winter Concert 2024",
      date: "December 15, 2024",
      description: "A magical evening of music and performance.",
      achievements: "Raised $5000 for charity",
      participants: 150
    },
    {
      id: 2,
      title: "Tech Innovation Day",
      date: "November 28, 2024",
      description: "Showcasing student technology projects.",
      achievements: "3 projects selected for state competition",
      participants: 200
    },
    {
      id: 3,
      title: "Literary Festival",
      date: "October 10, 2024",
      description: "Celebrating the power of words and storytelling.",
      achievements: "Published school anthology",
      participants: 180
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent",
      text: "The school events are always well-organized and engaging. My children love participating!",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "Student",
      text: "The Science Fair was an amazing opportunity to showcase our projects and learn from others.",
      rating: 5
    },
    {
      id: 3,
      name: "Mrs. Anderson",
      role: "Teacher",
      text: "These events bring our school community together and showcase our students' talents.",
      rating: 5
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const events = [
  {
    title: 'Science Exhibition',
    description: 'The school organizes an annual Science Exhibition, where students showcase their innovative projects and experiments. Judges from universities and research institutions evaluate the projects, and the best ones receive awards.',
    image: '/images/science.jpg',
  },
  {
    title: 'Annual Sports',
    description: 'A thrilling annual sports event where students participate in various athletic competitions, fostering teamwork and sportsmanship.',
    image: '/images/annual-sports.jpg',
  },
  {
    title: 'Cultural Program',
    description: 'A vibrant cultural showcase where students perform traditional dances, music, and drama, celebrating diversity and heritage.',
    image: '/images/cultural.jpg',
  },
  {
    title: 'Teacher’s Day Celebration',
    description: 'A heartfelt event dedicated to honoring teachers for their dedication and contributions to education.',
    image: '/images/happy-teacher-day.jpeg',
  },
  {
    title: 'Farewell Ceremony',
    description: 'A memorable event to bid farewell to graduating students, filled with speeches, performances, and heartfelt moments.',
    image: '/images/farewell.jpeg',
  },
];


  return (
<div>
    {/* Enhanced Navbar */}
          <div>
         <Navbar />
          </div>

    <div className="min-h-screen  text-black">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] bg-[#207ada] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#083D77]/90 to-[#083D77]/70"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white ">School Events 2025</h1>
            <p className="text-xl text-[#EBEBD3] leading-relaxed">Join us for an exciting year of learning, competition, and celebration.</p>

            <div className='mt-6'>
            <button 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transform hover:scale-105 transition-all flex items-center justify-center text-lg font-semibold"
            >
              Explore Events <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            </div>
          </motion.div>
          
        </div>
      </motion.section>

{/* Started Section */}
      <div className="px-5 md:px-20 pt-20 pb-16">
      <h1 className="text-xl md:text-4xl font-extralight text-gray-500 text-center">
        Our yearly events are beloved traditions that honor our school community.
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 px-4 md:px-8">
        <img className="w-full max-w-md md:max-w-xl h-auto" src="/images/1.png" alt="" />
        <div className="flex gap-3 md:gap-5 items-center mt-5 md:mt-0">
          <div className="h-24 md:h-36 w-2 bg-yellow-400"></div>
          <p className="text-lg md:text-2xl text-gray-600 max-w-md md:max-w-xl">
            Every year, we host a variety of lively and engaging events, bringing together families, friends, and neighbors to connect and support the growth and success of Miniland English School.
          </p>
        </div>
      </div>
      <div className="w-[98%] h-[2px] bg-gray-600 mx-auto mt-10 md:mt-20"></div>

      {/* Events Box */}
      <div className="p-5 md:p-20 flex flex-col gap-10 md:gap-20">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-10 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="bg-[#EBEBD3] px-5 md:px-10 py-10 md:py-20 rounded-xl max-w-full md:max-w-2xl text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-5">{event.title}</h1>
              <p className="text-base md:text-xl">{event.description}</p>
            </div>
            <img className="w-full max-w-md md:max-w-lg h-auto" src={event.image} alt="" />
          </div>
        ))}
      </div>
    </div>

{/* Explore More */}
<div className="p-6 md:p-12 lg:p-20">
  <h1 className="text-2xl md:text-3xl mb-5 text-center">Explore More</h1>
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-lg md:text-xl gap-4">
    
    <div className="bg-[#FFDC84] px-6 py-4 md:px-8 md:py-5 w-full md:w-auto text-center">
      Academic Curriculum
    </div>
    <div className="bg-[#ffb584] px-6 py-4 md:px-8 md:py-5 w-full md:w-auto text-center">
      Our Features
    </div>
    <div className="bg-[#f584ff] px-6 py-4 md:px-8 md:py-5 w-full md:w-auto text-center">
      Admission & Enrollment
    </div>

  </div>
</div>


      

      {/* Testimonials Section */}
       {/* <div className="bg-[#EBEBD3] py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What People Say
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 border border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="text-blue-700 font-medium">{testimonial.name}</div>
                <div className="text-gray-700">{testimonial.role}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>  */}

      {/* Newsletter Section */}
      
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

export default EventPage;