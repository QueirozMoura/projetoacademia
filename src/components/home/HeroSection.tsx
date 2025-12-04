import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-gym.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Academia Zoomp - Treino intenso"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Academia Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6"
          >
            SUPERE SEUS
            <br />
            <span className="text-gradient">LIMITES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Na Academia Zoomp, você encontra estrutura completa, equipamentos de ponta
            e profissionais dedicados para transformar seu corpo e sua mente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/matricula">
              <Button variant="hero">
                Comece Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/sobre">
              <Button variant="hero-outline">
                <Play className="w-5 h-5" />
                Conheça a Academia
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: '10+', label: 'Anos de Experiência' },
              { value: '5K+', label: 'Alunos Ativos' },
              { value: '50+', label: 'Profissionais' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
