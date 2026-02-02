import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"
import ring from "../assets/ring.webp"

const ProductCard = ({ product, index }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      {/* TO DO: VER COMO SOLUCIONAR TEMA DE IMAGENES */}
      <div className="relative overflow-hidden">
        <motion.img
          src={ring}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(15, 53, 44, 0.8), rgba(15, 53, 44, 0.4), transparent)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 flex gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 font-medium rounded-xl flex items-center justify-center gap-2 transition-colors duration-300"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text-light)" }}
          >
            {/* TO DO: CREAR SHOPPING CART PARA PODER AGREGAR PRODUCTOS */}
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-xl transition-colors duration-300 ${
              isLiked ? "bg-red-300/60 text-white" : "bg-white/90"
            }`}
            style={!isLiked ? { color: "var(--color-text-dark)" } : {}}
          >
            {/* TO DO: AGREGAR ACCIONES CON LIKES */}
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="text-sm uppercase tracking-wide mb-2" style={{ color: "var(--color-muted)" }}>
            {product.brand}
          </p>
          <h3
            className="text-lg font-semibold mb-3 line-clamp-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-dark)" }}
          >
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
              >
                ${product.price?.amount || "Consultar"}
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProductCard
