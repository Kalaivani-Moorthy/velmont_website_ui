import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Donate', path: '/donate' },
    { name: 'Events', path: '/events' },
    { name: 'Photos', path: '/photos' },
    { name: 'Contact', path: '/contact' }
  ]

  if (isHomePage) {
    return (
      <nav className="absolute w-full z-50">
        <div className="max-w-7xl mx-auto py-5 flex items-center justify-end">
          <div
            className="flex items-center gap-2 px-6 py-3 rounded-full shadow-lg"
            style={{ background: 'linear-gradient(to right, rgba(255, 245, 230, 0.95), rgba(255, 184, 77, 0.3))' }}
          >
            <ul className="flex items-center gap-6 font-medium text-base">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`relative transition-all duration-300 whitespace-nowrap text-gray-800 hover:text-orange-600 ${
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

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="rounded-2xl border shadow-xl backdrop-blur-md px-4 md:px-6 py-3 bg-stone-900/75 border-orange-300/30">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-sm md:text-base tracking-wide font-semibold text-amber-100"
            >
              VelMont Temple
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-amber-100 hover:bg-white/10"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition duration-300 ${
                        isActive
                          ? 'bg-amber-400 text-stone-900'
                          : 'text-amber-100 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {isMenuOpen && (
            <ul className="md:hidden mt-3 grid gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition duration-300 ${
                        isActive
                          ? 'bg-amber-400 text-stone-900'
                          : 'text-amber-100 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
