import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Donate', path: '/donate' },
    { name: 'Events', path: '/events' },
    { name: 'Photos', path: '/photos' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={isHomePage ? "absolute w-full z-50" : "fixed w-full z-50"}>
      <div className={`max-w-7xl mx-auto py-5 flex items-center ${
        isHomePage ? 'justify-end' : 'justify-center'
      }`}>
        <div className={`flex items-center gap-2 px-6 py-3 rounded-full ${
          isHomePage 
            ? 'shadow-lg' 
            : 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-xl'
        }`} style={isHomePage ? {background: 'linear-gradient(to right, rgba(255, 245, 230, 0.95), rgba(255, 184, 77, 0.3))'} : {}}>
          <ul className="flex items-center gap-6 font-medium text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative transition-all duration-300 whitespace-nowrap ${
                    isHomePage 
                      ? 'text-gray-800 hover:text-orange-600' 
                      : 'text-white hover:text-orange-100'
                  } ${
                    location.pathname === item.path ? 'font-bold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
