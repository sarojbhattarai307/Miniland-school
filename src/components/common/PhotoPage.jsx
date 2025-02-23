import React from 'react'

const PhotoPage = () => {
  return (
    <section className="w-full min-h-screen bg-[#F78764] p-10">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#083D77] animate-fade-in">Photo Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Photo 1 - Navy theme */}
          <div className="md:col-span-2 lg:col-span-2  relative overflow-hidden rounded-lg shadow-xl animate-fade-slide-up bg-[#083D77]" 
               style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="aspect-w-4 aspect-h-3 p-3">
              <img
                src="/images/newton6.jpg"
                alt="Gallery image 1"
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500 rounded-lg hover:rotate-2"
              />
            </div>
          </div>

          {/* Photo 2 - Pink theme */}
          <div className="relative overflow-hidden rounded-lg shadow-xl animate-fade-slide-up bg-[#DA4167]"
               style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="aspect-w-4 aspect-h-3 p-3">
              <img
                src="/images/newton5.jpg"
                alt="Gallery image 2"
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500 rounded-lg hover:-rotate-2"
              />
            </div>
          </div>

          {/* Photo 3 - Yellow theme */}
          <div className="md:row-span-2 relative overflow-hidden rounded-lg shadow-xl animate-fade-slide-up bg-[#F4D35E]"
               style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="aspect-w-4 aspect-h-3 p-3">
              <img
                src="/images/newton4.jpg"
                alt="Gallery image 3"
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500 rounded-lg hover:rotate-2"
              />
            </div>
          </div>


          {/* Photo 5 - Navy theme */}
          <div className="relative overflow-hidden rounded-lg shadow-xl animate-fade-slide-up bg-[#083D77]"
               style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="aspect-w-4 aspect-h-3 p-3">
              <img
                src="/images/newton1.jpeg"
                alt="Gallery image 5"
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500 rounded-lg hover:rotate-2"
              />
            </div>
          </div>

          {/* Photo 6 - Pink theme */}
          <div className="md:col-span-2 relative overflow-hidden rounded-lg shadow-xl animate-fade-slide-up bg-[#DA4167]"
               style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div className="aspect-w-4 aspect-h-3 p-3">
              <img
                src="/images/newton.jpg"
                alt="Gallery image 6"
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500 rounded-lg hover:-rotate-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotoPage