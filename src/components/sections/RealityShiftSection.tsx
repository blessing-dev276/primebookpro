import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const RealityShiftSection = () => {
  const { ref, inView } = useInView(0.3);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight"
      >
        The Reality <span className="text-gradient">Shift</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-4 items-center">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel rounded-2xl p-10 relative"
          style={{ filter: inView ? "none" : "grayscale(1)" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-foreground/[0.03]" />
          <div className="relative opacity-50">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
              <span className="text-2xl">📕</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-muted-foreground">Invisible Book</h3>
            <p className="text-muted-foreground/70 leading-relaxed">
              Lost in millions of titles. No visibility. No ranking. No readers finding you. Your masterpiece collecting digital dust.
            </p>
            <div className="mt-6 flex gap-2">
              {["No Ranking", "Zero Visibility", "No Readers"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground/50">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-panel rounded-2xl p-10 neon-border relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-primary/[0.03]" />
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 neon-glow">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Positioned Book</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strategically placed where readers search. High visibility. Strong ranking. Consistent discovery by your target audience.
            </p>
            <div className="mt-6 flex gap-2">
              {["Top Ranked", "High Visibility", "Reader Magnet"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary neon-border">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealityShiftSection;
