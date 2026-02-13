import { useEffect } from 'react'
import { FaOm } from 'react-icons/fa'
import { GiTempleGate } from 'react-icons/gi'
import pic3 from '../assets/pic3.jpg'

function ServicesPage() {
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

  const services = [
    {
      icon: '🙏',
      title: 'Abhishekam',
      price: '$51',
      desc: 'Sacred bathing ritual for Lord Murugan with milk, honey, ghee, and holy water',
      details: 'Abhishekam is performed to invoke divine blessings. The ritual includes chanting of mantras and offering of sacred items.'
    },
    {
      icon: '🌺',
      title: 'Archana',
      price: '$21',
      desc: 'Chanting of 108 names of Lord Murugan with flower offerings',
      details: 'A powerful prayer service where devotees can offer their prayers and receive blessings through the sacred chanting.'
    },
    {
      icon: '🔥',
      title: 'Homam',
      price: '$101',
      desc: 'Fire ritual performed for prosperity, health, and removal of obstacles',
      details: 'Homam is a Vedic fire ceremony that purifies the environment and brings positive energy to devotees.'
    },
    {
      icon: '💍',
      title: 'Wedding Ceremony',
      price: 'Contact',
      desc: 'Traditional Hindu wedding ceremony conducted by experienced priests',
      details: 'Complete wedding services including pre-wedding rituals, main ceremony, and post-wedding blessings.'
    },
    {
      icon: '👶',
      title: 'Naming Ceremony',
      price: '$51',
      desc: 'Traditional baby naming ceremony (Namakarana)',
      details: 'A sacred ceremony to name the newborn child with blessings from Lord Murugan.'
    },
    {
      icon: '📿',
      title: 'Pooja Sponsorship',
      price: '$151',
      desc: 'Sponsor daily temple pooja in your name or in memory of loved ones',
      details: 'Your sponsorship helps maintain daily temple operations and supports community services.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pic3} alt="Temple Services" className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-amber-600/80 to-orange-600/90"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-8 animate-float">
            <GiTempleGate className="text-8xl text-amber-300" />
          </div>
          <h1 className="text-8xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 animate-gradient-shift" style={{backgroundSize: '200% auto'}}>
            Temple Services
          </h1>
          <p className="text-3xl text-white/90 max-w-3xl mx-auto font-light">
            Book poojas and receive divine blessings for you and your loved ones
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, orange 0%, transparent 50%)'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="slide-in group relative" style={{transitionDelay: `${i * 100}ms`}}>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-amber-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-white to-orange-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-orange-200/50 h-full flex flex-col transform hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-300/20 to-transparent rounded-bl-full"></div>
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-2">{service.title}</h3>
                  <span className="text-xl font-bold text-orange-600 mb-4">{service.price}</span>
                  <p className="text-base text-gray-700 mb-3">{service.desc}</p>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{service.details}</p>
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Self Service Archana */}
            <div className="slide-in group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-white to-orange-50 p-10 rounded-3xl shadow-2xl border-2 border-orange-200/50 h-full transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-orange-300/20 to-transparent rounded-bl-full"></div>
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Self Service Archana</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-4"></div>
                <p className="text-base text-gray-700 leading-relaxed">
                  For the first time in the world, we are introducing a unique opportunity for devotees to perform Self-Service Archana, allowing you to directly engage in the sacred process of offering prayers and devotion. This groundbreaking concept empowers you to take charge of your spiritual experience, providing a deeper, more personal connection with the Divine.
                </p>
              </div>
            </div>

            {/* Visiting Hours */}
            <div className="slide-in group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-white to-amber-50 p-10 rounded-3xl shadow-2xl border-2 border-amber-200/50 h-full transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-bl from-amber-300/20 to-transparent rounded-br-full"></div>
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Visiting Hours</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4"></div>
                <p className="text-base text-gray-700 mb-4">
                  Center is open every Sunday between 10 AM and 12.30 PM, additionally on special days as posted in Upcoming events.
                </p>
                <p className="text-sm font-semibold text-orange-600">
                  Note: It is an open space center inside a ranch, please follow the signs posted, do not go to any house in the area.
                </p>
              </div>
            </div>
          </div>

          {/* Girivalam */}
          <div className="slide-in mt-8 group relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-amber-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white to-orange-50 p-10 rounded-3xl shadow-2xl border-2 border-orange-200/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-300/20 to-transparent rounded-tr-full"></div>
              <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Girivalam</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-4"></div>
              <div className="grid md:grid-cols-2 gap-6">
                <p className="text-base text-gray-700 leading-relaxed">
                  Girivalam refers to the practice of walking around a sacred hill, typically barefoot, as an act of devotion or worship. The term is derived from two words: <span className="font-semibold">giri</span> (hill) and <span className="font-semibold">valam</span> (circumambulation), meaning the act of circumambulating or walking around the hill.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Walking around the hill, which is believed to embody spiritual energy, is said to purify the body, mind, and soul. It is said that the act of GiriValam is a means of attaining inner peace and self-realization. Girivalam is not just a physical walk, but a deeply spiritual practice that connects participants with the divine.
                </p>
              </div>
            </div>
          </div>

          {/* How to Book */}
          <div className="slide-in mt-8 group relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white to-amber-50 p-10 rounded-3xl shadow-2xl border-2 border-amber-200/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-300/20 to-transparent rounded-tl-full"></div>
              <h3 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">How to Book</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6 mx-auto"></div>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div><p className="text-base text-gray-700">1. Select the service you wish to book</p></div>
                <div><p className="text-base text-gray-700">2. Fill out the booking form with your details</p></div>
                <div><p className="text-base text-gray-700">3. Make payment online or at the temple</p></div>
                <div><p className="text-base text-gray-700">4. Receive confirmation via email</p></div>
              </div>
              <p className="mt-6 text-center font-semibold text-orange-600">For special requests or group bookings, please contact us directly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
