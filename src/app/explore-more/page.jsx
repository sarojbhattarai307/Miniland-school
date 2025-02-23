'use client'
// pages/explore.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Cta from '@/components/common/Cta'
import Head from 'next/head';

// Color palette
const colors = {
  navy: '#083D77',      // Dark blue
  cream: '#EBEBD3',     // Light cream
  pink: '#DA4167',      // Vibrant pink
  yellow: '#F4D35E',    // Warm yellow
  coral: '#F78764'      // Coral orange
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'nature', 'urban', 'adventure', 'culture'];
  
  const destinations = [
    { id: 1, name: "Mountain Retreat", category: "nature", image: "/api/placeholder/600/400", description: "Discover peaceful mountain views and hiking trails." },
    { id: 2, name: "Urban Experience", category: "urban", image: "/api/placeholder/600/400", description: "Explore vibrant city life with cultural hotspots." },
    { id: 3, name: "Beach Paradise", category: "nature", image: "/api/placeholder/600/400", description: "Relax on pristine beaches with crystal clear waters." },
    { id: 4, name: "Historical Journey", category: "culture", image: "/api/placeholder/600/400", description: "Step back in time with historical landmarks." },
    { id: 5, name: "Hiking Adventure", category: "adventure", image: "/api/placeholder/600/400", description: "Challenge yourself with breathtaking trails." },
    { id: 6, name: "City Nightlife", category: "urban", image: "/api/placeholder/600/400", description: "Experience vibrant nightlife and entertainment." },
  ];

  const filteredDestinations = activeCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  return (
<div>
    {/* Enhanced Navbar */}
          <div>
         <Navbar />
          </div>
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      <Head>
        <title>Explore More | Discover Amazing Destinations</title>
        <meta name="description" content="Explore exciting destinations around the world" />
      </Head>

      {/* Hero Section */}
      <motion.header 
        className="relative h-96 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0" style={{ backgroundColor: colors.navy, opacity: 0.85 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r" style={{ 
          backgroundImage: `linear-gradient(to right, ${colors.navy}99, ${colors.pink}70)`
        }}></div>
        <div className="h-full w-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-6"
            variants={slideUp}
          >
            Explore The World
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-2xl mb-8"
            style={{ color: colors.cream }}
            variants={slideUp}
          >
            Discover breathtaking destinations and unforgettable experiences
          </motion.p>
          <motion.button 
            className="px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition duration-300 shadow-lg"
            style={{ backgroundColor: colors.yellow, color: colors.navy }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.header>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.navy }}>Explore By Category</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.navy + 'cc' }}>
            Filter destinations based on your interests and discover perfect places for your next adventure
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggeredContainer}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={slideUp}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 capitalize shadow-md`}
              style={
                activeCategory === category
                  ? { backgroundColor: colors.pink, color: 'white' }
                  : { backgroundColor: colors.navy + '20', color: colors.navy }
              }
              onClick={() => setActiveCategory(category)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Destination Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggeredContainer}
        >
          {filteredDestinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={slideUp}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 capitalize"
                  style={{ backgroundColor: colors.yellow + '30', color: colors.navy }}
                >
                  {destination.category}
                </span>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>
                  {destination.name}
                </h3>
                <p className="mb-4" style={{ color: colors.navy + 'cc' }}>
                  {destination.description}
                </p>
                <motion.button 
                  className="inline-flex items-center font-medium transition-colors"
                  style={{ color: colors.pink }}
                  whileHover={{ x: 5, color: colors.coral }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discover More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredDestinations.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg" style={{ color: colors.navy + 'cc' }}>
              No destinations found in this category. Try another category.
            </p>
          </motion.div>
        )}
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.yellow + '20' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.navy }}>
              Why Explore With Us
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.navy + 'cc' }}>
              We offer unique experiences tailored to your preferences
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredContainer}
          >
            {[
              {
                icon: "✨",
                title: "Curated Experiences",
                description: "Hand-picked destinations and activities chosen by travel experts."
              },
              {
                icon: "🛡️",
                title: "Safe Adventures",
                description: "All experiences are vetted for safety and quality assurance."
              },
              {
                icon: "🌱",
                title: "Sustainable Travel",
                description: "Eco-friendly options that minimize environmental impact."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.navy }}>{feature.title}</h3>
                <p style={{ color: colors.navy + 'cc' }}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.navy }}>
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.navy + 'cc' }}>
            Join thousands of travelers who have discovered amazing destinations with our guidance
          </p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={staggeredContainer}
          >
            <motion.button 
              variants={slideUp}
              className="px-8 py-3 rounded-full font-semibold shadow-lg"
              style={{ backgroundColor: colors.pink, color: 'white' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Trip
            </motion.button>
            <motion.button 
              variants={slideUp}
              className="px-8 py-3 rounded-full font-semibold border"
              style={{ borderColor: colors.coral, color: colors.coral, backgroundColor: 'transparent' }}
              whileHover={{ scale: 1.05, backgroundColor: colors.coral + '10' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section className="text-white py-16 px-4" style={{ 
        backgroundImage: `linear-gradient(to right, ${colors.navy}, ${colors.pink})` 
      }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto text-center"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8" style={{ color: colors.cream }}>
              Subscribe to our newsletter for travel tips, destination guides, and exclusive offers
            </p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-3 mx-auto max-w-lg"
              variants={slideUp}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ color: colors.navy, backgroundColor: colors.cream, 
                       focusRing: colors.yellow }}
              />
              <motion.button
                type="submit"
                className="px-6 py-3 rounded-full font-medium transition duration-300"
                style={{ backgroundColor: colors.yellow, color: colors.navy }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-300 py-12 px-4" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Explore More</h3>
            <p className="mb-4" style={{ color: colors.cream + 'cc' }}>
              Your gateway to amazing destinations and experiences around the world.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map(social => (
                <a key={social} href="#" className="transition-colors" 
                   style={{ color: colors.cream + '80' }}
                   onMouseOver={(e) => e.currentTarget.style.color = colors.coral}
                   onMouseOut={(e) => e.currentTarget.style.color = colors.cream + '80'}>
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: colors.cream + '30' }}></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Destinations', 'Tours', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="transition-colors" 
                     style={{ color: colors.cream + 'cc' }}
                     onMouseOver={(e) => e.currentTarget.style.color = colors.coral}
                     onMouseOut={(e) => e.currentTarget.style.color = colors.cream + 'cc'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Destinations</h4>
            <ul className="space-y-2">
              {['Europe', 'Asia', 'Africa', 'North America', 'South America'].map(continent => (
                <li key={continent}>
                  <a href="#" className="transition-colors" 
                     style={{ color: colors.cream + 'cc' }}
                     onMouseOver={(e) => e.currentTarget.style.color = colors.coral}
                     onMouseOut={(e) => e.currentTarget.style.color = colors.cream + 'cc'}>
                    {continent}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <address className="not-italic" style={{ color: colors.cream + 'cc' }}>
              <p className="mb-2">123 Adventure Street</p>
              <p className="mb-2">Explore City, EC 12345</p>
              <p className="mb-2">info@exploremore.example</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t text-center text-sm" 
             style={{ borderColor: colors.cream + '30', color: colors.cream + '99' }}>
          <p>© {new Date().getFullYear()} Explore More. All rights reserved.</p>
        </div>
      </footer>
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
}