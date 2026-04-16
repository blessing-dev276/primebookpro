import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { BookOpen, Star, TrendingUp, Award } from "lucide-react";

const portfolioItems = [
  {
    title: "The Awakening Path",
    author: "Sarah Mitchell",
    genre: "Self-Help",
    result: "Page 1 in 10 days",
    icon: Star,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Stellar Horizons",
    author: "Marcus Chen",
    genre: "Sci-Fi",
    result: "+480% visibility",
    icon: TrendingUp,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Whispered Truths",
    author: "Elena Rodriguez",
    genre: "Literary Fiction",
    result: "Bestseller in 3 weeks",
    icon: Award,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "The Last Algorithm",
    author: "David Park",
    genre: "Thriller",
    result: "12K+ new readers",
    icon: BookOpen,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Healing Notes",
    author: "Amara Johnson",
    genre: "Memoir",
    result: "Top 5 in category",
    icon: Star,
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    title: "Code of Empires",
    author: "Viktor Novak",
    genre: "Historical Fiction",
    result: "+320% discovery",
    icon: TrendingUp,
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    title: "Mindful Markets",
    author: "Lisa Tanaka",
    genre: "Business",
    result: "Amazon #1 New Release",
    icon: Award,
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    title: "Beneath the Surface",
    author: "James O'Brien",
    genre: "Mystery",
    result: "Featured Pick",
    icon: BookOpen,
    color: "from-fuchsia-500/20 to-purple-500/20",
  },
];

const PortfolioSection = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} id="portfolio" className="py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight"
      >
        Success <span className="text-gradient">Portfolio</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="text-center text-muted-foreground mb-16 max-w-xl mx-auto"
      >
        Real authors. Real results. See what strategic positioning can do.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {portfolioItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
              className="glass-panel neon-border rounded-2xl p-5 md:p-6 cursor-default group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:neon-glow transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base mb-1 leading-tight">{item.title}</h3>
                <p className="text-xs text-muted-foreground mb-0.5">{item.author}</p>
                <p className="text-xs text-muted-foreground/70 mb-3">{item.genre}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {item.result}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
