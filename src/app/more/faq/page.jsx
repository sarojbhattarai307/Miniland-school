'use client'
import React, { useState } from 'react';
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Cta from '../../../components/common/Cta'
import { ChevronDown, Mail, Send, Loader2, Check, Github, Linkedin, Twitter } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const faqs = [
    {
      question: "What programs do you offer?",
      answer: "We offer a wide range of programs including undergraduate, graduate, and professional development courses across various disciplines."
    },
    {
      question: "How do I apply for admission?",
      answer: "The admission process can be completed online through our portal. You'll need to submit your academic records, test scores, and other required documents."
    },
    {
      question: "What financial aid options are available?",
      answer: "We offer various financial aid options including scholarships, grants, and student loans. Our financial aid office can help you explore all available options."
    },
    {
      question: "What are the campus housing options?",
      answer: "We provide both on-campus dormitories and off-campus housing assistance. Our housing department can help you find the best option for your needs."
    },
    {
      question: "How can I get involved in campus activities?",
      answer: "There are numerous student organizations, clubs, and events you can participate in. Visit our student life office or check our online portal for current opportunities."
    }
  ];

  const emptyInfo = () =>{
   
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    emptyInfo()
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
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Find answers to common questions about our programs, admissions, and campus life.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-[#083D77]">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#DA4167] transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === index ? 'py-4' : 'py-0 h-0'
                }`}
              >
                <p className={`text-gray-600 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#083D77] text-center mb-8">Still Have Questions?</h2>
          <div className="bg-[#EBEBD3] rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#083D77] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#DA4167] focus:border-transparent transition-all duration-300"
                  onChange={(e)=> setName(e.target.value)}
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
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#DA4167] focus:border-transparent transition-all duration-300"
                  onChange={(e)=> setEmail(e.target.value)}
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
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#DA4167] focus:border-transparent transition-all duration-300"
                  onChange={(e)=> setSubject(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#083D77] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#DA4167] focus:border-transparent transition-all duration-300"
                  onChange={(e)=> setMessage(e.target.value)}
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

export default FAQPage;