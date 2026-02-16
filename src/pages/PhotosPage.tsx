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
import PageHeader from '../components/PageHeader'

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
    <div className="pt-20 bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <PageHeader
        title="Photo Gallery"
        subtitle="Capturing sacred moments and divine celebrations."
        image={pic2}
        Icon={FaCamera}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(photo.src)}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer border border-orange-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
