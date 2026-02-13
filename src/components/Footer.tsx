function Footer() {
  return (
    <footer className="py-16" style={{backgroundColor: '#2A2A2A', color: '#E8DCC8'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{color: '#E3A6A1', fontFamily: 'var(--font-heading)'}}>Sri Murugan Temple</h3>
            <p className="mb-4">Experience divine blessings and spiritual peace in the sacred presence of Lord Murugan.</p>
            <p style={{color: '#8B5E3C'}}>வேல் வேல் முருகா</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{color: '#E3A6A1', fontFamily: 'var(--font-heading)'}}>Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Events', 'Donate'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors" style={{color: '#E8DCC8'}}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{color: '#E3A6A1', fontFamily: 'var(--font-heading)'}}>Contact</h4>
            <ul className="space-y-2">
              <li>📍 123 Temple Street</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@murugantemple.org</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{color: '#E3A6A1', fontFamily: 'var(--font-heading)'}}>Temple Hours</h4>
            <ul className="space-y-2">
              <li>Morning: 6:00 AM - 12:00 PM</li>
              <li>Evening: 5:00 PM - 9:00 PM</li>
              <li>Special Days: Tuesday & Friday</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{borderColor: '#8B5E3C'}}>
          <p>© 2024 Sri Murugan Temple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
