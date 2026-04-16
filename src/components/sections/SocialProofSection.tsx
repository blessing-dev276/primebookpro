import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  { text: "My book went from page 8 to page 1 in two weeks. Unreal.", author: "Sarah K.", role: "Romance Author" },
  { text: "PrimebookPro changed everything. I finally have consistent readers finding me.", author: "Marcus J.", role: "Sci-Fi Author" },
  { text: "The visibility audit alone was worth 10x the price. Highly recommend.", author: "Elena R.", role: "Self-Help Author" },
];

const stats = [
  { label: "Books Positioned", target: 2400 },
  { label: "Authors Helped", target: 850 },
  { label: "Avg. Visibility Increase", target: 340, suffix: "%" },
];

const Counter = ({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-gradient">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const SocialProofSection = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="py-32 px-6">
      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 mb-24">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="text-center"
          >
            <Counter target={s.target} suffix={s.suffix} inView={inView} />
            <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
            className="glass-panel neon-border rounded-2xl p-6 relative"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm leading-relaxed mb-4 text-muted-foreground italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;
