import { motion } from 'framer-motion';
import { Dumbbell, Users, Zap, Heart, Clock, Trophy } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Musculação',
    description: 'Equipamentos modernos e ambiente motivador para treinos de força.',
  },
  {
    icon: Zap,
    title: 'CrossFit',
    description: 'Treinos funcionais de alta intensidade para resultados rápidos.',
  },
  {
    icon: Heart,
    title: 'Spinning',
    description: 'Aulas energéticas que combinam ciclismo indoor e música.',
  },
  {
    icon: Users,
    title: 'Personal Trainer',
    description: 'Acompanhamento individualizado com profissionais qualificados.',
  },
  {
    icon: Clock,
    title: 'Funcional',
    description: 'Treinos dinâmicos que melhoram força, equilíbrio e mobilidade.',
  },
  {
    icon: Trophy,
    title: 'Avaliação Física',
    description: 'Análise completa para um programa de treino personalizado.',
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Nossos Serviços
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            TREINO COMPLETO PARA
            <br />
            <span className="text-gradient">RESULTADOS REAIS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
