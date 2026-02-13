import { useEffect, useState } from 'react'
import { FaHeart, FaHandsHelping, FaStar, FaMountain, FaOm, FaGlobeAmericas, FaBook, FaSeedling, FaPrayingHands, FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import heroImage from '../assets/hero.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

import pic8 from '../assets/pic8.jpg'
import caro1 from '../assets/caro1.jpg'
import caro2 from '../assets/caro2.png'
import caro3 from '../assets/caro3.jpg'
import caro4 from '../assets/caro4.jpg'
import caro5 from '../assets/caro5.jpg'
import caro6 from '../assets/caro6.jpg'
import caro7 from '../assets/caro7.jpg'


function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselImages = [heroImage, pic3, caro1, caro2, caro3, caro4, caro5, caro6

  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-active')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.slide-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={carouselImages[currentSlide]} alt="About VelMont" className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-amber-600/80 to-orange-600/90"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-8 animate-float">
            <FaOm className="text-8xl text-amber-300" />
          </div>
          <h1 className="text-8xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 animate-gradient-shift" style={{backgroundSize: '200% auto'}}>
            About VelMont
          </h1>
          <p className="text-3xl text-white/90 max-w-3xl mx-auto font-light">
            Building bridges of hope through spiritual, cultural, and educational enrichment
          </p>
        </div>
      </section>

      {/* Welcome Section - Image Left */}
      <section className="py-24 bg-gradient-to-br from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in group">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img src={caro7} alt="Temple Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="slide-in">
              <div className="inline-block mb-4">
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Welcome to VelMont Spiritual Center</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed border-l-4 border-orange-500 pl-6">
                A Non-Profit Organization in the Bay Area, California, dedicated to cultivating a space for spiritual, cultural, educational, and meditative enrichment.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in creating a welcoming sanctuary where people from all backgrounds can come together to explore their spiritual journey, connect with nature, and build meaningful community bonds.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to provide a space that honors tradition while embracing modern spiritual practices, fostering growth, healing, and connection for all who enter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Full Width Background */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img src={pic8} alt="Vision" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 via-red-900/60 to-amber-900/45"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <FaStar className="text-7xl mx-auto mb-8" />
          <h2 className="text-6xl font-bold mb-10">Our Vision</h2>
          <p className="text-2xl leading-relaxed max-w-5xl mx-auto">
            Establish an open-space spiritual center where the community can embrace nature through hiking, yoga, meditation and prayer. Our center harmoniously integrates local practices with global cultural values, creating a welcoming sanctuary for all.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, orange 0%, transparent 50%)'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { number: '7,000+', label: 'Lives Touched', subtitle: 'Every Hand Helps Us Grow', Icon: FaHeart },
              { number: '200+', label: 'Volunteers', subtitle: 'Uniting Hearts and Actions', Icon: FaHandsHelping },
              { number: '15+', label: 'Projects Completed', subtitle: 'Milestones of Hope and Change', Icon: FaStar }
            ].map((stat, i) => (
              <div key={i} className="slide-in group relative" style={{transitionDelay: `${i * 150}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                  <stat.Icon className="text-6xl text-orange-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-3">{stat.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Header */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-amber-600">Our Initiatives</h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-500 rounded-full"></div>
            <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="h-2 w-2 bg-red-500 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600">Discover the programs and activities that make VelMont a unique spiritual sanctuary</p>
        </div>
      </section>

      {/* Initiative 1 - Image Right */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 shadow-lg">
                <FaMountain className="text-4xl text-white" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-6">Nature Immersion & Outdoor Practices</h3>
              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-6">
                We offer hiking (Parikrama/Girivalam) and outdoor walking experiences that connect individuals with the healing power of nature. Through immersive walks, we foster mindfulness and provide a space for reflection, encouraging a deeper relationship with the natural world.
              </p>
            </div>
            <div className="slide-in group">
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <img src={pic3} alt="Nature" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiative 2 - Image Left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in order-2 lg:order-1 group">
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <img src={caro2} alt="Meditation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              </div>
            </div>
            <div className="slide-in order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 shadow-lg">
                <GiMeditation className="text-4xl text-white" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-6">Holistic Wellness Programs</h3>
              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-6">
                Our center will host regular yoga, meditation, and prayer sessions, designed to promote physical, mental, and spiritual well-being. These practices are rooted in both local traditions and global spiritual teachings, allowing participants to explore diverse paths to balance and serenity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiative 3 - Image Right */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 shadow-lg">
                <FaOm className="text-4xl text-white" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-6">Hindu Prayer Hall & Spiritual Sanctuary</h3>
              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-6">
                At the heart of our center is a dedicated Hindu Temple, a serene and sacred space for worship, reflection, and spiritual practice. This hall honors the rich spiritual heritage of Hinduism, offering regular prayers, rituals, and teachings that invite individuals to connect with the divine through traditional and modern practices.
              </p>
            </div>
            <div className="slide-in group">
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
                <img src={caro7} alt="Temple" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Initiatives - Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { Icon: FaGlobeAmericas, title: 'Cultural Integration & Inclusivity', desc: 'We actively celebrate and integrate a wide range of cultural values and spiritual practices from around the world. By blending these teachings with our local traditions, we create a welcoming environment where people from all walks of life feel empowered to deepen their spiritual journey.' },
              { Icon: FaBook, title: 'Community Engagement & Education', desc: 'Our center will be a hub for community outreach, offering educational workshops, retreats, and events that promote personal growth, environmental stewardship, and global consciousness. We encourage dialogue and collaboration, helping to build a supportive community rooted in shared values and mutual respect.' },
              { Icon: FaSeedling, title: 'Sustainable & Eco-Conscious Environment', desc: 'We are committed to preserving and honoring the natural environment surrounding our center. Through eco-conscious building practices, sustainable energy use, and land stewardship, we create a space that reflects our dedication to living in harmony with nature.' }
            ].map((item, i) => (
              <div key={i} className="slide-in bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <item.Icon className="text-6xl text-orange-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Gallery</h2>
            <p className="text-xl text-gray-600">Explore our spiritual sanctuary through images</p>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            {carouselImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FaChevronLeft className="text-2xl text-orange-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FaChevronRight className="text-2xl text-orange-600" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FaPrayingHands className="text-7xl mx-auto mb-8" />
          <p className="text-3xl leading-relaxed font-light mb-10">
            Together, these initiatives form the foundation of our spiritual center, offering a sanctuary for reflection, growth, and collective healing for all who seek to reconnect with themselves, each other, and the world around them.
          </p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Join Our Journey
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
