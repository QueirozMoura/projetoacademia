import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight, Zap, Shield, Clock } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'R$ 89',
    period: '/mês',
    description: 'Ideal para quem está começando',
    features: [
      'Acesso à musculação',
      'Vestiários completos',
      'Horário comercial (6h-22h)',
      'Avaliação física inicial',
      'Armário rotativo',
    ],
    notIncluded: ['Aulas em grupo', 'Personal Trainer', 'Acesso 24h'],
    popular: false,
    color: 'border-border',
  },
  {
    name: 'Premium',
    price: 'R$ 149',
    period: '/mês',
    description: 'O mais escolhido pelos alunos',
    features: [
      'Acesso ilimitado 24h',
      'Todas as modalidades',
      'Aulas em grupo ilimitadas',
      'App de treinos',
      'Acompanhamento mensal',
      'Desconto em suplementos',
      'Armário fixo',
      'Acesso a 2 unidades',
    ],
    notIncluded: ['Personal Trainer incluso'],
    popular: true,
    color: 'border-primary',
  },
  {
    name: 'Black',
    price: 'R$ 249',
    period: '/mês',
    description: 'Para quem busca o máximo',
    features: [
      'Tudo do Premium',
      '2 sessões de Personal/semana',
      'Consulta com Nutricionista',
      'Massagem mensal',
      'Estacionamento VIP',
      'Acesso a todas unidades',
      'Área VIP exclusiva',
      'Toalhas inclusas',
    ],
    notIncluded: [],
    popular: false,
    color: 'border-border',
  },
];

const benefits = [
  { icon: Zap, title: 'Resultados Rápidos', description: 'Metodologia comprovada para máxima eficiência' },
  { icon: Shield, title: 'Sem Fidelidade', description: 'Cancele quando quiser, sem multas' },
  { icon: Clock, title: 'Flexibilidade', description: 'Horários adaptados ao seu dia a dia' },
];

export default function Planos() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Planos e Preços
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary-foreground mt-4 mb-6">
              INVISTA NO SEU <span className="text-gradient">MELHOR</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Escolha o plano ideal para seus objetivos. Todos incluem acesso à nossa 
              estrutura completa e equipe qualificada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 bg-card border-2 ${plan.color} ${
                  plan.popular ? 'scale-105 glow-orange' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <span className="font-display text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <span className="text-xs text-muted-foreground">✕</span>
                      </div>
                      <span className="text-sm text-muted-foreground line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/matricula">
                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    className="w-full"
                    size="lg"
                  >
                    Escolher {plan.name}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-muted-foreground mb-8">
            Entre em contato conosco ou agende uma visita para conhecer nossa estrutura.
          </p>
          <Link to="/contato">
            <Button variant="outline" size="lg">
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
