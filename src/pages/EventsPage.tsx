import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import pic2 from '../assets/pic2.jpg'
import pic4 from '../assets/pic4.jpg'
import PageHeader from '../components/PageHeader'

function EventsPage() {
  const upcomingEvents = [
    { title: 'Thai Poosam Festival', date: 'January 25, 2025', time: '6:00 AM - 8:00 PM', location: 'Main Temple Hall', desc: 'Grand celebration with special abhishekam and procession', image: pic2 },
    { title: 'Panguni Uthiram', date: 'March 15, 2025', time: '5:00 AM - 9:00 PM', location: 'Temple Grounds', desc: 'Divine wedding ceremony of Lord Murugan', image: pic4 },
    { title: 'Weekly Annadhanam', date: 'Every Tuesday', time: '12:00 PM - 2:00 PM', location: 'Community Hall', desc: 'Free meals for all devotees and community members', image: pic2 },
    { title: 'Meditation & Yoga', date: 'Every Saturday', time: '7:00 AM - 9:00 AM', location: 'Meditation Hall', desc: 'Guided meditation and yoga sessions for spiritual wellness', image: pic4 }
  ]

  return (
    <div className="pt-20 bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <PageHeader
        title="Temple Events"
        subtitle="Join us in celebrating sacred traditions and community gatherings."
        image={pic2}
        Icon={FaCalendarAlt}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-stone-800 via-orange-700 to-amber-700">Upcoming Events</h2>
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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur rounded-3xl overflow-hidden shadow-xl border border-orange-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="h-64 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-orange-700">{event.title}</h3>
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
