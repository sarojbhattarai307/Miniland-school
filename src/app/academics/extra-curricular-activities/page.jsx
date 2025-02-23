'use client'

import React,{useEffect, useState} from 'react';
import Navbar from '../../../components/common/Navbar';
import Cta from '../../../components/common/Cta';
import Footer from '../../../components/common/Footer';
import { Calendar, Star, Users, Award, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ECAPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  

  useEffect(() => {
    // Only run on the client side
    const newPositions = Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setPositions(newPositions);
  }, []);

  

  const activities = [
    {
      category: "Sports & Fitness",
      items: ["Basketball", "Soccer", "Swimming", "Track & Field", "Yoga"],
      icon: "🏃‍♂️"
    },
    {
      category: "Arts & Creativity",
      items: ["Painting", "Music", "Drama", "Dance", "Photography"],
      icon: "🎨"
    },
    {
      category: "Clubs & Societies",
      items: ["Debate Club", "Environmental Club", "Coding Club", "Book Club", "Science Club"],
      icon: "👥"
    },
    {
      category: "Community Service",
      items: ["Volunteer Programs", "Charity Drives", "Environment Cleanup", "Teaching Assistant"],
      icon: "🤝"
    }
  ];

  const testimonials = [
    {
      quote: "Through the debate club, I've gained confidence in public speaking and critical thinking.",
      author: "Sarah Johnson",
      activity: "Debate Club"
    },
    {
      quote: "Being part of the basketball team taught me the value of teamwork and dedication.",
      author: "Michael Chen",
      activity: "Basketball Team"
    },
    {
      quote: "The art club has given me a platform to express my creativity and meet like-minded people.",
      author: "Emma Williams",
      activity: "Art Club"
    }
  ];

  const upcomingEvents = [
    {
      title: "Inter-School Basketball Tournament",
      date: "March 20, 2025",
      category: "Sports"
    },
    {
      title: "Annual Art Exhibition",
      date: "April 5, 2025",
      category: "Arts"
    },
    {
      title: "Debate Competition Finals",
      date: "April 15, 2025",
      category: "Clubs"
    }
  ];

  return (
    <div>
    {/* Enhanced Navbar */}
    <div>
      <Navbar />
    </div>

{/* Extra Curricular Activities Page */}
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Extra-Curricular Activities
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Discover Your Passion Beyond the Classroom
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            Explore Activities
          </button>
        </div>
        {/* Animated background elements */}
        {positions.map((pos, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1
            }}
          >
            <Star className="text-white w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Why ECA Matters */}
        <section id="why-eca" className={`mt-20 transition-all duration-1000 ${isVisible['why-eca'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Why ECA Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Growth",
                description: "Develop leadership skills, confidence, and self-expression through various activities",
                icon: "🌱"
              },
              {
                title: "Social Skills",
                description: "Build lasting friendships and learn to work effectively in teams",
                icon: "🤝"
              },
              {
                title: "Future Success",
                description: "Enhance your college applications and career prospects",
                icon: "🎯"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Activities Grid */}
        <section id="activities" className={`mt-20 transition-all duration-1000 ${isVisible['activities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Our ECA Offerings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{activity.category}</h3>
                <ul className="space-y-2">
                  {activity.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* School Events */}
        <section id="events" className={`mt-20 transition-all duration-1000 ${isVisible['events'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Our School Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-indigo-600">{event.category}</span>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            ))}
          </div>
        </section>

{/* Highlights of Our Events */}
<section id="events" className={`mt-20 transition-all duration-1000 ${isVisible['events'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Highlights of Our School Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-indigo-600">{event.category}</span>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            ))}
          </div>
        </section>

         {/* Upcoming Events Calendar */}
      <div className="mt-20 max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=42e14ff1f5732a4be4aa69e0a9b3cc66ba3604c0a4dfed1a8019a46c37fdfbee@group.calendar.google.com"
          className="w-full h-96 rounded-lg shadow-lg"
        />
      </div>

        {/* Testimonials */}
        <section id="testimonials" className={`mt-20 transition-all duration-1000 ${isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">What Students Say</h2>
          <div className="relative bg-white p-8 rounded-xl shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl italic mb-6">{testimonials[activeTestimonial].quote}</p>
              <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
              <p className="text-indigo-600">{testimonials[activeTestimonial].activity}</p>
            </div>
            <button 
              onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`mt-20 transition-all duration-1000 ${isVisible['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Get Involved</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <p className="text-xl mb-6">Ready to explore our extra-curricular activities?</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all">
                Join an Activity
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all">
                Contact Coordinator
              </button>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>

    {/* call to action */}
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

export default ECAPage; 