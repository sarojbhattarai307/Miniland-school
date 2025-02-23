'use client'

import React, { useState } from 'react';
import { Brain, BookOpen, Beaker, Music, Code, Award, ChevronDown } from 'lucide-react';

const AcademicCurriculum = () => {
  const [activeTab, setActiveTab] = useState('primary');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const grades = {
    primary: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'],
    middle: ['Grade 6', 'Grade 7', 'Grade 8'],
    high: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
  };

  const features = [
    { icon: <Brain className="w-8 h-8" />, title: 'STEM Education' },
    { icon: <Code className="w-8 h-8" />, title: 'Coding & Robotics' },
    { icon: <Beaker className="w-8 h-8" />, title: 'Advanced Labs' },
    { icon: <Music className="w-8 h-8" />, title: 'Arts & Music' }
  ];

  return (
    <div className="min-h-screen bg-[#EBEBD3]">
      {/* Hero Section */}
      <div className="bg-[#083D77] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed">
            Nurturing minds through innovative learning approaches and comprehensive curriculum
          </p>
        </div>
      </div>

      

      {/* Grade Levels */}
      <div className="bg-[#F4D35E] py-16">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 mb-8">
            {Object.keys(grades).map((level) => (
              <button
                key={level}
                onClick={() => setActiveTab(level)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  activeTab === level
                    ? 'bg-[#DA4167] text-white'
                    : 'bg-white text-[#083D77]'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#083D77]">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} School Curriculum
            </h2>
            <div className="space-y-4">
              {grades[activeTab].map((grade, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 bg-[#F78764] text-white"
                  >
                    <span className="text-lg font-semibold">{grade}</span>
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="p-4 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Core Subjects</h4>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Mathematics</li>
                            <li>Science</li>
                            <li>English Language</li>
                            <li>Social Studies</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Specialized Programs</h4>
                          <ul className="list-disc list-inside space-y-1">
                            <li>STEM Projects</li>
                            <li>Digital Literacy</li>
                            <li>Art & Design</li>
                            <li>Physical Education</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#083D77]">
            Assessment & Grading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#EBEBD3] rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Continuous Evaluation</h3>
              <p>Regular assessments through projects, quizzes, and class participation</p>
            </div>
            <div className="p-6 bg-[#EBEBD3] rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Semester System</h3>
              <p>Two comprehensive examinations per academic year</p>
            </div>
            <div className="p-6 bg-[#EBEBD3] rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
              <p>Detailed progress reports and parent-teacher meetings</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#DA4167] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Academic Journey?</h2>
          <button className="bg-white text-[#DA4167] px-8 py-3 rounded-full font-semibold hover:bg-[#F78764] hover:text-white transition-colors duration-300">
            Download Curriculum PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicCurriculum;