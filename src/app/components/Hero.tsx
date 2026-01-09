import { Code } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY3ODE2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' 
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex justify-center gap-4 mb-6">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <Code className="w-10 h-10" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          Developer & AI Specialist
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Slimme digitale oplossingen - van AI & data science tot websites en web applicaties
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Ook beschikbaar voor AV- en lichttechniek bij evenementen
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => scrollToSection('portfolio')}
          >
            Bekijk Portfolio
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => scrollToSection('contact')}
          >
            Neem Contact Op
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}