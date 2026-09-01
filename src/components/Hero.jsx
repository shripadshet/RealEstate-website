import { Search, MapPin, BedDouble, Bath } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-secondary font-semibold text-lg mb-4 tracking-wide">
            PREMIUM REAL ESTATE
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Find Your Dream{' '}
            <span className="text-secondary">Home</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Discover exceptional properties in the most desirable locations.
            Your perfect home awaits with Shripad Estates.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-medium" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-dark placeholder-gray-medium focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-medium" />
                <select className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-dark appearance-none focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option>All Locations</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Miami</option>
                  <option>Chicago</option>
                </select>
              </div>
              <div className="relative">
                <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-medium" />
                <select className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-dark appearance-none focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option>Bedrooms</option>
                  <option>1+ Bed</option>
                  <option>2+ Beds</option>
                  <option>3+ Beds</option>
                  <option>4+ Beds</option>
                </select>
              </div>
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-light transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="flex gap-8 mt-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-white/70 text-sm">Properties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-white/70 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-white/70 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
