import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 150,
    features: ["1 Listopia Placement", "Basic Ranking Boost", "7-Day Positioning", "Email Support"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: 250,
    features: ["3 Listopia Placements", "Advanced Ranking Boost", "14-Day Positioning", "Priority Support", "Performance Report"],
    highlighted: true,
  },
  {
    name: "Domination",
    price: 500,
    features: ["5 Listopia Placements", "Maximum Ranking Boost", "30-Day Positioning", "Dedicated Manager", "Full Analytics Suite", "Re-boost Guarantee"],
    highlighted: false,
  },
];

const PricingSection = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight"
      >
        Choose Your <span className="text-gradient">Plan</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="text-center text-muted-foreground mb-16 max-w-xl mx-auto"
      >
        Invest in your book's visibility. Every plan delivers measurable results.
      </motion.p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-center">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`glass-panel rounded-2xl p-8 relative ${
              plan.highlighted
                ? "neon-glow-strong neon-border md:-my-4 md:py-12"
                : "neon-border"
            }`}
          >
            {plan.highlighted && (
              <motion.div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
                animate={{ boxShadow: ["0 0 15px hsl(199 89% 48% / 0.4)", "0 0 30px hsl(199 89% 48% / 0.6)", "0 0 15px hsl(199 89% 48% / 0.4)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Most Popular
              </motion.div>
            )}
            <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-muted-foreground text-sm ml-1">/ book</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <motion.a
              href="#form"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`block text-center py-3 rounded-xl font-semibold text-sm cursor-pointer no-underline ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              Get Started
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
