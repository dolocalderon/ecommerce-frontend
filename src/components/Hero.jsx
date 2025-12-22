"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { useRef } from "react"
import modern from "../assets/modern-minimalist-fashion-photography-luxury-produ.jpg";

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15, 53, 44, 0.8), rgba(15, 53, 44, 0.5), var(--color-bg-light))",
          }}
        />
        <img
          src={modern}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span
              className="inline-block px-6 py-2 backdrop-blur-sm text-sm font-medium rounded-full mb-8"
              style={{ backgroundColor: "rgba(212, 165, 116, 0.9)", color: "var(--color-text-light)" }}
            >
              Nueva Colección 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-light)" }}
          >
            Elegancia
            <br />
            <span style={{ color: "var(--color-accent)" }}>Redefinida</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(245, 245, 245, 0.9)" }}
          >
            Descubre nuestra exclusiva selección de productos premium diseñados para aquellos que aprecian la calidad y
            el estilo atemporal
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 font-medium rounded-full flex items-center gap-2 transition-all duration-300 shadow-xl"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text-light)" }}
            >
              Explorar Colección
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 backdrop-blur-md font-medium rounded-full flex items-center gap-2 transition-all duration-300 border"
              style={{
                backgroundColor: "rgba(245, 245, 245, 0.1)",
                color: "var(--color-text-light)",
                borderColor: "rgba(245, 245, 245, 0.3)",
              }}
            >
              <Play className="w-5 h-5" />
              Ver Video
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{ border: "2px solid rgba(245, 245, 245, 0.5)" }}
        >
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-text-light)" }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
