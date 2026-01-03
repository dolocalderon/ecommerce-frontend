"use client"

import { motion } from "framer-motion"
import { useArticle } from "../utils/context/useArticle"
import ProductCard from "./ProductCard"
import { Loader2 } from "lucide-react"
import { Link } from "react-router-dom"


const ProductGrid = () => {
  const { articles, loading } = useArticle()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Loader2 className="w-12 h-12" style={{ color: "var(--color-primary)" }} />
        </motion.div>
      </div>
    )
  }

  return (
    <section id="products" className="py-24 px-4" style={{ backgroundColor: "var(--color-bg-light)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4"
            style={{ backgroundColor: "rgba(15, 53, 44, 0.1)", color: "var(--color-primary)" }}
          >
            Nuestra Colección
          </motion.span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-dark)" }}
          >
            Productos Destacados
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-muted)" }}>
            Explora nuestra cuidadosa selección de productos premium diseñados para elevar tu estilo de vida
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {articles.slice(0, 8).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}

        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-medium rounded-full transition-colors duration-300 shadow-lg"
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-light)" }}
            >
              Ver Más Productos
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default ProductGrid
