"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import luxury from "../assets/luxury-lifestyle-product-showcase-elegant.jpg";


const FeaturedSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-24 px-4 bg-primary relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div style={{ x }} className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <motion.div
        style={{ x: useTransform(x, (value) => `-${value}`) }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
              <img src={luxury} alt="Featured Collection" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-accent">★</span>
                </div>
                <div>
                  <p className="text-sm text-muted">Calidad Premium</p>
                  <p className="text-2xl font-heading font-bold text-text-dark">4.9/5</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-text-light"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/90 text-text-light text-sm font-medium rounded-full mb-6"
            >
              Colección Exclusiva
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Diseñado para la
              <br />
              <span className="text-accent">Excelencia</span>
            </h2>

            <p className="text-lg text-text-light/80 mb-8 leading-relaxed">
              Cada producto en nuestra colección es cuidadosamente seleccionado para garantizar la más alta calidad.
              Utilizamos materiales premium y técnicas artesanales para crear piezas que duran toda la vida.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { label: "Materiales Premium", value: "100%" },
                { label: "Satisfacción Garantizada", value: "99%" },
                { label: "Envío Internacional", value: "50+ países" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between py-3 border-b border-text-light/20"
                >
                  <span className="text-text-light/90">{stat.label}</span>
                  <span className="text-xl font-heading font-bold text-accent">{stat.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-accent hover:bg-accent-hover text-text-light font-medium rounded-full flex items-center gap-2 transition-all duration-300 shadow-xl"
            >
              Descubre Más
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturedSection
