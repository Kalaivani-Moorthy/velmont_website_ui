function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-500 rounded-full"></div>
      <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
      <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
      <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
      <div className="h-1 w-20 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
    </div>
  )
}

export default SectionDivider
