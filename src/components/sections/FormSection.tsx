import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Send } from "lucide-react";

const FormSection = () => {
  const { ref, inView } = useInView(0.2);
  const [focused, setFocused] = useState("");

  const fields = [
    { name: "name", label: "Your Name", type: "text", placeholder: "Jane Author" },
    { name: "email", label: "Email", type: "email", placeholder: "jane@author.com" },
    { name: "bookTitle", label: "Book Title", type: "text", placeholder: "The Next Bestseller" },
    { name: "bookLink", label: "Book Link", type: "url", placeholder: "https://amazon.com/your-book" },
  ];

  return (
    <section ref={ref} id="form" className="py-32 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-panel neon-border rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Get Your <span className="text-gradient">Visibility Audit</span>
          </h2>
          <p className="text-muted-foreground text-center text-sm mb-8">
            Free analysis of your book's current positioning.
          </p>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
          >
            {fields.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <label className="block text-sm font-medium mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  onFocus={() => setFocused(f.name)}
                  onBlur={() => setFocused("")}
                  className={`w-full px-4 py-3 rounded-xl bg-background/50 border text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/50 ${
                    focused === f.name
                      ? "border-primary neon-glow"
                      : "border-border"
                  }`}
                />
              </motion.div>
            ))}

            <motion.button
              type="submit"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base neon-glow-strong flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Get My Visibility Audit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;
