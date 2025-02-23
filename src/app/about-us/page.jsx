'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Cta from '@/components/common/Cta'

const AboutUs = () => {
  
  return (
    <div>
    {/* Enhanced Navbar */}
    <Navbar />
    

    <div className="min-h-screen bg-[#EBEBD3]">
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Shaping Tomorrow's Leaders</h1>
            <p className="text-xl text-[#EBEBD3] leading-relaxed">Creating a foundation of excellence, innovation, and character for generations to come.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 w-16 bg-[#DA4167] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#083D77] mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">To empower students with knowledge, skills, and values that enable them to become responsible global citizens and lifelong learners who contribute positively to society.</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#F78764] rounded-full mr-3"></span>
                  <span className="text-gray-700">Excellence in Education</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#F78764] rounded-full mr-3"></span>
                  <span className="text-gray-700">Character Development</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#F78764] rounded-full mr-3"></span>
                  <span className="text-gray-700">Global Perspective</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 w-16 bg-[#F4D35E] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#083D77] mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-6">To be recognized globally as a center of academic excellence, fostering innovation, creativity, and ethical leadership in our students.</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#F4D35E] rounded-full mr-3"></span>
                  <span className="text-gray-700">Innovative Learning</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#F4D35E] rounded-full mr-3"></span>
                  <span className="text-gray-700">Future-Ready Skills</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#F4D35E] rounded-full mr-3"></span>
                  <span className="text-gray-700">Ethical Leadership</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 bg-[#083D77]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our History</h2>
            <p className="text-[#EBEBD3] max-w-2xl mx-auto">A journey of excellence spanning decades, building a legacy of education and innovation.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#DA4167]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                { year: "1980", title: "Foundation", description: "Established with a vision to provide quality education" },
                { year: "1995", title: "Campus Expansion", description: "New facilities and modern infrastructure added" },
                { year: "2010", title: "Digital Innovation", description: "Integration of technology in education" },
                { year: "2020", title: "Global Recognition", description: "Achieved international accreditation" }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} items-center`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="text-[#DA4167] font-bold text-xl">{item.year}</span>
                      <h3 className="text-xl font-bold text-[#083D77] mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F78764] rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#083D77] mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our actions and shape our community.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "Striving for the highest standards in everything we do",
                color: "#DA4167",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "Embracing new ideas and approaches to learning",
                color: "#F4D35E",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Integrity",
                description: "Acting with honesty and strong moral principles",
                color: "#F78764",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-16 w-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: value.color }}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#083D77] mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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

export default AboutUs;