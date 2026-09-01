import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
