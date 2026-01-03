"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ShoppingCart, Menu, X, Search, User } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(250, 248, 246, 0)", "rgba(250, 248, 246, 0.98)"])

  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/products" },
    { name: "Nosotros", href: "#about" },
    { name: "Contato", href: "#contact" },
    { name: "Preguntas frequentes", href: "#contact" },
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
            className="flex-shrink-0"
          >
            <a href="#" className="flex items-center space-x-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <span
                  className="font-bold text-xl"
                  style={{ color: "var(--color-text-light)", fontFamily: "var(--font-heading)" }}
                >
                  E
                </span>
              </div>
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
              >
                Élite
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.div>
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

          {/* Right Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-4"
          >
            <button
              className="p-2 hover:bg-opacity-10 rounded-full transition-colors duration-300"
              style={{ hover: { backgroundColor: "var(--color-primary)" } }}
            >
              <Search className="w-5 h-5" style={{ color: "var(--color-text-dark)" }} />
            </button>
            <button className="p-2 hover:bg-opacity-10 rounded-full transition-colors duration-300">
              <User className="w-5 h-5" style={{ color: "var(--color-text-dark)" }} />
            </button>
            <button className="relative p-2 hover:bg-opacity-10 rounded-full transition-colors duration-300">
              <ShoppingCart className="w-5 h-5" style={{ color: "var(--color-text-dark)" }} />
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text-light)" }}
              >
                0
              </span>
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ hover: { backgroundColor: "rgba(15, 53, 44, 0.1)" } }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t"
        style={{
          backgroundColor: "rgba(250, 248, 246, 0.98)",
          backdropFilter: "blur(12px)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.div>
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
          <div className="flex items-center space-x-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
            <button className="p-2 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text-light)" }}
              >
                0
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
