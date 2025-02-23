'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Football, 
  Music, 
  Microscope, 
  Camera, 
  Users, 
  Code,
  Trophy,
  Calendar
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ExtraCurricular=()=> {
  const [activeTab, setActiveTab] = useState('sports');

  const categories = [
    {
      id: 'sports',
      title: 'Sports & Physical',
      icon: <Football className="w-6 h-6" />,
      color: 'bg-[#083D77]',
      activities: ['Football', 'Basketball', 'Cricket', 'Swimming', 'Athletics']
    },
    {
      id: 'clubs',
      title: 'Clubs & Societies',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-[#DA4167]',
      activities: ['Science Club', 'Drama Club', 'Music & Dance', 'Debate Club']
    },
    {
      id: 'arts',
      title: 'Creative Arts',
      icon: <Camera className="w-6 h-6" />,
      color: 'bg-[#F4D35E]',
      activities: ['Painting', 'Sketching', 'Calligraphy', 'Digital Art']
    },
    {
      id: 'tech',
      title: 'Technology',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-[#F78764]',
      activities: ['Coding', 'Robotics', 'AI/ML', 'Game Development']
    }
  ];

  return (
    <div className="min-h-screen bg-[#EBEBD3]">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] bg-[#083D77] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#083D77]/90 to-[#DA4167]/90" />
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative text-center text-white z-10 px-4"
        >
          <h1 className="text-5xl font-bold mb-6">Extra-Curricular Activities</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover your passion and develop essential life skills through our diverse range of activities
          </p>
        </motion.div>
      </motion.div>

      {/* Categories Navigation */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex justify-center -mt-8 px-4 space-x-4 relative z-20"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            variants={fadeIn}
            onClick={() => setActiveTab(category.id)}
            className={`${category.color} ${
              activeTab === category.id ? 'scale-105' : ''
            } text-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105`}
          >
            <div className="flex items-center space-x-2">
              {category.icon}
              <span>{category.title}</span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Activities Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto mt-16 p-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.find(c => c.id === activeTab)?.activities.map((activity, index) => (
            <motion.div
              key={activity}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`h-2 ${categories.find(c => c.id === activeTab)?.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{activity}</h3>
                <p className="text-gray-600">
                  Join our {activity} program and develop your skills while having fun!
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#DA4167] text-white py-16 mt-16"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">50+ Competitions Won</h3>
              <p>National and international victories across various categories</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1000+ Active Students</h3>
              <p>Participating in various extra-curricular activities</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100+ Annual Events</h3>
              <p>Organizing competitions, workshops, and performances</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Upcoming Events Calendar */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id"
          className="w-full h-96 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default ExtraCurricular