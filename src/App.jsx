import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import FeaturedSection from "./components/FeaturedSection"
import Footer from "./components/Footer"
import Products from "./components/Products"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={
            <>
              <Hero />
              <ProductGrid /> {/* solo 8 */}
              <FeaturedSection />
            </>
          }
        />

        {/* TODOS LOS PRODUCTOS */}
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
