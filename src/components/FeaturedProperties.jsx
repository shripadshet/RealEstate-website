import { BedDouble, Bath, Maximize, MapPin } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Modern Villa with Ocean View',
    location: 'Malibu, California',
    price: '₹2,450,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
    tag: 'Featured',
  },
  {
    id: 2,
    title: 'Luxury Penthouse Suite',
    location: 'Manhattan, New York',
    price: '₹3,800,000',
    beds: 4,
    baths: 3,
    sqft: '3,500',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    tag: 'New',
  },
  {
    id: 3,
    title: 'Contemporary Family Home',
    location: 'Beverly Hills, CA',
    price: '₹1,850,000',
    beds: 4,
    baths: 3,
    sqft: '3,100',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    tag: 'Popular',
  },
  {
    id: 4,
    title: 'Waterfront Estate',
    location: 'Miami Beach, Florida',
    price: '₹4,200,000',
    beds: 6,
    baths: 5,
    sqft: '5,800',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    tag: 'Featured',
  },
  {
    id: 5,
    title: 'Urban Loft Apartment',
    location: 'Downtown Chicago, IL',
    price: '₹780,000',
    beds: 2,
    baths: 2,
    sqft: '1,400',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    tag: 'New',
  },
  {
    id: 6,
    title: 'Charming Colonial House',
    location: 'Greenwich, Connecticut',
    price: ' ₹1,250,000',
    beds: 4,
    baths: 3,
    sqft: '2,800',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
    tag: 'Popular',
  },
]

const tagColors = {
  Featured: 'bg-secondary',
  New: 'bg-green-500',
  Popular: 'bg-primary',
}

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-lg mb-2">OUR LISTINGS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties, each offering
            unique features and exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4  ₹{tagColors[property.tag]} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {property.tag}
                </span>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-primary font-bold text-xl px-4 py-2 rounded-lg">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-medium text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-light">
                  <div className="flex items-center gap-1 text-gray-medium text-sm">
                    <BedDouble className="w-4 h-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-medium text-sm">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-medium text-sm">
                    <Maximize className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}
