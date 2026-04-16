import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { ChevronDown } from "lucide-react";

const floatingWords = ["visibility", "ranking", "readers", "discovery", "impact", "growth"];

const HeroSection = () => {
  const mouse = useMousePosition();

  const headline = "Your Book Deserves Attention. Not Silence.";
  const words = headline.split(" ");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Floating background words */}
      {floatingWords.map((word, i) => (
        <motion.span
          key={word}
          className="absolute text-primary/[0.07] text-6xl md:text-8xl font-bold uppercase tracking-[0.3em] select-none pointer-events-none"
          style={{
            top: `${15 + i * 13}%`,
            left: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, 15 * (i % 2 === 0 ? -1 : 1), 0],
          }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {word}
        </motion.span>
      ))}

      {/* Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 z-10"
      >
        <h2 className="text-sm md:text-base uppercase tracking-[0.5em] text-primary font-light neon-text">
          PrimebookPro
        </h2>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight z-10 max-w-5xl"
        style={{
          transform: `translate(${mouse.x * 5}px, ${mouse.y * 5}px)`,
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.3em]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: "easeOut" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mt-6 text-muted-foreground text-lg md:text-xl max-w-xl text-center z-10"
      >
        Making Your Book Stand Out in a Noisy World
      </motion.p>

      {/* CTA */}
      <motion.a
        href="#form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg neon-glow-strong cursor-pointer z-10 no-underline"
      >
        Start Visibility Audit
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
