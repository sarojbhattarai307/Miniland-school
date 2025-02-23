'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'
import { Phone, Award, Shield, Leaf, Book, Users, Globe, Heart, Star, Zap } from 'lucide-react';

const colors = {
  navy: '#083D77',
  cream: '#EBEBD3',
  rose: '#DA4167',
  yellow: '#F4D35E',
  coral: '#F78764'
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const facilities = [
  {
    title: "Modern Library",
    description: "State-of-the-art library with over 50,000 books and digital resources",
    features: ["Digital Catalogs", "Study Pods", "Research Databases", "Reading Lounges"]
  },
  {
    title: "Science Labs",
    description: "Fully equipped laboratories for physics, chemistry, and biology",
    features: ["Advanced Equipment", "Safety Gear", "Research Tools", "Digital Microscopes"]
  },
  {
    title: "Sports Complex",
    description: "Indoor and outdoor facilities including swimming pool and tennis courts",
    features: ["Olympic Pool", "Tennis Courts", "Indoor Gym", "Training Programs"]
  },
  {
    title: "Auditorium",
    description: "500-seat auditorium with advanced audio-visual equipment",
    features: ["HD Projectors", "Surround Sound", "Stage Lighting", "Recording Studio"]
  },
  {
    title: "Computer Labs",
    description: "Multiple computer labs with latest hardware and software",
    features: ["High-Speed Internet", "Latest Software", "3D Printers", "VR Equipment"]
  },
  {
    title: "Cafeteria",
    description: "Spacious dining area serving nutritious meals prepared in-house",
    features: ["Organic Options", "Diet Plans", "Fresh Products", "Healthy Snacks"]
  }
];

const features = [
  {
    title: "Safety First",
    description: "24/7 security surveillance and controlled access points",
    icon: Shield
  },
  {
    title: "Modern Equipment",
    description: "Latest educational technology and learning tools",
    icon: Zap
  },
  {
    title: "Eco-Friendly",
    description: "Solar-powered facilities and waste management systems",
    icon: Leaf
  }
];

const statistics = [
  { value: "50+", label: "Modern Classrooms" },
  { value: "25+", label: "Specialized Labs" },
  { value: "1000+", label: "Students Capacity" },
  { value: "100%", label: "Safety Score" }
];

const testimonials = [
  {
    quote: "The facilities here are truly world-class. My children love the interactive learning spaces.",
    author: "Parent",
    rating: 5
  },
  {
    quote: "State-of-the-art science labs helped me develop my research skills.",
    author: "Student",
    rating: 5
  },
  {
    quote: "The modern equipment and facilities make teaching more effective and engaging.",
    author: "Teacher",
    rating: 5
  }
];

const SchoolFacilitiesPage = () => {
  return (
    <div>
     {/* Enhanced Navbar */}
     <div>
     <Navbar />
      </div>

    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen overflow-hidden"
        style={{ backgroundColor: colors.navy }}
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <motion.div 
          className="absolute inset-0 opacity-90"
          style={{ 
            background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.rose} 100%)` 
          }}
          animate={{ 
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            World-Class Facilities
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl max-w-3xl text-white opacity-90 mb-8"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Empowering education with state-of-the-art infrastructure and modern amenities
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Overview */}
      <section className="py-20" style={{ backgroundColor: colors.yellow }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            style={{ color: colors.navy }}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            Excellence in Every Detail
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Book, title: "Library Resources", value: "50,000+" },
              { icon: Users, title: "Class Size", value: "20 Students" },
              { icon: Globe, title: "Campus Area", value: "25 Acres" },
              { icon: Heart, title: "Student Satisfaction", value: "98%" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-6 rounded-lg"
                style={{ backgroundColor: colors.cream }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4" style={{ color: colors.rose }} />
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.navy }}>
                  {item.title}
                </h3>
                <p className="text-2xl font-bold" style={{ color: colors.rose }}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            style={{ color: colors.navy }}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            Our Facilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                className="rounded-lg shadow-lg overflow-hidden"
                style={{ 
                  backgroundColor: index % 2 === 0 ? colors.yellow : colors.coral
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.navy }}>
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <Star className="w-4 h-4 mr-2" style={{ color: colors.navy }} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: colors.rose }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-white"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            What People Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg"
                style={{ backgroundColor: colors.cream }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ color: colors.yellow }} fill={colors.yellow} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold" style={{ color: colors.navy }}>- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: colors.navy }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-white"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            Experience Our World-Class Facilities
          </motion.h2>
          <motion.p
            className="text-xl text-white opacity-90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join our community and experience the perfect blend of modern infrastructure and innovative learning
          </motion.p>
          <motion.button 
            className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            style={{ 
              backgroundColor: colors.coral,
              color: colors.navy
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: colors.yellow
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us Today
          </motion.button>
        </div>
      </section>
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

export default SchoolFacilitiesPage;