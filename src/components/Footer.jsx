"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  const footerLinks = {
    shop: ["Todos los Productos", "Novedades", "Ofertas", "Colecciones"],
    company: ["Sobre Nosotros", "Contacto", "Carreras", "Blog"],
    support: ["FAQ", "Envíos", "Devoluciones", "Garantía"],
  }

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-light)" }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-light)" }}
                  >
                    E
                  </span>
                </div>
                <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Élite
                </span>
              </div>
              <p className="leading-relaxed mb-6" style={{ color: "rgba(245, 245, 245, 0.7)" }}>
                Descubre la excelencia en cada producto. Calidad premium, diseño atemporal y servicio excepcional.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: "rgba(245, 245, 245, 0.1)" }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: columnIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize" style={{ fontFamily: "var(--font-heading)" }}>
                {title === "shop" ? "Tienda" : title === "company" ? "Empresa" : "Soporte"}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <a
                      href="#"
                      className="inline-block transition-colors duration-300"
                      style={{ color: "rgba(245, 245, 245, 0.7)" }}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t pt-12 pb-8"
          style={{ borderColor: "rgba(245, 245, 245, 0.2)" }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Únete a Nuestra Comunidad
            </h3>
            <p className="mb-6" style={{ color: "rgba(245, 245, 245, 0.7)" }}>
              Recibe ofertas exclusivas, nuevos lanzamientos y contenido especial
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-3 border rounded-full focus:outline-none transition-colors"
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0.1)",
                  borderColor: "rgba(245, 245, 245, 0.2)",
                  color: "var(--color-text-light)",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-medium rounded-full transition-colors duration-300 shadow-lg"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text-light)" }}
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ borderColor: "rgba(245, 245, 245, 0.2)", color: "rgba(245, 245, 245, 0.6)" }}
        >
          <p>&copy; 2025 Élite. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-300">
              Privacidad
            </a>
            <a href="#" className="transition-colors duration-300">
              Términos
            </a>
            <a href="#" className="transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
