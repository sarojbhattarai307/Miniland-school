'use client'
import React, {useState, useEffect} from 'react';
import { Calendar, Clock, FileText, Phone, Mail, ChevronDown, ChevronUp, MapPin, Download, Printer } from 'lucide-react';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '',onClick }) => (
  <div className={`p-6 ${className}`} onClick={onClick}>
    {children}
  </div>
);

const AdmissionPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "How can I get the admission form?",
      answer: "You can collect the admission form from our school's admission office during working hours (Monday-Friday, 9 AM - 3 PM)."
    },
    {
      question: "What is the admission process?",
      answer: "Visit our admission office, collect and fill out the form, submit it with required documents, and schedule an interview date with our admission coordinator."
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes, we offer merit-based and need-based scholarships. Please inquire at our admission office for detailed criteria."
    }
  ];

  const requiredDocs = [
    "Birth certificate (original + 2 photocopies)",
    "Previous academic transcripts (original + 2 photocopies)",
    "Proof of residence (recent utility bill)",
    "4 recent passport-size photographs",
    "Transfer certificate from previous school",
    "Character certificate from previous school"
  ];

  const testimonials = [
    {
      quote: "The admission process was well-organized and the staff guided us through every step.",
      author: "Sarah P., Parent"
    },
    {
      quote: "Excellence Academy has exceeded our expectations in every way.",
      author: "Michael R., Parent"
    }
  ];

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-[#0F4D91] min-h-[400px] flex items-center text-white py-16">
        <div className="container mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 animate-bounce-slow">Admission & Enrollment</h1>
          <p className="text-xl mb-8 opacity-0 animate-slide-up">Welcome to Excellence Academy. We're excited to have you join our community!</p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-lg">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
              Visit Campus
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Admission Office Location */}
        <section id="location" className={`mb-16 transition-all duration-1000 transform ${isVisible.location ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-600 to-blue-600">Visit Our Admission Office</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Admission Office Location</h3>
                  <p className="text-gray-600 mb-4">Ground Floor, Administrative Block<br />Excellence Academy Campus<br />123 Education Street</p>
                  <div className="space-y-2">
                    <p><span className="font-semibold">Hours:</span> Monday-Friday, 9 AM - 3 PM</p>
                    <p><span className="font-semibold">Contact:</span> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Application Process */}
        <section id="process" className={`mb-16 transition-all duration-1000 transform ${isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-600 to-cyan-600">Admission Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Collect Form",
                icon: Download,
                description: "Visit our admission office to collect the application form and information package"
              },
              {
                title: "Submit Documents",
                icon: FileText,
                description: "Complete the form and submit it along with all required documents"
              },
              {
                title: "Schedule Interview",
                icon: Calendar,
                description: "Schedule and attend the admission interview with your child"
              }
            ].map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section id="documents" className={`mb-16 transition-all duration-1000 transform ${isVisible.documents ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-cyan-600 to-purple-600">Required Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {requiredDocs.map((doc, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>{doc}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Dates */}
        <section id="dates" className={`mb-16 transition-all duration-1000 transform ${isVisible.dates ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-600 to-blue-600">Important Dates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Form Distribution Starts",
                date: "January 15, 2025",
                icon: Calendar
              },
              {
                title: "Submission Deadline",
                date: "March 31, 2025",
                icon: Clock
              },
              {
                title: "Interview Period",
                date: "April 1-15, 2025",
                icon: Calendar
              }
            ].map((date, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center mb-4">
                    <date.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{date.title}</h3>
                  <p className="text-gray-600">{date.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className={`mb-16 transition-all duration-1000 transform ${isVisible.faqs ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-600 to-cyan-600">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300"
                
              >
                <CardContent className="p-6" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{faq.question}</h3>
                    {openFaq === index ? 
                      <ChevronUp className="h-5 w-5 text-blue-600" /> : 
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    }
                  </div>
                  <div className={`mt-4 text-gray-600 transition-all duration-300 ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {faq.answer}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`mb-16 transition-all duration-1000 transform ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-cyan-600 to-purple-600">Need Help?</h2>
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p>admissions@excellenceacademy.edu</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <div className="text-center py-8">
          <p className="text-xl mb-4">Visit our campus to start your admission process!</p>
          <div className=" flex items-center justify-center">
            <div className='flex gap-5 flex-wrap justify-center items-center'>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              Admission Procedure
            </button>
            <button className=" md:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-16 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              Contact Us
            </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }

        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
    
    <Cta />

    <Footer />
    </div>
  );
};

export default AdmissionPage;