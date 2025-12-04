import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6"
            >
              <Flame className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              PRONTO PARA
              <br />
              TRANSFORMAR SUA VIDA?
            </h2>

            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Comece hoje mesmo sua jornada de transformação. A primeira semana é por nossa conta!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/matricula">
                <Button
                  variant="hero-outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Agende uma Visita Grátis
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-primary-foreground/60 text-sm">
              Sem compromisso • Cancele quando quiser
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
