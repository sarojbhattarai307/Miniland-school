'use client'

import React from 'react'
import {Phone, Mail, MapPin,Youtube, Facebook, Instagram, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#083D77] text-white">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* School Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4">SCHOOL LOGO</h3>
          <p className="text-gray-300">Empowering minds, building futures, and creating tomorrow's leaders through excellence in education.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-[#F4D35E] transition duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-[#F4D35E] transition duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-[#F4D35E] transition duration-300">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-[#F4D35E] transition duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-[#F4D35E] transition duration-300">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#F4D35E] transition duration-300">Admissions</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#F4D35E] transition duration-300">Academics</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#F4D35E] transition duration-300">School Life</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#F4D35E] transition duration-300">News & Events</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#F4D35E] transition duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 mt-1 text-[#F4D35E]" />
              <span className="text-gray-300">123 Education Street, Academic District, City, State 12345</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-[#F4D35E]" />
              <span className="text-gray-300">+1 (234) 567-890</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-[#F4D35E]" />
              <span className="text-gray-300">info@school.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and news.</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-[#F4D35E]"
            />
            <button className="w-full bg-[#DA4167] hover:bg-[#F78764] text-white px-4 py-2 rounded-full transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 School Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-[#F4D35E] text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-[#F4D35E] text-sm">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-[#F4D35E] text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer