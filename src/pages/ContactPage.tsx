import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import pic2 from '../assets/pic2.jpg'

function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pic2} alt="Contact" className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-amber-600/80 to-orange-600/90"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-8 animate-float">
            <FaEnvelope className="text-8xl text-amber-300" />
          </div>
          <h1 className="text-8xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 animate-gradient-shift" style={{backgroundSize: '200% auto'}}>
            Get In Touch
          </h1>
          <p className="text-3xl text-white/90 max-w-3xl mx-auto font-light">
            We're here to answer your questions and welcome you to our temple
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                    <FaMapMarkerAlt className="text-5xl text-orange-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-700 text-lg">VelMont Spiritual Center<br/>Bay Area, California<br/>United States</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                    <FaPhone className="text-5xl text-orange-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Phone</h3>
                    <p className="text-gray-700 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                    <FaEnvelope className="text-5xl text-orange-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Email</h3>
                    <p className="text-gray-700 text-lg">info@velmonttemple.org</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                    <FaClock className="text-5xl text-orange-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Temple Hours</h3>
                    <div className="text-gray-700 text-lg space-y-1">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 5:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
                <h2 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea rows={6} className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none resize-none"></textarea>
                  </div>

                  <button type="submit" className="group relative w-full py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl rounded-full shadow-2xl hover-lift overflow-hidden">
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
