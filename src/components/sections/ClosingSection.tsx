import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const ClosingSection = () => {
  const { ref, inView } = useInView(0.3);

  return (
    <section ref={ref} className="py-32 px-6 text-center">
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
        className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg cursor-pointer no-underline"
      >
        <motion.span
          className="inline-block"
          animate={{ boxShadow: ["0 0 20px hsl(199 89% 48% / 0.3)", "0 0 40px hsl(199 89% 48% / 0.6)", "0 0 20px hsl(199 89% 48% / 0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Start Now
        </motion.span>
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-16 text-sm text-muted-foreground"
      >
        © {new Date().getFullYear()} PrimebookPro. Making Your Book Stand Out in a Noisy World.
      </motion.p>
    </section>
  );
};

export default ClosingSection;
