import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'

function EventsPage() {
  const upcomingEvents = [
    { title: 'Thai Poosam Festival', date: 'January 25, 2025', time: '6:00 AM - 8:00 PM', location: 'Main Temple Hall', desc: 'Grand celebration with special abhishekam and procession', image: pic3 },
    { title: 'Panguni Uthiram', date: 'March 15, 2025', time: '5:00 AM - 9:00 PM', location: 'Temple Grounds', desc: 'Divine wedding ceremony of Lord Murugan', image: pic4 },
    { title: 'Weekly Annadhanam', date: 'Every Tuesday', time: '12:00 PM - 2:00 PM', location: 'Community Hall', desc: 'Free meals for all devotees and community members', image: pic3 },
    { title: 'Meditation & Yoga', date: 'Every Saturday', time: '7:00 AM - 9:00 AM', location: 'Meditation Hall', desc: 'Guided meditation and yoga sessions for spiritual wellness', image: pic4 }
  ]

  return (
    <div className="pt-20">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pic3} alt="Events" className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-amber-600/80 to-orange-600/90"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-8 animate-float">
            <FaCalendarAlt className="text-8xl text-amber-300" />
          </div>
          <h1 className="text-8xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 animate-gradient-shift" style={{backgroundSize: '200% auto'}}>
            Temple Events
          </h1>
          <p className="text-3xl text-white/90 max-w-3xl mx-auto font-light">
            Join us in celebrating sacred traditions and community gatherings
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-amber-600">Upcoming Events</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-500 rounded-full"></div>
              <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover-lift">
                  <div className="h-64 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{event.title}</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaCalendarAlt className="text-orange-500 text-xl" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaClock className="text-orange-500 text-xl" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaMapMarkerAlt className="text-orange-500 text-xl" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventsPage
