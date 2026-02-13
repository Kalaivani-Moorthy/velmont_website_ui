import Hero from '../components/Hero'
import SectionDivider from '../components/SectionDivider'
import { FaOm, FaCalendarAlt, FaUsers, FaMountain, FaHeart, FaLeaf, FaEye, FaBullseye, FaStar, FaPrayingHands, FaSun, FaMoon, FaHandsHelping, FaDove, FaTree, FaGem } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import pic3 from '../assets/pic3.jpg'

function Home() {
  return (
    <div>
      <Hero />
      
      {/* Vision & Mission Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"></div>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, orange 0%, transparent 50%)'}}></div>
        
        {/* Decorative Icon Doodles */}
        <FaStar className="absolute top-10 left-10 text-orange-300 opacity-20 text-6xl" />
        <FaOm className="absolute top-20 right-20 text-amber-300 opacity-20 text-5xl" />
        <FaPrayingHands className="absolute bottom-20 left-20 text-orange-300 opacity-20 text-7xl" />
        <FaSun className="absolute bottom-10 right-10 text-amber-300 opacity-20 text-6xl" />
        <FaMoon className="absolute top-1/2 left-5 text-orange-200 opacity-15 text-4xl" />
        <FaStar className="absolute top-1/3 right-5 text-amber-200 opacity-15 text-5xl" />
        <FaHeart className="absolute bottom-1/3 left-1/4 text-orange-200 opacity-10 text-8xl" />
        <FaOm className="absolute top-1/4 right-1/4 text-amber-200 opacity-10 text-7xl" />
        <FaHandsHelping className="absolute top-40 left-1/3 text-orange-300 opacity-12 text-5xl" />
        <FaDove className="absolute bottom-40 right-1/3 text-amber-300 opacity-12 text-6xl" />
        <FaTree className="absolute top-2/3 left-10 text-orange-200 opacity-15 text-7xl" />
        <FaGem className="absolute bottom-1/4 right-20 text-amber-200 opacity-15 text-5xl" />
        <FaLeaf className="absolute top-1/2 right-1/3 text-orange-300 opacity-10 text-6xl" />
        <FaMountain className="absolute bottom-1/2 left-1/2 text-amber-200 opacity-8 text-9xl" />
        <FaStar className="absolute top-3/4 right-1/4 text-orange-200 opacity-12 text-4xl" />
        <FaHeart className="absolute top-1/3 left-1/2 text-amber-300 opacity-10 text-5xl" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Our Vision & Mission</h2>
            <SectionDivider />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-amber-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-white to-orange-50 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-orange-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-300/20 to-transparent rounded-tr-full"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <FaEye className="text-4xl text-white" />
                  </div>
                  <h3 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Our Vision</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Establish an open-space spiritual center where the community can embrace nature through hiking, yoga, meditation, and prayer. Our center harmoniously integrates local practices with global cultural values, creating a welcoming sanctuary for all.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-white to-amber-50 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-amber-200/50">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-amber-300/20 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-300/20 to-transparent rounded-tl-full"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <FaBullseye className="text-4xl text-white" />
                  </div>
                  <h3 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Our Mission</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to create a peaceful and inclusive open-space spiritual center that fosters a deep connection to nature and the spirit within. Through hiking, yoga, meditation, and prayer, we provide a sanctuary where individuals can rejuvenate, find inner peace, and embrace holistic well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awaken Divine Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
            🌄 Awaken the Divine Within 🌸
          </h2>
          <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
            Have you ever stood in an open space, where the sky kisses the earth and the breeze feels like a whisper from the divine? In places like VelMont, where nature embraces silence, the soul finds its voice.
          </p>
          <p className="text-3xl font-light italic text-orange-600 mb-8">
            🕉️ "The journey of the soul is not about finding something outside; it's about remembering what already lies within." ✨
          </p>
          <p className="text-xl text-gray-600 mb-6">
            💫 Pause. Breathe. Connect. 💫
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In the stillness of these sacred spaces, the eternal truth reveals itself. The gentle rustle of leaves becomes a mantra, the vastness of the sky mirrors the infinite within.
          </p>
        </div>
      </section>

      {/* Upcoming Event - Maha Shivaratri */}
      <section className="relative py-24 bg-gradient-to-br from-orange-600 to-amber-600 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-bold mb-4">Maha ShivaRatri</h2>
              <p className="text-3xl mb-6">Feb 15th 3-5 PM</p>
              <p className="text-2xl mb-8">Non-Stop Satsang</p>
              <p className="text-xl mb-6">
                Velmont Spiritual Center celebrating the first ever open space Maha Shivaratri satsang.
              </p>
              <p className="text-2xl font-light italic mb-8">
                If you sing SHIVA..... The space is open.
              </p>
              <p className="text-xl">
                Come to VelMont to experience the Maha Shivarathri at sunset!
              </p>
            </div>
            <div className="relative h-[500px] group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative h-full rounded-[3rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-500 border-4 border-white/20">
                <img src={pic3} alt="Maha Shivaratri" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-[3rem]"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-[3rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Hours */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-orange-600">Visiting Hours</h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            At velmont.org, we invite you to find peace and rejuvenation in our open space spiritual center. Every Sunday from 10:00 AM to 12:30 PM, we welcome visitors looking to explore this unique and sacred environment.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            For those who may find it challenging to hike, we've made arrangements—just inquire in our parking lot, and our caring volunteers will assist you according to our schedule.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <p className="text-base text-gray-700 font-semibold">
              NOTE: It is an open space center inside a Ranch, please follow the signs posted, do not go to any house in the area.
            </p>
          </div>
        </div>
      </section>

      {/* Core Initiatives */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600">
              Our Core Initiatives
            </h2>
            <SectionDivider />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { Icon: FaMountain, title: 'Nature Immersion & Outdoor Practices', desc: 'We offer hiking (Parikrama/Girivalam) and outdoor walking experiences that connect individuals with the healing power of nature.', color: 'orange' },
              { Icon: GiMeditation, title: 'Holistic Wellness Programs', desc: 'Regular yoga, meditation, and prayer sessions designed to promote physical, mental, and spiritual well-being.', color: 'amber' },
              { Icon: FaOm, title: 'Hindu Prayer Hall & Spiritual Sanctuary', desc: 'A dedicated Hindu Temple, a serene and sacred space for worship, reflection, and spiritual practice.', color: 'orange' },
              { Icon: FaCalendarAlt, title: 'Cultural Integration & Inclusivity', desc: 'We celebrate and integrate a wide range of cultural values and spiritual practices from around the world.', color: 'amber' },
              { Icon: FaUsers, title: 'Community Engagement & Education', desc: 'Educational workshops, retreats, and events that promote personal growth and environmental stewardship.', color: 'orange' },
              { Icon: FaLeaf, title: 'Sustainable & Eco-Conscious Environment', desc: 'Committed to preserving the natural environment through eco-conscious practices and land stewardship.', color: 'amber' }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-${item.color}-400 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className={`h-2 bg-gradient-to-r from-${item.color}-500 to-amber-500`}></div>
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${item.color}-100 to-amber-100 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.Icon className={`text-4xl text-${item.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                    <div className={`w-12 h-0.5 bg-gradient-to-r from-${item.color}-500 to-transparent mb-4`}></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-${item.color}-100/30 to-transparent rounded-bl-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Get Involved */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-5xl font-bold mb-8 text-orange-600">Upcoming Events</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">Vel Maral</h3>
                  <p className="text-lg text-gray-700">Every Sunday 11:30 AM</p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-amber-600 mb-2">Maha Shivaratri</h3>
                  <p className="text-lg text-gray-700">Feb 15th Sunday 3 PM to 5 PM</p>
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 text-white p-12 rounded-3xl shadow-2xl">
              <FaHeart className="text-6xl mb-6" />
              <h2 className="text-4xl font-bold mb-4">Help Us Grow</h2>
              <p className="text-xl mb-8">Your contribution makes a huge difference</p>
              <button className="bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Velmont Spiritual Center</h3>
          <div className="space-y-2 text-lg">
            <p>📧 contact@velmont.org</p>
            <p>📞 925-385-6225</p>
            <p>🏛️ Tax ID: 88-2380771</p>
            <p>📍 PCW4+37, Mountain House, CA 94514, United States</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
