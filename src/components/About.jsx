import { Award, Users, TrendingUp, Clock } from 'lucide-react'

const stats = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '2,000+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '₹2B+', label: 'Properties Sold' },
  { icon: Clock, value: '24/7', label: 'Customer Support' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/20 rounded-2xl" />
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
              alt="About Shripad Estates"
              className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-white/80">Years in Business</p>
            </div>
          </div>

          <div>
            <p className="text-secondary font-semibold text-lg mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              We Help You Find{' '}
              <span className="text-secondary">Perfect Home</span>
            </h2>
            <p className="text-gray-medium leading-relaxed mb-6">
              Shripad Estates has been a trusted name in luxury real estate for over
              15 years. We specialize in connecting discerning buyers with exceptional
              properties that match their lifestyle and aspirations.
            </p>
            <p className="text-gray-medium leading-relaxed mb-8">
              Our team of experienced professionals provides personalized service,
              expert market insights, and a seamless buying experience from start to
              finish. We believe that finding the right home is about more than just
              square footage — it's about finding a place where memories are made.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-gray-medium text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
