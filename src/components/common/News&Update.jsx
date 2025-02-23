import React from 'react'

const NewsAndUpdate = () => {
  return (
    <div className="py-16 bg-[#EBEBD3]">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-[#083D77] mb-12">Latest News & Updates</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Our Students Win National Science Competition",
            date: "February 15, 2025",
            image: "/api/placeholder/400/300"
          },
          {
            title: "New STEM Lab Opening Next Month",
            date: "February 10, 2025",
            image: "/api/placeholder/400/300"
          },
          {
            title: "Annual Cultural Festival Announcement",
            date: "February 5, 2025",
            image: "/api/placeholder/400/300"
          }
        ].map((news, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#083D77] mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.date}</p>
              <button className="text-[#DA4167] hover:text-[#F78764] font-semibold flex items-center">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  )
}

export default NewsAndUpdate