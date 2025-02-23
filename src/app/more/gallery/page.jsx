'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'
import ImageCarousel from '../../../components/common/ImageCarousel';
import { Camera, Book, Trophy, Music, Heart, Star, Users, Calendar, ArrowDown, Award, Landmark, Sparkles } from 'lucide-react';

const ScrollIndicator = () => (
  <motion.div 
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <ArrowDown size={32} />
  </motion.div>
);

const Section = ({ children, color, className = '' }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1 }}
    className={`py-20 relative ${className}`}
    style={{ backgroundColor: color }}
  >
    {children}
  </motion.section>
);

const CategoryCard = ({ title, description, icon: Icon, images, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden"
  >
    <div className="p-6" style={{ backgroundColor: color }}>
      <Icon size={32} className="text-white mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
    <div className="grid grid-cols-2 gap-2 p-4">
      {[1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden"
        >
          <img
            src={`/api/placeholder/${300 + index}/${300 + index}`}
            alt={`${title} ${index}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const GalleryPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const categories = [
    {
      title: "Campus Life",
      description: "Daily moments that make our school special",
      icon: Landmark,
      color: "#083D77"
    },
    {
      title: "Academic Achievements",
      description: "Celebrating scholarly excellence",
      icon: Award,
      color: "#DA4167"
    },
    {
      title: "Sports & Activities",
      description: "Champions in the making",
      icon: Trophy,
      color: "#F78764"
    },
    {
      title: "Arts & Culture",
      description: "Creative expressions & performances",
      icon: Sparkles,
      color: "#F4D35E"
    }
  ];

  const highlights = [
    { value: "2,500+", label: "Students", icon: Users },
    { value: "150+", label: "Awards", icon: Trophy },
    { value: "98%", label: "Success Rate", icon: Star },
    { value: "50+", label: "Annual Events", icon: Calendar }
  ];

  return (
    <div>
     {/* Enhanced Navbar */}
     
     <Navbar />
      

    <div className="min-h-screen">
      {/* Hero Section */}
      <Section color="#083D77" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-white mb-8"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            School Gallery
          </motion.h1>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Experience our vibrant community through a visual journey
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#DA4167] text-white px-10 py-4 rounded-full text-xl font-semibold"
          >
            Start Exploring
          </motion.button>
        </div>
        <ScrollIndicator />
      </Section>

      {/* slide photo Grid */}

      <section>
    <ImageCarousel />
      </section>

      {/* Categories Grid */}
      <Section color="#EBECD3">
        <div className="container mx-auto px-4">
         
          
        <h1 className='text-5xl font-bold mb-10 text-center'>Our Gallery</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>

          
        </div>
      </Section>

      {/* Highlights Section */}
      <Section color="white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Highlights
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon size={48} className="mx-auto mb-4" />
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.value}
                </motion.div>
                <p className="text-white/90">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      

      {/* Loading Screen */}
      a
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#083D77] z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 border-4 border-[#F4D35E] border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
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

export default GalleryPage;