function Donate() {
  const donationOptions = [
    { amount: '$51', purpose: 'Daily Pooja' },
    { amount: '$101', purpose: 'Annadhanam' },
    { amount: '$251', purpose: 'Temple Maintenance' },
    { amount: '$501', purpose: 'Festival Sponsorship' }
  ]

  return (
    <section id="donate" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>
            Support Our Temple
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#8B5E3C'}}></div>
          <p className="mt-6 text-lg" style={{color: '#2A2A2A'}}>Your donations help maintain the temple and support community services</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {donationOptions.map((option, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center cursor-pointer"
              style={{border: '2px solid #E3A6A1'}}
            >
              <div className="text-4xl font-bold mb-3" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>{option.amount}</div>
              <p className="mb-4" style={{color: '#2A2A2A'}}>{option.purpose}</p>
              <button className="w-full py-3 rounded-full font-semibold transition-all duration-300" style={{backgroundColor: '#3E6F52', color: '#ffffff'}}>
                Donate
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>Custom Donation</h3>
          <form className="space-y-4">
            <input
              type="number"
              placeholder="Enter Amount"
              className="w-full p-4 rounded-xl border-2 transition-all duration-300"
              style={{borderColor: '#E8DCC8', color: '#2A2A2A'}}
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border-2 transition-all duration-300"
              style={{borderColor: '#E8DCC8', color: '#2A2A2A'}}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border-2 transition-all duration-300"
              style={{borderColor: '#E8DCC8', color: '#2A2A2A'}}
            />
            <button className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300" style={{backgroundColor: '#3E6F52', color: '#ffffff'}}>
              Proceed to Donate
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Donate
