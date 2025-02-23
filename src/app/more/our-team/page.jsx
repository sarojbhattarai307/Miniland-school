'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'
import { Mail, Phone, ChevronDown, Filter } from 'lucide-react';

const TeamPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  const [filteredMembers, setFilteredMembers] = useState([]); // State to track filtered members

  // Mock team data
  const teamMembers = [
    { id: 1, name: "Dr. Sarah Johnson", role: "Principal", department: "administration", bio: "20+ years in education leadership" },
    { id: 2, name: "Mark Thompson", role: "Math Teacher", department: "teaching", bio: "Specialist in Advanced Mathematics" },
    { id: 3, name: "Lisa Chen", role: "Student Counselor", department: "support", bio: "Helping students achieve their dreams" },
    { id: 4, name: "Mark Thompson", role: "Math Teacher", department: "teaching", bio: "Specialist in Advanced Mathematics" },
    { id: 5, name: "Lisa Chen", role: "Student Counselor", department: "support", bio: "Helping students achieve their dreams" },
    { id: 6, name: "Mark Thompson", role: "Math Teacher", department: "teaching", bio: "Specialist in Advanced Mathematics" },
    // Add more team members as needed
  ];

  useEffect(() => {
    // Filter members based on selected department
    const filtered = teamMembers.filter(member =>
      selectedDepartment === 'all' || member.department === selectedDepartment
    );
    setFilteredMembers(filtered);
  }, [selectedDepartment]); // Runs when selectedDepartment changes


  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [filteredMembers]);

 


 

  return (
    <div>
     {/* Enhanced Navbar */}
     
     <Navbar />
      

    <div className="min-h-screen bg-[#EBEBD3]">
      {/* Hero Section */}
      <div className="bg-[#083D77] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Meet Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Dedicated professionals committed to excellence in education
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Filter className="text-[#DA4167]" />
            <button
              onClick={() => setSelectedDepartment('all')}
              className={` text-xs md:text-lg px-3 md:px-4  py-2 rounded-lg transition-all duration-300 ${
                selectedDepartment === 'all' 
                  ? 'bg-[#DA4167] text-white'
                  : 'bg-white text-[#083D77] hover:bg-[#F4D35E]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedDepartment('administration')}
              className={`text-xs md:text-lg px-3 md:px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedDepartment === 'administration'
                  ? 'bg-[#DA4167] text-white'
                  : 'bg-white text-[#083D77] hover:bg-[#F4D35E]'
              }`}
            >
              Administration
            </button>
            <button
              onClick={() => setSelectedDepartment('teaching')}
              className={`text-xs md:text-lg px-3 md:px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedDepartment === 'teaching'
                  ? 'bg-[#DA4167] text-white'
                  : 'bg-white text-[#083D77] hover:bg-[#F4D35E]'
              }`}
            >
              Teachers
            </button>
            <button
              onClick={() => setSelectedDepartment('support')}
              className={`text-xs md:text-lg px-3 md:px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedDepartment === 'support'
                  ? 'bg-[#DA4167] text-white'
                  : 'bg-white text-[#083D77] hover:bg-[#F4D35E]'
              }`}
            >
              others
            </button>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              id={`member-${member.id}`}
              className={`animate-on-scroll bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 
                ${isVisible[`member-${member.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="h-48 bg-[#F4D35E] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#DA4167] transform -skew-y-6 -translate-y-12"></div>
                <img
                  src="/api/placeholder/200/200"
                  alt={member.name}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#083D77] mb-2">{member.name}</h3>
                <p className="text-[#DA4167] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <button className="flex items-center text-[#083D77] hover:text-[#DA4167] transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </button>
                  <button className="flex items-center text-[#083D77] hover:text-[#DA4167] transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }
      `}</style>
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

export default TeamPage;