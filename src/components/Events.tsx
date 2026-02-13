function Events() {
  const events = [
    { date: 'Jan 25', title: 'Thai Poosam', desc: 'Grand festival celebration with special poojas', time: '6:00 AM - 9:00 PM' },
    { date: 'Feb 14', title: 'Maha Shivaratri', desc: 'Night-long prayers and abhishekam', time: '6:00 PM - 6:00 AM' },
    { date: 'Mar 08', title: 'Panguni Uthiram', desc: 'Divine wedding celebration', time: '7:00 AM - 8:00 PM' },
    { date: 'Apr 14', title: 'Tamil New Year', desc: 'New year special prayers', time: '6:00 AM - 12:00 PM' }
  ]

  return (
    <section id="events" className="py-24" style={{backgroundColor: '#E8DCC8'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>
            Upcoming Events
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#8B5E3C'}}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex gap-6">
              <div className="text-center" style={{minWidth: '80px'}}>
                <div className="text-4xl font-bold" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>{event.date.split(' ')[1]}</div>
                <div className="text-lg" style={{color: '#8B5E3C'}}>{event.date.split(' ')[0]}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>{event.title}</h3>
                <p className="mb-3" style={{color: '#2A2A2A'}}>{event.desc}</p>
                <p className="text-sm" style={{color: '#8B5E3C'}}>⏰ {event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
