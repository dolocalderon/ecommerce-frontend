import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import FeaturedSection from "./components/FeaturedSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      <FeaturedSection />
      <Footer />
    </div>
  )
}

export default App
