import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css" // ensure this line is included
import "./wallet.css"; 

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isOpen && !isMobile) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  const navItems = [
    { label: "Company", href: "#" },
    { label: "Calculator", href: "#" },
    { label: "Team", href: "#" },
    { label: "Info", href: "#" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex items-center justify-between px-4 md:px-8 py-6 border-b border-white/10 relative z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {item.label === "Company" ? (
                <button className="px-4 py-2 rounded-full border border-white/30 hover:border-white transition-colors">
                  {item.label}
                </button>
              ) : (
                item.label
              )}
            </motion.a>
          ))}
        </div>
      )}

      {/* Desktop Buttons */}
      {!isMobile && (
                <div className="flex items-center gap-4">
                <motion.div whileTap={{ scale: 0.95 }}>
                    {/* <WalletMultiButton
                    className="!px-6 !py-2 !rounded-full !bg-white !text-black hover:!bg-white/90 transition-colors !text-sm !font-medium !border-none"
                    /> */}
                    {/* <WalletMultiButton
                    className="!px-6 !py-2 !rounded-full !bg-white !text-black hover:!bg-black hover:!text-white transition-colors !text-sm !font-medium !border-none"/> */}
                    <WalletMultiButton className="wallet-adapter-button" />
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm font-medium"
                >
                    Get started
                </motion.button>
                </div>

      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={menuItemVariants}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label === "Company" ? (
                    <div className="px-4 py-2 rounded-full border border-white/30 hover:border-white transition-colors w-fit">
                      {item.label}
                    </div>
                  ) : (
                    item.label
                  )}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                {/* Solana Wallet Button (Mobile) */}
                <motion.div variants={menuItemVariants} whileTap={{ scale: 0.95 }}>
                  <WalletMultiButton
                    className="!w-full !px-6 !py-2 !rounded-full !border !border-white/30 hover:!border-white transition-colors !text-sm !bg-transparent !text-white"
                  />
                </motion.div>

                <motion.button
                  variants={menuItemVariants}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm font-medium"
                >
                  Get started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
