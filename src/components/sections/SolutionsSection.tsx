import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Layers, TrendingUp, Search } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Listopia Placement",
    desc: "Get your book placed on high-traffic curated lists where active readers browse and discover new titles.",
  },
  {
    icon: TrendingUp,
    title: "Ranking Boost",
    desc: "Strategic optimization to push your book up in search results and bestseller category rankings.",
  },
  {
    icon: Search,
    title: "Discovery Positioning",
    desc: "Position your book in discovery feeds, recommendation engines, and algorithmic pathways readers use daily.",
  },
];

const TiltCard = ({ service, index, inView }: { service: typeof services[0]; index: number; inView: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - rect.top) / rect.height - 0.5) * -15,
      y: ((e.clientX - rect.left) / rect.width - 0.5) * 15,
    });
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="glass-panel neon-border rounded-2xl p-8 cursor-default"
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${index === 1 ? "-12px" : "0"})`,
        transition: "transform 0.15s ease-out",
      }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 neon-glow">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
    </motion.div>
  );
};

const SolutionsSection = () => {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref} id="services" className="py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight"
      >
        Solution <span className="text-gradient">Modules</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-muted-foreground mb-16 max-w-xl mx-auto"
      >
        Each module is designed to strategically amplify your book's presence where it matters most.
      </motion.p>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <TiltCard key={s.title} service={s} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
