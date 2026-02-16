import { FaBaby } from 'react-icons/fa'
import { FaFire, FaHandsPraying, FaHeart, FaRing, FaSeedling } from 'react-icons/fa6'
import { GiTempleGate } from 'react-icons/gi'
import pic2 from '../assets/pic2.jpg'
import PageHeader from '../components/PageHeader'

function ServicesPage() {
  const services = [
    {
      Icon: FaHandsPraying,
      title: 'Abhishekam',
      price: '$51',
      desc: 'Sacred bathing ritual for Lord Murugan with milk, honey, ghee, and holy water',
      details: 'Abhishekam invokes blessings through mantra chanting and sacred offerings.'
    },
    {
      Icon: FaSeedling,
      title: 'Archana',
      price: '$21',
      desc: 'Chanting of 108 names of Lord Murugan with flower offerings',
      details: 'A focused prayer service for gratitude, protection, and spiritual clarity.'
    },
    {
      Icon: FaFire,
      title: 'Homam',
      price: '$101',
      desc: 'Fire ritual performed for prosperity, health, and removal of obstacles',
      details: 'A Vedic fire ceremony that purifies the space and energizes intention.'
    },
    {
      Icon: FaRing,
      title: 'Wedding Ceremony',
      price: 'Contact',
      desc: 'Traditional Hindu wedding ceremony conducted by experienced priests',
      details: 'Complete wedding services including pre-rituals, main ceremony, and blessings.'
    },
    {
      Icon: FaBaby,
      title: 'Naming Ceremony',
      price: '$51',
      desc: 'Traditional baby naming ceremony (Namakarana)',
      details: 'A sacred naming ritual for newborns with family prayers and temple blessings.'
    },
    {
      Icon: FaHeart,
      title: 'Pooja Sponsorship',
      price: '$151',
      desc: 'Sponsor daily temple pooja in your name or in memory of loved ones',
      details: 'Supports temple operations while offering meaningful devotion to your family.'
    }
  ]

  return (
    <div className="pt-20 bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <PageHeader
        title="Temple Services"
        subtitle="Book poojas and receive divine blessings for you and your loved ones."
        image={pic2}
        Icon={GiTempleGate}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-orange-700 mb-4">Pooja & Ritual Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose a service and connect directly with temple traditions in a guided, respectful way.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-300 to-amber-400">
                <div className="h-full bg-white/90 backdrop-blur rounded-3xl p-8 border border-orange-100 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
                  <service.Icon className="text-3xl text-orange-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-orange-700 font-bold text-lg mb-4">{service.price}</p>
                  <p className="text-gray-700 mb-3">{service.desc}</p>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{service.details}</p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-stone-800 to-orange-700 text-white rounded-full font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="bg-white/90 backdrop-blur rounded-3xl border border-orange-100 p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-orange-700 mb-4">Self-Service Archana</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer a unique opportunity for devotees to perform Self-Service Archana with guidance. This allows a deeper and more personal devotional experience while preserving sacred tradition.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-3xl border border-orange-100 p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-orange-700 mb-4">Visiting Hours</h3>
              <p className="text-gray-700 mb-4">Center is open every Sunday between 10:00 AM and 12:30 PM, plus posted special event days.</p>
              <p className="text-sm font-semibold text-orange-700">Note: The center is inside a ranch. Please follow posted signs and do not approach nearby houses.</p>
            </div>
          </div>

          <div className="mt-8 bg-white/90 backdrop-blur rounded-3xl border border-orange-100 p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-orange-700 mb-4">How to Book</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm md:text-base text-gray-700">
              <p>1. Select the service you want.</p>
              <p>2. Submit your details.</p>
              <p>3. Complete payment online or in person.</p>
              <p>4. Receive booking confirmation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
