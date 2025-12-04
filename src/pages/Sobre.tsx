import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Target, Eye, Heart, Users, Award, Dumbbell } from 'lucide-react';

const values = [
  { icon: Target, title: 'Foco em Resultados', description: 'Trabalhamos para que você alcance seus objetivos.' },
  { icon: Heart, title: 'Paixão pelo Fitness', description: 'Amamos o que fazemos e isso reflete em nosso trabalho.' },
  { icon: Users, title: 'Comunidade', description: 'Criamos um ambiente acolhedor e motivador.' },
  { icon: Award, title: 'Excelência', description: 'Buscamos sempre o melhor em tudo que fazemos.' },
];

const team = [
  { name: 'João Paulo', role: 'Diretor Técnico', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop' },
  { name: 'Fernanda Lima', role: 'Coordenadora de Personal', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=300&fit=crop' },
  { name: 'Ricardo Santos', role: 'Instrutor CrossFit', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&h=300&fit=crop' },
  { name: 'Mariana Costa', role: 'Nutricionista', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop' },
];

export default function Sobre() {
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
              Nossa História
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary-foreground mt-4 mb-6">
              CONHEÇA A <span className="text-gradient">ZOOMP</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Há mais de 10 anos transformando vidas através do fitness. Nossa missão é 
              proporcionar a melhor experiência em treino, com estrutura premium e 
              profissionais apaixonados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Missão</h3>
                <p className="text-muted-foreground">
                  Transformar vidas através do fitness, oferecendo excelência em estrutura, 
                  atendimento e resultados, em um ambiente motivador e inclusivo.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência nacional em academias premium, reconhecida pela qualidade 
                  dos serviços e pelo impacto positivo na vida de nossos alunos.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"
                  alt="Interior da Academia Zoomp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 glow-orange">
                <Dumbbell className="w-8 h-8 text-primary-foreground" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-secondary-foreground">
              NOSSOS <span className="text-gradient">VALORES</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center card-shadow border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Nossa Equipe
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground mt-4">
              PROFISSIONAIS <span className="text-gradient">DEDICADOS</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-display font-bold text-foreground">{member.name}</h4>
                <p className="text-primary text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
