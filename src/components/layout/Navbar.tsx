import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/planos', label: 'Planos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Dumbbell className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl font-bold text-foreground">
            ZOOMP
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'font-body font-medium text-sm uppercase tracking-wider transition-colors relative group',
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              )}
            >
              {link.label}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300',
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>
          <Link to="/login">
            <Button variant="outline" size="sm">
              Entrar
            </Button>
          </Link>
          <Link to="/matricula">
            <Button size="sm">Matricule-se</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 border-b border-border' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'font-body font-medium text-sm uppercase tracking-wider py-2',
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Entrar
              </Button>
            </Link>
            <Link to="/matricula" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Matricule-se</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
