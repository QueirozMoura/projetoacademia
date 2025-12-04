import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 1,
    title: '10 Exercícios Essenciais para Iniciantes',
    excerpt: 'Comece sua jornada fitness com esses exercícios fundamentais que vão construir uma base sólida.',
    content: `
      <p>Começar uma rotina de exercícios pode parecer intimidador, mas com os exercícios certos, você pode construir uma base sólida para sua jornada fitness. Neste artigo, vamos explorar 10 exercícios essenciais que todo iniciante deveria dominar.</p>
      
      <h2>1. Agachamento (Squat)</h2>
      <p>O agachamento é considerado o rei dos exercícios compostos. Ele trabalha quadríceps, glúteos, isquiotibiais e core simultaneamente. Comece com agachamentos apenas com o peso do corpo antes de adicionar carga.</p>
      
      <h2>2. Flexão de Braços (Push-up)</h2>
      <p>A flexão é um exercício clássico que trabalha peito, ombros, tríceps e core. Se você ainda não consegue fazer flexões completas, comece com flexões inclinadas ou de joelhos.</p>
      
      <h2>3. Prancha (Plank)</h2>
      <p>A prancha é fundamental para desenvolver força no core. Mantenha o corpo em linha reta e comece com intervalos de 20-30 segundos, aumentando gradualmente.</p>
      
      <h2>4. Avanço (Lunge)</h2>
      <p>Os avanços trabalham equilíbrio, coordenação e força nas pernas. São excelentes para desenvolver força unilateral.</p>
      
      <h2>5. Remada com Peso do Corpo</h2>
      <p>Usando uma barra baixa ou TRX, a remada invertida trabalha as costas e bíceps, sendo fundamental para equilíbrio muscular.</p>
      
      <h2>Dicas Finais</h2>
      <p>Lembre-se sempre de aquecer antes dos exercícios e focar na técnica correta. A progressão deve ser gradual, respeitando os limites do seu corpo. Se possível, consulte um profissional de educação física para orientação personalizada.</p>
    `,
    category: 'Treino',
    author: 'João Paulo',
    authorRole: 'Diretor Técnico',
    date: '28 Nov 2024',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop',
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id)) || posts[0];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Blog
            </Link>
            
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {post.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mt-4 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto -mt-6"
          >
            <div className="aspect-video rounded-2xl overflow-hidden card-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Share2 className="w-5 h-5" />
                  <span>Compartilhar:</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Author */}
            <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{post.author}</h4>
                  <p className="text-muted-foreground text-sm">{post.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
