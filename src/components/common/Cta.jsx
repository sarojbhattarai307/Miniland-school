import React from 'react'

const Cta = () => {
  return (
    <div className="bg-[#DA4167] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our School?</h2>
          <p className="text-xl mb-8">Take the first step towards excellence in education</p>
          <div className="space-x-4">
            <button className="bg-white text-[#DA4167] hover:bg-[#F4D35E] hover:text-[#083D77] font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Visit Us
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#DA4167] font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
  )
}

export default Cta