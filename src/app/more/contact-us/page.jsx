'use client'
import React, { useState } from 'react';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'
import { Mail, Phone, MapPin, Send, Loader2, Check, Github, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
     {/* Enhanced Navbar */}
     <div>
     <Navbar />
      </div>

    <div className="min-h-screen bg-[#EBEBD3]">
      {/* Header */}
      <div className="bg-[#083D77] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#083D77] mb-8">Contact Information</h2>
            
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-[#DA4167] flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#083D77]">Email Us</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-[#F4D35E] flex items-center justify-center text-[#083D77] transform group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#083D77]">Call Us</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-[#F78764] flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#083D77]">Visit Us</h3>
                <p className="text-gray-600">123 Business Street, Suite 100</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#083D77] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#DA4167] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#083D77] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#DA4167] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#083D77] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#DA4167] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#083D77] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#DA4167] focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300
                  ${isSubmitted ? 'bg-green-500' : 'bg-[#DA4167] hover:bg-opacity-90'}`}
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : isSubmitted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-[#083D77] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <button
                key={index}
                className="w-12 h-12 rounded-full bg-[#DA4167] flex items-center justify-center hover:bg-[#F78764] transition-colors duration-300"
              >
                <Icon className="w-6 h-6" />
              </button>
            ))}
          </div>
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

export default ContactPage;