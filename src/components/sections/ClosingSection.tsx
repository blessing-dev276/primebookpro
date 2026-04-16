import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin } from "lucide-react";

const ClosingSection = () => {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref} className="py-32 px-6">
      {/* Big statement */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight mb-10"
        >
          If Readers Can't Find You,{" "}
          <span className="text-gradient">They Can't Choose You.</span>
        </motion.h2>

        <motion.a
          href="#form"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg cursor-pointer no-underline neon-glow-strong"
        >
          Start Now
        </motion.a>
      </div>

      {/* Contact info + footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-4xl mx-auto glass-panel neon-border rounded-2xl p-8 md:p-10"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm mb-1">Email</p>
              <a href="mailto:contact@primebookpro.com" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                contact@primebookpro.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm mb-1">Phone</p>
              <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm mb-1">Address</p>
              <p className="text-sm text-muted-foreground">
                123 Publishing Lane, New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrimebookPro. Making Your Book Stand Out in a Noisy World.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ClosingSection;
