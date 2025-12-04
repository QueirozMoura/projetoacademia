import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dumbbell, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type UserType = 'aluno' | 'personal' | 'admin';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<UserType>('aluno');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isLogin ? 'Login realizado!' : 'Cadastro realizado!',
      description: 'Redirecionando para o dashboard...',
    });
  };

  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display text-3xl font-bold text-secondary-foreground">
                {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
              </h1>
              <p className="text-muted-foreground mt-2">
                {isLogin
                  ? 'Acesse sua conta para gerenciar seus treinos'
                  : 'Comece sua jornada de transformação'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border"
            >
              {/* User Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Tipo de conta
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'aluno', label: 'Aluno' },
                    { value: 'personal', label: 'Personal' },
                    { value: 'admin', label: 'Admin' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setUserType(type.value as UserType)}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        userType === type.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Seu nome"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg">
                  {isLogin ? 'Entrar' : 'Criar conta'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-primary font-medium hover:underline"
                  >
                    {isLogin ? 'Cadastre-se' : 'Faça login'}
                  </button>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center"
            >
              <Link to="/" className="text-muted-foreground text-sm hover:text-primary">
                ← Voltar para o site
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
