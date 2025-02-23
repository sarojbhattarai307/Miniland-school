'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'
import { Search, Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
  
  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );

const PolicySection = ({ title, content, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div 
        onClick={onClick}
        className="flex items-center justify-between p-4 bg-[#083D77] text-white rounded-t-lg cursor-pointer hover:bg-opacity-90 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#EBEBD3] p-6 rounded-b-lg shadow-md"
        >
          {content}
        </motion.div>
      )}
    </motion.div>
  );
};

const SchoolPoliciesPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  
  const policies = [
    {
      id: 1,
      title: "Introduction",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4 text-[#083D77]"
        >
          <p className="text-lg">Welcome to [School Name]'s Policies Page. Here, you will find important guidelines and regulations that ensure a safe, respectful, and productive learning environment for all students, staff, and parents.</p>
        </motion.div>
      )
    },
    {
      id: 2,
      title: "General School Policies",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 text-[#083D77]"
        >
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">2.1 Attendance Policy</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Students must attend all scheduled classes unless excused due to illness or emergencies.</li>
              <li>Parents/guardians must notify the school in case of an absence.</li>
              <li>Excessive absences may affect academic performance and result in disciplinary action.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">2.2 Code of Conduct</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respect for teachers, staff, and fellow students is expected at all times.</li>
              <li>Bullying, harassment, or any form of discrimination will not be tolerated.</li>
              <li>Students must follow classroom rules and maintain discipline within school premises.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">2.3 Dress Code</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Students must wear the official school uniform as per the school's dress code policy.</li>
              <li>Clothing should be neat, clean, and appropriate for a learning environment.</li>
              <li>Any violations may result in disciplinary measures.</li>
            </ul>
          </div>
        </motion.div>
      )
    },
    {
      id: 3,
      title: "Academic Policies",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 text-[#083D77]"
        >
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">3.1 Homework & Assignments</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Homework must be submitted on time. Late submissions may result in grade penalties.</li>
              <li>Plagiarism or cheating is strictly prohibited and will lead to disciplinary action.</li>
              <li>Students are expected to maintain academic integrity in all assignments and assessments.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">3.2 Grading & Examinations</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Students will be evaluated based on assignments, tests, projects, and participation.</li>
              <li>Any student caught cheating during exams will face severe consequences.</li>
              <li>Regular assessments will be conducted to monitor student progress.</li>
            </ul>
          </div>
        </motion.div>
      )
    },
    {
      id: 4,
      title: "Safety & Security Policies",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 text-[#083D77]"
        >
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">4.1 Emergency Procedures</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fire drills and emergency evacuation drills will be conducted regularly.</li>
              <li>In case of an emergency, students must follow the instructions of teachers and staff.</li>
              <li>Emergency exits and assembly points are clearly marked throughout the school.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">4.2 Use of School Facilities</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Students must take care of school property and report any damages immediately.</li>
              <li>Unauthorized use of classrooms, labs, or sports facilities is prohibited.</li>
              <li>All facilities must be used in accordance with safety guidelines.</li>
            </ul>
          </div>
        </motion.div>
      )
    },
    {
      id: 5,
      title: "Technology & Internet Use",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 text-[#083D77]"
        >
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">5.1 Acceptable Use Policy</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Students must use the school's computers and internet responsibly.</li>
              <li>Social media access is restricted during school hours.</li>
              <li>Cyberbullying and online harassment will be dealt with strictly.</li>
              <li>All online activities must comply with the school's digital citizenship guidelines.</li>
            </ul>
          </div>
        </motion.div>
      )
    },
    {
      id: 6,
      title: "Parent & Guardian Policies",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 text-[#083D77]"
        >
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">6.1 Communication with Teachers</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Parents can schedule meetings with teachers via email or the school portal.</li>
              <li>Regular parent-teacher conferences will be held to discuss student progress.</li>
              <li>All communication should be conducted in a respectful and professional manner.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#DA4167]">6.2 Volunteering & Participation</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Parents are encouraged to participate in school activities and events.</li>
              <li>Volunteers must follow school guidelines and obtain prior approval.</li>
              <li>Parent involvement in school community activities is highly valued.</li>
            </ul>
          </div>
        </motion.div>
      )
    },
    {
      id: 7,
      title: "Contact & Further Assistance",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4 text-[#083D77]"
        >
          <p className="text-lg">For any questions or clarifications regarding school policies, please contact our administration:</p>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-[#DA4167] font-semibold">Email:</p>
            <p>[School Email]</p>
            <p className="text-[#DA4167] font-semibold mt-2">Phone:</p>
            <p>[School Phone Number]</p>
          </div>
        </motion.div>
      )
    }
  ];

  const filteredPolicies = policies.filter(policy =>
    policy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
     {/* Enhanced Navbar */}
     <div>
     <Navbar />
      </div>

    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 bg-[#083D77] text-white overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-[#083D77] to-[#DA4167] opacity-90"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            School Policies
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-2xl"
          >
            Guidelines and regulations ensuring a safe and productive learning environment
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Controls */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-wrap gap-4 items-center justify-between"
        >
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search policies..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DA4167]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-[#F4D35E] text-gray-900 hover:bg-opacity-90 transition-colors duration-300"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </motion.div>

        {/* Policy Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <Card className="lg:col-span-1 h-fit sticky top-4 hidden lg:block bg-[#EBEBD3]">
            <CardContent className="p-4">
              <nav className="space-y-2">
                {policies.map((policy) => (
                  <motion.button
                    key={policy.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSection(policy.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                      activeSection === policy.id
                        ? 'bg-[#DA4167] text-white'
                        : 'hover:bg-[#F78764] hover:text-white'
                    }`}
                  >
                    {policy.title}
                  </motion.button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {filteredPolicies.map((policy) => (
              <PolicySection
                key={policy.id}
                title={policy.title}
                content={policy.content}
                isOpen={activeSection === policy.id}
                onClick={() => setActiveSection(activeSection === policy.id ? null : policy.id)}
              />
            ))}
          </div>
        </div>
      </div>
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

export default SchoolPoliciesPage;