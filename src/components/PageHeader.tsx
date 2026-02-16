import type { IconType } from 'react-icons'

type PageHeaderProps = {
  title: string
  subtitle: string
  image: string
  Icon: IconType
}

function PageHeader({ title, subtitle, image, Icon }: PageHeaderProps) {
  return (
    <section className="relative min-h-[56vh] flex items-center overflow-hidden border-b border-orange-200/50">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/90 via-orange-950/70 to-amber-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.25),transparent_35%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6">
            <Icon className="text-amber-300 text-xl" />
            <span className="text-xs tracking-[0.2em] uppercase text-amber-100 font-semibold">VelMont Spiritual Center</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight">{title}</h1>
          <p className="text-lg md:text-2xl text-amber-50/90 font-light leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default PageHeader
