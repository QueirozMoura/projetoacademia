import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold">ZOOMP</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforme seu corpo e sua mente. A Academia Zoomp oferece estrutura completa,
              profissionais qualificados e ambiente motivador para você alcançar seus objetivos.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Início', 'Planos', 'Sobre', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === 'início' ? '' : item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {['Musculação', 'Crossfit', 'Spinning', 'Funcional', 'Personal Trainer', 'Avaliação Física'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Av. Fitness, 1000 - Centro
                  <br />
                  São Paulo - SP, 01000-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm">contato@academiazoomp.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Academia Zoomp. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
