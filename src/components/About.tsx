function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 text-temple-green">
            About Lord Murugan
          </h2>
          <div className="h-1 w-24 mx-auto bg-temple-clay rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-temple-green to-temple-pink rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800" 
                alt="Lord Murugan" 
                className="rounded-2xl w-full transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-temple-charcoal leading-relaxed backdrop-blur-sm bg-white/50 p-6 rounded-2xl shadow-lg">
              Lord Murugan, also known as Kartikeya, is the Hindu god of war and victory. He is the son of Lord Shiva and Goddess Parvati, representing courage, wisdom, and divine grace.
            </p>
            <p className="text-lg text-temple-charcoal leading-relaxed backdrop-blur-sm bg-white/50 p-6 rounded-2xl shadow-lg">
              Worshipped primarily in South India, his six abodes (Arupadaiveedu) are sacred pilgrimage sites that attract millions of devotees.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: '🪔', title: 'Daily Poojas', desc: 'Morning & Evening' },
                { icon: '🎵', title: 'Bhajans', desc: 'Devotional Songs' },
                { icon: '📿', title: 'Festivals', desc: 'Special Events' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 text-center group cursor-pointer border border-temple-pink/30"
                >
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                  <h3 className="font-bold text-temple-clay mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-temple-charcoal/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
