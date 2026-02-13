import logoTemple from '../assets/logo_temple.png'
import pic7 from '../assets/pic7.png'

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-red-900/30 to-amber-900/40"></div>
      <div className="absolute inset-0">
        <img src={pic7} alt="Temple" className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]" />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-end px-6 py-20">
          <div className="text-center space-y-8 max-w-2xl mr-12">
            <div className="inline-block">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-white/95 flex items-center justify-center">
                  <img src={logoTemple} alt="Temple Logo" className="w-32 h-32 object-contain" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 animate-gradient-shift drop-shadow-2xl" style={{backgroundSize: '200% auto'}}>
                OM MURUGA
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-amber-300 animate-flicker drop-shadow-lg">
                வேல் வேல் முருகா
              </p>
            </div>

            <p className="text-xl text-white/90 font-light tracking-wide">
              Experience divine blessings and spiritual peace at Sri Murugan Temple
            </p>

            <div className="flex flex-wrap gap-6 justify-center pt-4">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-base rounded-full shadow-2xl hover-lift overflow-hidden">
                <span className="relative z-10">Book Pooja Online</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-base rounded-full border-2 border-amber-400 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Temple Timings
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #FF6B35, #FF9933, #FFB84D)'}}>
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'}}></div>
          <div className="relative py-5 flex items-center gap-4 px-6">
            <div className="flex items-center gap-3 bg-white/25 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex-shrink-0">
              <span className="text-3xl animate-bounce-subtle">📢</span>
              <span className="text-white font-bold text-lg">Latest Updates</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex gap-12 animate-[marquee_35s_linear_infinite] text-lg">
                <span className="text-white font-medium whitespace-nowrap">🔔 Special Abhishekam - Friday 6:00 AM</span>
                <span className="text-white font-medium whitespace-nowrap">⭐ Thai Poosam Festival - Jan 25, 2025</span>
                <span className="text-white font-medium whitespace-nowrap">🎉 Free Annadhanam Every Tuesday</span>
                <span className="text-white font-medium whitespace-nowrap">🪔 Evening Aarti Daily at 7:00 PM</span>
                <span className="text-white font-medium whitespace-nowrap">📿 New Devotee Registration Open</span>
                <span className="text-white font-medium whitespace-nowrap">🔔 Special Abhishekam - Friday 6:00 AM</span>
                <span className="text-white font-medium whitespace-nowrap">⭐ Thai Poosam Festival - Jan 25, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
