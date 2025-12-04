import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';

const categories = ['Todos', 'Treino', 'Nutrição', 'Bem-estar', 'Dicas'];

const posts = [
  {
    id: 1,
    title: '10 Exercícios Essenciais para Iniciantes',
    excerpt: 'Comece sua jornada fitness com esses exercícios fundamentais que vão construir uma base sólida.',
    category: 'Treino',
    author: 'João Paulo',
    date: '28 Nov 2024',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Como Montar um Pré-Treino Natural',
    excerpt: 'Descubra os melhores alimentos para consumir antes do treino e maximizar seus resultados.',
    category: 'Nutrição',
    author: 'Mariana Costa',
    date: '25 Nov 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'A Importância do Descanso na Hipertrofia',
    excerpt: 'Entenda por que o descanso é tão importante quanto o treino para ganhar massa muscular.',
    category: 'Bem-estar',
    author: 'Ricardo Santos',
    date: '22 Nov 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'CrossFit: Mitos e Verdades',
    excerpt: 'Desmistificamos o CrossFit e mostramos os reais benefícios dessa modalidade intensa.',
    category: 'Treino',
    author: 'Fernanda Lima',
    date: '18 Nov 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Proteínas: Quanto Consumir Por Dia?',
    excerpt: 'Guia completo sobre consumo de proteínas para diferentes objetivos fitness.',
    category: 'Nutrição',
    author: 'Mariana Costa',
    date: '15 Nov 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: '5 Dicas para Manter a Motivação',
    excerpt: 'Estratégias comprovadas para manter a consistência nos treinos a longo prazo.',
    category: 'Dicas',
    author: 'João Paulo',
    date: '10 Nov 2024',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Blog Fitness
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary-foreground mt-4 mb-6">
              DICAS E <span className="text-gradient">CONTEÚDOS</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Artigos, dicas e novidades sobre treino, nutrição e bem-estar para 
              ajudar você a alcançar seus objetivos.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Nenhum artigo encontrado.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-card rounded-2xl overflow-hidden card-shadow border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
