import { useArticle } from "../utils/context/useArticle"
import ProductCard from "./ProductCard"
import { Loader2 } from "lucide-react"
import { motion } from "framer-motion"

const Products = () => {
  const { articles, loading } = useArticle()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
          <Loader2 className="w-12 h-12" />
        </motion.div>
      </div>
    )
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {articles.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Products
