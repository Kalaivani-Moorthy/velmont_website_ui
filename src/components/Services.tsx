function Services() {
  const services = [
    { icon: '🙏', title: 'Abhishekam', desc: 'Sacred bathing ritual for Lord Murugan', price: '$51' },
    { icon: '🌺', title: 'Archana', desc: '108 names chanting with flowers', price: '$21' },
    { icon: '🔥', title: 'Homam', desc: 'Fire ritual for prosperity', price: '$101' },
    { icon: '💍', title: 'Wedding', desc: 'Traditional Hindu wedding ceremony', price: 'Contact' },
    { icon: '👶', title: 'Naming Ceremony', desc: 'Baby naming ritual', price: '$51' },
    { icon: '📿', title: 'Pooja Sponsorship', desc: 'Sponsor daily temple pooja', price: '$151' }
  ]

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>
            Temple Services
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#8B5E3C'}}></div>
          <p className="mt-6 text-lg" style={{color: '#2A2A2A'}}>Book your pooja and receive divine blessings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{border: '1px solid #E3A6A1'}}
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>{service.title}</h3>
              <p className="mb-4" style={{color: '#2A2A2A'}}>{service.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold" style={{color: '#8B5E3C'}}>{service.price}</span>
                <button className="px-6 py-2 rounded-full font-semibold transition-all duration-300" style={{backgroundColor: '#3E6F52', color: '#ffffff'}}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
