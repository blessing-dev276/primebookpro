import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Upload, BarChart3, Target, Sparkles } from "lucide-react";

const steps = [
  { icon: Upload, title: "Submit Your Book", desc: "Share your book details and goals with our team.", num: "01" },
  { icon: BarChart3, title: "Deep Analysis", desc: "We analyze your genre, competition, and optimal positioning.", num: "02" },
  { icon: Target, title: "Strategic Placement", desc: "Your book gets placed across high-impact discovery channels.", num: "03" },
  { icon: Sparkles, title: "Visible Results", desc: "Watch your rankings, visibility, and readership grow.", num: "04" },
];

const TimelineSection = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} id="how-it-works" className="py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight"
      >
        How It <span className="text-gradient">Works</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Animated connecting line */}
        <motion.div
          className="absolute left-6 md:left-10 top-0 bottom-0 w-px"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        >
          <div className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-primary/10" />
        </motion.div>

        {/* Animated glow traveling down the line */}
        {inView && (
          <motion.div
            className="absolute left-[21px] md:left-[37px] w-3 h-3 rounded-full bg-primary neon-glow-strong"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
        )}

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.25, duration: 0.7, ease: "easeOut" }}
              className="relative flex gap-6 md:gap-10 mb-20 last:mb-0 group"
            >
              {/* Step node */}
              <motion.div
                className="relative z-10 w-12 h-12 md:w-20 md:h-20 rounded-full bg-background flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.15 }}
                animate={inView ? {
                  boxShadow: [
                    "0 0 0px hsl(var(--neon) / 0)",
                    "0 0 25px hsl(var(--neon) / 0.4)",
                    "0 0 0px hsl(var(--neon) / 0)",
                  ],
                } : {}}
                transition={{ delay: 0.6 + i * 0.3, duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-full neon-border bg-primary/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </div>
              </motion.div>

              {/* Content card */}
              <motion.div
                className="glass-panel neon-border rounded-2xl p-5 md:p-6 flex-1 group-hover:neon-glow transition-all duration-500"
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-primary/50 tracking-wider">{step.num}</span>
                  <motion.div
                    className="h-px flex-1 bg-primary/20"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.25, duration: 0.8 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{step.desc}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
