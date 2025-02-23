import React from 'react'

const Events = () => {
  return (
    <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#083D77] mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Sports Day",
                date: "March 15, 2025",
                time: "9:00 AM",
                location: "School Ground"
              },
              {
                title: "Science Exhibition",
                date: "March 20, 2025",
                time: "10:00 AM",
                location: "School Auditorium"
              },
              {
                title: "Parent-Teacher Meeting",
                date: "March 25, 2025",
                time: "2:00 PM",
                location: "Classrooms"
              }
            ].map((event, index) => (
              <div key={index} className="bg-[#EBEBD3] rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold text-[#083D77] mb-4">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Events