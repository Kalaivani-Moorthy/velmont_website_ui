import { useState } from 'react'
import { FaHeart, FaHandHoldingHeart, FaUtensils, FaBook, FaLeaf, FaCheckCircle } from 'react-icons/fa'
import { GiTempleGate } from 'react-icons/gi'
import pic2 from '../assets/pic2.jpg'

function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const donationTiers = [
    { amount: 51, title: 'Daily Pooja', icon: GiTempleGate, desc: 'Support daily worship rituals', color: 'from-orange-400 to-amber-500' },
    { amount: 101, title: 'Annadhanam', icon: FaUtensils, desc: 'Sponsor free meals', color: 'from-amber-400 to-orange-500' },
    { amount: 251, title: 'Temple Care', icon: FaLeaf, desc: 'Maintain sacred spaces', color: 'from-orange-400 to-amber-500' },
    { amount: 501, title: 'Festival', icon: FaHeart, desc: 'Celebrate traditions', color: 'from-amber-500 to-orange-600' },
    { amount: 1001, title: 'Education', icon: FaBook, desc: 'Support learning programs', color: 'from-orange-500 to-amber-600' },
    { amount: 2501, title: 'Major Sponsor', icon: FaHandHoldingHeart, desc: 'Transform lives', color: 'from-amber-500 to-orange-600' }
  ]

  const impactStats = [
    { number: '500+', label: 'Meals Served Daily', icon: FaUtensils },
    { number: '50+', label: 'Festivals Celebrated', icon: FaHeart },
    { number: '1000+', label: 'Devotees Supported', icon: FaHandHoldingHeart }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pic2} alt="Temple" className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-amber-600/80 to-orange-600/90"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-8 animate-float">
            <FaHandHoldingHeart className="text-8xl text-amber-300" />
          </div>
          <h1 className="text-8xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 animate-gradient-shift" style={{backgroundSize: '200% auto'}}>
            Make a Difference
          </h1>
          <p className="text-3xl text-white/90 max-w-3xl mx-auto font-light">
            Your generosity helps us serve the community and preserve sacred traditions
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {impactStats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl hover-lift text-center">
                  <stat.icon className="text-6xl text-orange-500 mx-auto mb-4 animate-bounce-subtle" style={{animationDelay: `${i * 0.2}s`}} />
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-2">{stat.number}</div>
                  <p className="text-xl text-gray-700 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600">Choose Your Impact</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-500 rounded-full"></div>
              <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600">Select a donation amount that resonates with your heart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {donationTiers.map((tier, i) => (
              <div
                key={i}
                onClick={() => setSelectedAmount(tier.amount)}
                className={`group relative cursor-pointer transition-all duration-300 ${selectedAmount === tier.amount ? 'scale-105' : 'hover:scale-105'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all ${selectedAmount === tier.amount ? 'ring-4 ring-orange-500' : ''}`}>
                  {selectedAmount === tier.amount && (
                    <div className="absolute -top-3 -right-3">
                      <FaCheckCircle className="text-5xl text-orange-500" />
                    </div>
                  )}
                  <tier.icon className={`text-6xl mb-4 bg-gradient-to-br ${tier.color} bg-clip-text text-transparent`} />
                  <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">${tier.amount}</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{tier.title}</h3>
                  <p className="text-gray-600">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-black mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Complete Your Donation</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Donation Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">$</span>
                    <input
                      type="number"
                      value={selectedAmount || customAmount}
                      onChange={(e) => {
                        setSelectedAmount(null)
                        setCustomAmount(e.target.value)
                      }}
                      placeholder="Enter amount"
                      className="w-full pl-12 pr-4 py-4 text-xl font-bold rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none"
                    />
                  </div>
                </div>

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
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number (Optional)</label>
                  <input type="tel" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none resize-none"></textarea>
                </div>

                <button type="submit" className="group relative w-full py-5 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-xl rounded-full shadow-2xl hover-lift overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <FaHeart className="text-2xl" />
                    Donate Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Your donation is tax-deductible. You will receive a receipt via email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Why Your Support Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Preserve Sacred Traditions', desc: 'Help maintain ancient rituals and cultural practices for future generations' },
              { title: 'Feed the Community', desc: 'Support our free meal program serving hundreds daily' },
              { title: 'Educational Programs', desc: 'Fund spiritual education and cultural workshops for all ages' },
              { title: 'Temple Maintenance', desc: 'Keep our sacred spaces beautiful and welcoming for all devotees' }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DonatePage
