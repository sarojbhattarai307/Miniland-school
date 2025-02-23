'use client'

import React, {useEffect, useState} from 'react'
import { Menu, X, BadgeCheckIcon,ChevronDown, Phone, Mail, MapPin} from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#DA4167] text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center hover:text-[#F4D35E]">
                <Phone className="w-4 h-4 mr-1" /> +1 (234) 567-890
              </a>
              <a href="mailto:info@school.com" className="flex items-center hover:text-[#F4D35E]">
                <Mail className="w-4 h-4 mr-1" /> info@school.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/visit-us" className="hover:text-[#F4D35E] flex gap-1 items-center"><MapPin size={16}/>find us</Link>
              <Link href="#" className="hover:text-[#F4D35E] flex gap-1 items-center"><BadgeCheckIcon size={16}/> our features</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 bg-[#083D77] z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="text-white text-2xl font-bold">SCHOOL</span>
                <span className="text-[#F4D35E] text-2xl font-bold">LOGO</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-[#F4D35E] transition duration-300">Home</Link>
              
              {/* About Dropdown */}
              <div className="relative group">
                <Link href='/about-us'>
                <button className="flex items-center text-white hover:text-[#F4D35E] transition duration-300">
                About Us</button>
                </Link>
              </div>

              {/* Academics Dropdown */}
              <div className="relative group">
                
                <button className="flex items-center text-white hover:text-[#F4D35E] transition duration-300">
                  Academics <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              
                <div className="absolute left-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div className="py-2">
                    <Link href="/academics/academic-curriculum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">Academic Curriculum</Link>
                    <Link href="/academics/admission-enrollment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">Admission & Enrollment</Link>
                    <Link href="/academics/extra-curricular-activities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">Extra-Curricular Activities</Link>
                  </div>
                </div>
              </div>

              <Link href="/events" className="text-white hover:text-[#F4D35E] transition duration-300">Events</Link>
              
              {/* More Dropdown */}
              <div className="relative group">
                
                <button className="flex items-center text-white hover:text-[#F4D35E] transition duration-300">
                  More <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                <div className="absolute right-[-30px] w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div className="py-2">
                    <Link href="/more/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">our team</Link>
                    <Link href="/more/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">Gallery</Link>
                    <Link href="/more/alumni" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">Alumni</Link>
                    <Link href="/more/school-policies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">School Policies</Link>
                    <Link href="/more/school-facilities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">School Facilities</Link>
                    <Link href="/more/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">FAQS</Link>
                    <Link href="/more/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DA4167] hover:text-white">Contact Us</Link>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
              <button className="bg-[#DA4167] hover:bg-[#F78764] text-white px-4 py-2 rounded-full transition duration-300">
                  FAQS
                </button>
                <button className="bg-[#DA4167] hover:bg-[#F78764] text-white px-4 py-2 rounded-full transition duration-300">
                  Contact us
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
               onClick={() =>{
                setIsOpen(!isOpen);
                
               } } className="text-white hover:text-[#F4D35E]">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className=''>
          <div className="lg:hidden absolute bg-[#083D77] border-t border-[#F4D35E]/20 right-0">
            <div className="min-w-52 md:min-w-72 flex flex-col px-10  pt-2 pb-3 space-y-1">
<Link href='/'><button className="block px-3 py-2 text-white hover:bg-[#DA4167] rounded-md">Home</button></Link>
<Link href='/about-us'><button className="block px-3 py-2 text-white hover:bg-[#DA4167] rounded-md">About Us</button></Link>
<div>
<button onClick={()=> setAcademicOpen(!academicOpen)} className=" flex items-center px-3 py-2 text-white hover:bg-[#DA4167] rounded-md">Academics<ChevronDown className="ml-1 w-4 h-4" /></button>

{academicOpen && (

  <div>
                  <div className="py-2">
                    <Link href="/academics/academic-curriculum" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">Academic Curriculum</Link>
                    <Link href="/academics/admission-enrollment" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">Admission & Enrollment</Link>
                    <Link href="/academics/extra-curricular-activities" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">Extra-Curricular Activities</Link>
                  </div>
                </div>
  
)}

    
  

</div>
              <button className="block px-3 py-2 text-white hover:bg-[#DA4167] rounded-md">Events</button>

<div>
<button onClick={()=> setMoreOpen(!moreOpen)} className=" flex items-center px-3 py-2 text-white hover:bg-[#DA4167] rounded-md">More<ChevronDown className="ml-1 w-4 h-4" /></button>

{moreOpen && (

  <div>
                  <div className="py-2">
<Link href="/more/our-team" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">our team</Link>
                    <Link href="/more/gallery" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">Gallery</Link>
                    <Link href="/more/alumni" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">Alumni</Link>
                    <Link href="/more/school-policies" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">School Policies</Link>
                    <Link href="/more/school-facilities" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">School Facilities</Link>
                    <Link href="/more/faq" className="block px-4 py-2 text-sm text-white hover:bg-[#DA4167] hover:text-white">FAQS</Link>
                  </div>
                </div>
  
)}

    
  

</div>
     
              <div className="pt-4">
                <Link href='/more/contact-us'>
                <button className="w-full bg-[#DA4167] hover:bg-[#F78764] text-white px-4 py-2 rounded-full transition duration-300">
                  Contact Us
                </button>
                </Link>
              </div>
            </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar