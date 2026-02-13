import { useState } from 'react'
import { FaCamera, FaTimes } from 'react-icons/fa'
import heroImage from '../assets/hero.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'
import caro1 from '../assets/caro1.jpg'
import caro2 from '../assets/caro2.png'
import caro3 from '../assets/caro3.jpg'
import caro4 from '../assets/caro4.jpg'
import caro5 from '../assets/caro5.jpg'
import caro6 from '../assets/caro6.jpg'

function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photos = [
    { src: heroImage, title: 'Temple Exterior' },
    { src: pic2, title: 'Main Deity' },
    { src: pic3, title: 'Festival Celebration' },
    { src: pic4, title: 'Prayer Hall' },
    { src: pic6, title: 'Temple Architecture' },
    { src: pic7, title: 'Sacred Rituals' },
    { src: caro1, title: 'Community Gathering' },
    { src: caro2, title: 'Temple Grounds' },
    { src: caro3, title: 'Evening Aarti' },
    { src: caro4, title: 'Festival Procession' },
    { src: caro5, title: 'Temple Interior' },
    { src: caro6, title: 'Devotees' }
  ]

  return (
    <div className="pt-20">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Gallery" className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-amber-600/80 to-orange-600/90"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-8 animate-float">
            <FaCamera className="text-8xl text-amber-300" />
          </div>
          <h1 className="text-8xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 animate-gradient-shift" style={{backgroundSize: '200% auto'}}>
            Photo Gallery
          </h1>
          <p className="text-3xl text-white/90 max-w-3xl mx-auto font-light">
            Capturing sacred moments and divine celebrations
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(photo.src)}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer hover-lift"
              >
                <div className="aspect-square">
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold">{photo.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-orange-500 transition-colors">
            <FaTimes />
          </button>
          <img src={selectedImage} alt="Full size" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
        </div>
      )}
    </div>
  )
}

export default PhotosPage
