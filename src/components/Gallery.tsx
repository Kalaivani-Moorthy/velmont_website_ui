function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600',
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=600',
    'https://images.unsplash.com/photo-1609619385002-f40f7e457a9c?w=600',
    'https://images.unsplash.com/photo-1604608672516-f1b9b1a4a0e5?w=600',
    'https://images.unsplash.com/photo-1590935216541-1b11e0eedf1e?w=600',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600',
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=600',
    'https://images.unsplash.com/photo-1609619385002-f40f7e457a9c?w=600'
  ]

  return (
    <section id="photos" className="py-24" style={{backgroundColor: '#E8DCC8'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4" style={{color: '#3E6F52', fontFamily: 'var(--font-heading)'}}>
            Temple Gallery
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#8B5E3C'}}></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-square"
            >
              <img
                src={photo}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
