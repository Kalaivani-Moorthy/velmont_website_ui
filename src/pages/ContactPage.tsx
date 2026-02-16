import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import pic2 from '../assets/pic2.jpg'
import PageHeader from '../components/PageHeader'

function ContactPage() {
  return (
    <div className="pt-20 bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <PageHeader
        title="Get In Touch"
        subtitle="We're here to answer your questions and welcome you to our temple."
        image={pic2}
        Icon={FaEnvelope}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-stone-800 via-orange-700 to-amber-700">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-xl opacity-15 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white/85 backdrop-blur p-8 rounded-2xl shadow-xl border border-orange-100">
                    <FaMapMarkerAlt className="text-5xl text-orange-600 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-700 text-lg">VelMont Spiritual Center<br/>Bay Area, California<br/>United States</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-xl opacity-15 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white/85 backdrop-blur p-8 rounded-2xl shadow-xl border border-orange-100">
                    <FaPhone className="text-5xl text-orange-600 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Phone</h3>
                    <p className="text-gray-700 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-xl opacity-15 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white/85 backdrop-blur p-8 rounded-2xl shadow-xl border border-orange-100">
                    <FaEnvelope className="text-5xl text-orange-600 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Email</h3>
                    <p className="text-gray-700 text-lg">info@velmonttemple.org</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-xl opacity-15 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white/85 backdrop-blur p-8 rounded-2xl shadow-xl border border-orange-100">
                    <FaClock className="text-5xl text-orange-600 mb-4" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-orange-700 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/90 backdrop-blur rounded-3xl p-12 shadow-2xl border border-orange-100">
                <h2 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-orange-700">Send Us a Message</h2>
                
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

                  <button type="submit" className="group relative w-full py-5 bg-gradient-to-r from-stone-800 to-orange-700 text-white font-bold text-xl rounded-full shadow-2xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-orange-200/60">
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-stone-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
