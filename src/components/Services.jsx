import { Home, Key, Building2, Calculator, Shield, Handshake } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Property Buying',
    description:
      'Expert guidance through the entire buying process, from property search to closing the deal.',
  },
  {
    icon: Key,
    title: 'Property Selling',
    description:
      'Strategic marketing and pricing to maximize your property value and ensure a quick sale.',
  },
  {
    icon: Building2,
    title: 'Property Management',
    description:
      'Complete management services for your investment properties, handling tenants and maintenance.',
  },
  {
    icon: Calculator,
    title: 'Market Analysis',
    description:
      'In-depth market research and analysis to help you make informed investment decisions.',
  },
  {
    icon: Shield,
    title: 'Investment Advisory',
    description:
      'Professional advice on real estate investments to build and protect your wealth.',
  },
  {
    icon: Handshake,
    title: 'Consultation',
    description:
      'Free initial consultation to understand your needs and create a tailored property strategy.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-lg mb-2">WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs
            and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
