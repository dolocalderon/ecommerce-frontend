"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ShoppingCart, Menu, X, Search, User } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 248, 246, 0)", "rgba(250, 248, 246, 0.98)"]
  )

  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  const navItems = [
    { id: "home", name: "Inicio", href: "/" },
    { id: "products", name: "Productos", href: "/products" },
    { id: "about", name: "Nosotros", href: "#about" },
    { id: "contact", name: "Contacto", href: "#contact" },
    { id: "faq", name: "Preguntas frecuentes", href: "#faq" },
  ]

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <span className="font-bold text-xl text-white">E</span>
              </div>
              <span
                className="text-2xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                Élite
              </span>
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <motion.div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.id}>
                <Link
                  to={item.href}
                  className="font-medium relative group"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.id}>
              <Link to={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
