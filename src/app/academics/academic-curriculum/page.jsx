'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Book, Calendar, Award, Users, GraduationCap, Lightbulb, Brain, Star, Code, Beaker, Music} from 'lucide-react';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'

const CurriculumPage = () => {
  const [activeSection, setActiveSection] = useState('primary');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Only run on the client side
    const newPositions = Array.from({ length: 5 }).map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
    }));
    setPositions(newPositions);
  }, []);

  const handleAccordionClick = (category) => {
    setActiveAccordion(activeAccordion === category ? null : category);
  };
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const subjects = {
    core: ['Mathematics', 'Science', 'English', 'Social Studies'],
    electives: ['Music', 'Art', 'Computer Science', 'Foreign Languages'],
    advanced: ['AP Calculus', 'AP Physics', 'IB Literature', 'Honors Chemistry']
  };

  const educationLevels = {
    primary: {
      title: 'Primary School',
      grades: 'Grades 1-5',
      description: 'Building strong foundations through core subjects and developmental activities.',
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />
    },
    middle: {
      title: 'Middle School',
      grades: 'Grades 6-8',
      description: 'Expanding knowledge through interdisciplinary learning and critical thinking.',
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />
    },
    high: {
      title: 'High School',
      grades: 'Grades 9-12',
      description: 'Preparing for college through specialized courses and advanced placement options.',
      icon: <Brain className="w-8 h-8 text-blue-600" />
    }
  };

  const grades = {
    primary: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'],
    middle: ['Grade 6', 'Grade 7', 'Grade 8'],
    high: ['Grade 9', 'Grade 10']
  };


  const features = [
    { icon: <Brain className="w-8 h-8" />, title: 'STEM Education' },
    { icon: <Code className="w-8 h-8" />, title: 'Coding & Robotics' },
    { icon: <Beaker className="w-8 h-8" />, title: 'Advanced Labs' },
    { icon: <Music className="w-8 h-8" />, title: 'Arts & Music' }
  ];

  return (
    <div className='min-h-screen bg-[#EBEBD3]'>
{/* Enhanced Navbar */}
      <div>
     <Navbar />
      </div>

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with parallax and floating elements */}
      <div className="relative min-h-[500px]  overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
         
          <div className="absolute inset-0 bg-[#0F4D91]" />
        </motion.div>
        
        {/* Floating Elements */}
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: pos.top,
              left: pos.left,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <Star className="w-4 h-4 text-blue-200" />
          </motion.div>
        ))}



        <motion.div 
          className="relative container mx-auto px-6 h-full flex flex-col justify-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Empowering <span className="text-blue-300">Future</span> Leaders
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Our comprehensive curriculum is designed to inspire curiosity, foster creativity, 
              and develop critical thinking skills that prepare students for future success.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Education Levels */}
        <motion.section 
          className="mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            variants={fadeInUp}
          >
            Our Education Pathway
          </motion.h2>

          <div className='min-w-7xl bg-[#EEF4FF] p-3 md:p-10'>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(educationLevels).map(([key, level], index) => (
              <motion.div
                key={key}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className={`group p-8 rounded-xl transition-all duration-300 cursor-pointer
                  hover:shadow-xl bg-white border-2 relative overflow-hidden
                  ${activeSection === key ? 'border-blue-500 shadow-lg' : 'border-gray-100'}
                `}
                onClick={() => setActiveSection(key)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {level.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {level.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{level.grades}</p>
                  <p className="text-gray-600 leading-relaxed">{level.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
          <div className=" py-16">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-4 mb-8 px-2">
            {Object.keys(grades).map((level) => (
              <button
                key={level}
                onClick={() => setActiveSection(level)}
                className={` px-5 text-[#13px] md:px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  activeSection === level
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
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} School Curriculum
            </h2>
            <div className="space-y-4">
              {grades[activeSection].map((grade, index) => (
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
          </div>
          </div>

        </motion.section>

        {/* Subjects Section */}
        <div className='px-6'>
        <motion.section 
          className="mb-10 bg-gradient-to-br from-blue-50 to-indigo-50 -mx-6 px-6 py-16 relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              backgroundSize: ['100% 100%', '120% 120%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              backgroundImage: 'url()'
            }}
          />
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Academic Programs
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
          >
            {Object.entries(subjects).map(([category, subjectList]) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md"
              >
                <motion.button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors"
                  onClick={() => handleAccordionClick(category)}
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="text-xl font-bold capitalize bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {category.replace('_', ' ')} Subjects
                  </span>
                  <motion.div
                    animate={{ rotate: activeAccordion === category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeAccordion === category ? 'auto' : 0,
                    opacity: activeAccordion === category ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 border-t">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {subjectList.map((subject, index) => (
                        <motion.div
                          key={subject}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50
                            hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 
                            shadow-sm hover:shadow-md group"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Book className="w-6 h-6 mb-2 text-blue-600" />
                          </motion.div>
                          <span className="font-medium">{subject}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        </div>

{/* Features Grid */}
        <motion.section 
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        >
          <h1 className='text-4xl text-[#3D53E8] font-bold text-center mb-16'>Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-[#DA4167] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">
                Excellence in {feature.title} through practical learning and innovation
              </p>
            </div>
          ))}
        </div>
      </motion.section>

        {/* Assessment Section */}
        <motion.section 
          className="mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Assessment & Grading
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Evaluation Methods</h3>
              <motion.ul 
                className="space-y-4"
                variants={staggerContainer}
              >
                {[
                  { icon: <Calendar />, text: 'Regular Assessments & Quizzes' },
                  { icon: <Users />, text: 'Group Projects & Presentations' },
                  { icon: <Award />, text: 'Standardized Testing' }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Grading Scale</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { grade: 'A', range: '90-100%', gradient: 'from-green-400 to-emerald-500' },
                  { grade: 'B', range: '80-89%', gradient: 'from-blue-400 to-blue-500' },
                  { grade: 'C', range: '70-79%', gradient: 'from-yellow-400 to-yellow-500' },
                  { grade: 'D', range: '60-69%', gradient: 'from-orange-400 to-orange-500' }
                ].map(({ grade, range, gradient }, index) => (
                  <motion.div
                    key={grade}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg bg-gradient-to-r ${gradient} text-white shadow-sm hover:shadow-md`}
                  >
                    <span className="text-lg font-bold">{grade}: </span>
                    <span className="font-medium">{range}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
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

export default CurriculumPage;