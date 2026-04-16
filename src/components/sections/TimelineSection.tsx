import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Upload, BarChart3, Target, Sparkles } from "lucide-react";

const steps = [
  { icon: Upload, title: "Submit Your Book", desc: "Share your book details and goals with our team." },
  { icon: BarChart3, title: "Deep Analysis", desc: "We analyze your genre, competition, and optimal positioning." },
  { icon: Target, title: "Strategic Placement", desc: "Your book gets placed across high-impact discovery channels." },
  { icon: Sparkles, title: "Visible Results", desc: "Watch your rankings, visibility, and readership grow." },
];

const TimelineSection = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight"
      >
        How It <span className="text-gradient">Works</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Connecting line */}
        <motion.div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-primary/20"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className="relative flex gap-6 md:gap-8 mb-16 last:mb-0"
            >
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 neon-border flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="pt-2 md:pt-3">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
