import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'First-time Homebuyer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    text: 'Prestige Estates made buying my first home an incredible experience. Their team was patient, knowledgeable, and always available to answer my questions. I found my dream home in just two weeks!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
    text: 'As an investor, I need a team that understands the market inside and out. Prestige Estates consistently provides excellent investment opportunities and their market analysis is top-notch.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Property Seller',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
    text: 'Sold my property above asking price thanks to their exceptional marketing strategy. The entire process was smooth and transparent. Highly recommend their services to anyone!',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-lg mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Don't just take our word for it. Hear from some of our satisfied clients
            who found their perfect homes with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />

              <p className="text-gray-medium leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-light">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-gray-medium text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
