import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['17th A main ', '2nd phase', 'Bangalore, Karnataka, India'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@shripadestates.com', 'sales@shripadestates.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-lg mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Ready to find your dream home? Get in touch with our team of experts
            today and let us help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">{info.title}</h4>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-medium text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 bg-light rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent appearance-none">
                  <option>Property Inquiry</option>
                  <option>Scheduling a Viewing</option>
                  <option>Selling a Property</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your dream home..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-light transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
