import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'R$ 89',
    period: '/mês',
    description: 'Ideal para quem está começando',
    features: [
      'Acesso à musculação',
      'Vestiários completos',
      'Horário comercial',
      'Avaliação física inicial',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: 'R$ 149',
    period: '/mês',
    description: 'O mais escolhido pelos alunos',
    features: [
      'Acesso ilimitado 24h',
      'Todas as modalidades',
      'Aulas em grupo',
      'App de treinos',
      'Acompanhamento mensal',
      'Desconto em suplementos',
    ],
    popular: true,
  },
  {
    name: 'Black',
    price: 'R$ 249',
    period: '/mês',
    description: 'Para quem busca o máximo',
    features: [
      'Tudo do Premium',
      'Personal Trainer incluso',
      'Nutricionista',
      'Massagem mensal',
      'Estacionamento VIP',
      'Acesso a todas unidades',
    ],
    popular: false,
  },
];

export function PlansSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Nossos Planos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mt-4">
            ESCOLHA O PLANO
            <br />
            <span className="text-gradient">IDEAL PARA VOCÊ</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-primary text-primary-foreground scale-105 glow-orange'
                  : 'bg-card text-card-foreground border border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}
                >
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="font-display text-5xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`}
                      />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/matricula">
                <Button
                  variant={plan.popular ? 'hero-outline' : 'default'}
                  className="w-full"
                  size="lg"
                >
                  Escolher Plano
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
