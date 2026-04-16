import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#form" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel neon-border border-t-0 border-x-0" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="no-underline">
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary font-light neon-text cursor-pointer">
            PrimebookPro
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer font-medium"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="bg-transparent border-none text-foreground cursor-pointer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleClick(item.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
