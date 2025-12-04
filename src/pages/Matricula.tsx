import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Check,
  ArrowRight,
  Zap,
  Star,
  Users,
  Clock,
  Trophy,
  Dumbbell,
  Heart,
  Target,
} from 'lucide-react';

const benefits = [
  { icon: Zap, text: 'Resultados em 30 dias' },
  { icon: Users, text: 'Acompanhamento profissional' },
  { icon: Clock, text: 'Acesso 24 horas' },
  { icon: Trophy, text: 'Metodologia comprovada' },
];

const features = [
  'Primeira semana GRÁTIS',
  'Avaliação física completa',
  'Programa de treino personalizado',
  'Acesso a todas as modalidades',
  'App exclusivo de treinos',
  'Desconto em suplementos',
];

const testimonials = [
  {
    name: 'Pedro Almeida',
    result: '-15kg em 3 meses',
    text: 'A Academia Zoomp mudou minha vida! Equipe incrível e resultados reais.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Juliana Martins',
    result: 'Definição muscular',
    text: 'Estrutura impecável e profissionais que realmente se importam.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
];

export default function Matricula() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Oferta Especial
                </span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight mb-6">
                PRIMEIRA SEMANA
                <br />
                <span className="text-gradient">GRÁTIS!</span>
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                Comece sua transformação hoje mesmo. Sem compromisso, sem taxa de matrícula. 
                Experimente toda nossa estrutura por 7 dias e sinta a diferença.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                {[
                  { value: '5.000+', label: 'Alunos' },
                  { value: '10+', label: 'Anos' },
                  { value: '98%', label: 'Satisfação' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card rounded-3xl p-8 card-shadow border border-border">
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Agende sua Visita Grátis
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2">
                    Preencha o formulário e entraremos em contato
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <Input placeholder="Nome completo" />
                  </div>
                  <div>
                    <Input type="email" placeholder="E-mail" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="WhatsApp" />
                  </div>
                  <div>
                    <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm">
                      <option value="">Objetivo principal</option>
                      <option value="emagrecer">Emagrecer</option>
                      <option value="ganhar-massa">Ganhar massa muscular</option>
                      <option value="condicionamento">Condicionamento físico</option>
                      <option value="saude">Saúde e bem-estar</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full" size="lg" variant="cta">
                    Quero Minha Semana Grátis
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>

                <div className="mt-6 space-y-3">
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-foreground">
              O QUE VOCÊ <span className="text-gradient">GANHA</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-secondary-foreground">
              RESULTADOS <span className="text-gradient">REAIS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-primary text-sm font-medium">{testimonial.result}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              NÃO PERCA MAIS TEMPO!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Sua transformação começa agora. Agende sua visita gratuita e descubra 
              por que somos a academia mais bem avaliada da região.
            </p>
            <a href="#top">
              <Button
                variant="hero-outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Quero Começar Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
