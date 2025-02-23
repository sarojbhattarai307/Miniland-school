// pages/visit-us.js
'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image'; 
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Cta from '../../components/common/Cta'
import { ChevronDown, MapPin, Phone, Mail, Clock, Car, Bus, Train, User } from 'lucide-react';

export default function VisitUs() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id;
        if (sectionTop < window.innerHeight * 0.75) {
          setVisibleSections(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const testimonials = [
    {
      id: 1,
      text: "Visiting the office was a breeze with their clear directions. The space itself is modern and welcoming!",
      name: "Sarah Johnson",
      position: "First-time Visitor"
    },
    {
      id: 2,
      text: "I was impressed by how accessible the location is. They've truly thought of everything to make visits convenient.",
      name: "Michael Chen",
      position: "Regular Client"
    },
    {
      id: 3,
      text: "The office location is perfect - close to public transport and with ample parking. Couldn't ask for more!",
      name: "Emily Rodriguez",
      position: "Business Partner"
    }
  ];

  const faqs = [
    {
      question: "Is there parking available on-site?",
      answer: "Yes, we have a dedicated parking lot with 30 spaces available free of charge for visitors. Additional street parking is available nearby if our lot is full."
    },
    {
      question: "What are the best times to visit to avoid crowds?",
      answer: "We recommend visiting between 10:00 AM - 11:30 AM or 2:00 PM - 4:00 PM on weekdays for the quietest experience. Mondays and Wednesdays tend to be our least busy days."
    },
    {
      question: "Is your location accessible for people with disabilities?",
      answer: "Absolutely. Our facility is fully ADA compliant with ramp access, elevator service to all floors, accessible restrooms, and designated parking spaces close to the entrance."
    },
    {
      question: "Do I need to make an appointment before visiting?",
      answer: "While walk-ins are welcome, we recommend scheduling an appointment to ensure prompt service and minimize wait times. You can book an appointment through our website or by calling our office."
    }
  ];

  return (
    <div>
<Navbar />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Visit Us | Modern Company</title>
        <meta name="description" content="Visit our office location. Get directions, contact information, and details about how to reach us." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-30"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in">
            Visit Our Location
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            We're excited to welcome you to our modern workspace. Located in the heart of the city, our office is designed to inspire collaboration and innovation.
          </p>
          <button className="bg-white text-blue-700 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out opacity-0 animate-fade-in animation-delay-600">
            Get Directions
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white" />
        </div>
      </section>

      {/* Address & Contact Details */}
      <section 
        id="contact-section"
        className={`py-24 px-6 max-w-7xl mx-auto animate-on-scroll ${visibleSections['contact-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us Here</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Our Address</h3>
            <p className="text-gray-600 text-center">
              123 Innovation Boulevard<br />
              Technopark, Suite 4500<br />
              San Francisco, CA 94107
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Contact Details</h3>
            <p className="text-gray-600 text-center mb-2">
              <span className="font-medium">Phone:</span> (415) 555-0123
            </p>
            <p className="text-gray-600 text-center">
              <span className="font-medium">Email:</span> visit@moderncompany.com
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Working Hours</h3>
            <p className="text-gray-600 text-center mb-1">
              <span className="font-medium">Monday-Friday:</span> 8:00 AM - 6:00 PM
            </p>
            <p className="text-gray-600 text-center mb-1">
              <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
            </p>
            <p className="text-gray-600 text-center">
              <span className="font-medium">Sunday:</span> Closed
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section 
        id="map-section"
        className={`py-20 px-6 bg-gray-50 animate-on-scroll ${visibleSections['map-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us easily with our interactive map. Click to get directions from your current location.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <div className="h-96 w-full bg-gray-300 relative">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-[url('/api/placeholder/1600/800')] bg-cover bg-center"></div>
              
              {/* Custom Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="mt-2 bg-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="font-medium text-gray-800">Modern Company HQ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center mx-auto">
              <MapPin className="w-5 h-5 mr-2" />
              Open in Google Maps
            </button>
          </div>
        </div>
      </section>

      {/* How to Reach Us */}
      <section 
        id="directions-section"
        className={`py-24 px-6 max-w-7xl mx-auto animate-on-scroll ${visibleSections['directions-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Reach Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple transportation options make it easy to visit our location from anywhere in the city.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Car className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">By Car</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                <span>Take Highway 101 to the Innovation District exit</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                <span>Follow Technology Drive for 0.5 miles</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                <span>Turn right onto Innovation Boulevard</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                <span>Our building is on the right with visitor parking available in front</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Bus className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">By Public Transit</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                <span>Take the BART to Montgomery Station</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                <span>Transfer to bus line 30 heading east</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                <span>Exit at Innovation Plaza stop</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                <span>Our building is across the street, a 2-minute walk from the bus stop</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Train className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">By Train</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                <span>Arrive at San Francisco Central Station</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                <span>Take the South Exit toward Technology Square</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                <span>Walk 10 minutes east on Innovation Avenue</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                <span>Our building is at the corner of Innovation Boulevard and Tech Street</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">Special Access</h3>
            </div>
            <div className="text-gray-700">
              <p className="mb-4">We're committed to being accessible to everyone:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Wheelchair accessible entrance at the main lobby</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Reserved parking spots near the entrance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Elevator access to all floors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Assistance available - call ahead at (415) 555-0123</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials-section"
        className={`py-24 px-6 bg-gray-900 animate-on-scroll ${visibleSections['testimonials-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Visitor Experiences</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what others have to say about visiting our location.
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-gray-800 rounded-xl p-8 shadow-xl transform hover:-translate-y-2 transition duration-300"
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section 
        id="faq-section"
        className={`py-24 px-6 max-w-7xl mx-auto animate-on-scroll ${visibleSections['faq-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know before your visit.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-gray-800 text-left">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeAccordion === index ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="p-5 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        id="cta-section"
        className={`py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 animate-on-scroll ${visibleSections['cta-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Visit Us?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            We're excited to meet you in person. Our team is ready to welcome you and show you around our innovative space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out text-lg">
              Get Directions
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out text-lg">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
</div>

<div>
  <Cta />
</div>

<Footer />
</div>
    )
}