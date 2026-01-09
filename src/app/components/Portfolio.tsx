import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'website' | 'webapp' | 'booking' | 'hosting' | 'ai' | 'av';
  description: string;
  image: string;
  tags: string[];
}

export function Portfolio() {
  const sliderRef = useRef<Slider>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'AI Chatbot voor Klantenservice',
      category: 'ai',
      description: 'Intelligente chatbot met natuurlijke taalverwerking voor een e-commerce platform. 24/7 klantenondersteuning met 85% automatische oplossing.',
      image: 'https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY3ODE2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['NLP', 'Python', 'TensorFlow', 'API']
    },
    {
      id: 2,
      title: 'Restaurant Reserveringssysteem',
      category: 'booking',
      description: 'Complete online reserveringsplatform voor restaurant met 200+ plaatsen. Real-time beschikbaarheid en automatische bevestigingen.',
      image: 'https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY3ODE2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Email API']
    },
    {
      id: 3,
      title: 'Predictive Maintenance Dashboard',
      category: 'ai',
      description: 'Machine learning model dat storingen voorspelt in industriële apparatuur. Dashboard met real-time monitoring en alerts.',
      image: 'https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY3ODE2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Machine Learning', 'Python', 'Data Analysis', 'React']
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'webapp',
      description: 'Webshop met productbeheer, winkelwagen, checkout en ordertracking. Inclusief admin dashboard.',
      image: 'https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY3ODE2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'API Integration']
    },
    {
      id: 5,
      title: 'Bedrijfswebsite met CMS',
      category: 'website',
      description: 'Moderne website voor lokaal bedrijf met content management systeem voor eenvoudig zelf beheren.',
      image: 'https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY3ODE2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['WordPress', 'Custom Theme', 'SEO', 'Responsive']
    },
    {
      id: 6,
      title: 'Sales Forecasting Tool',
      category: 'ai',
      description: 'AI-gedreven verkoopvoorspelling gebaseerd op historische data en markttrends. Helpt bedrijven bij voorraadplanning.',
      image: 'https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY3ODE2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Time Series', 'Python', 'Scikit-learn', 'Visualization']
    },
    {
      id: 7,
      title: 'Event Ticketing Platform',
      category: 'booking',
      description: 'Ticketverkoopplatform voor evenementen met QR-code validatie en real-time rapportage.',
      image: 'https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY3ODE2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Payment Gateway', 'QR Codes', 'Analytics']
    },
    {
      id: 8,
      title: 'Festival Hoofdpodium',
      category: 'av',
      description: 'Complete lichtontwerp en uitvoering voor festival met 5000+ bezoekers.',
      image: 'https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGxpZ2h0aW5nJTIwY29uY2VydHxlbnwxfHx8fDE3Njc3ODIzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['DMX', 'Lighting Design', 'Stage Production']
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6">Portfolio & Referenties</h2>
          <p className="text-lg text-gray-600">
            Van AI-oplossingen tot websites - bekijk een selectie van mijn recente projecten
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => sliderRef.current?.slickPrev()}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => sliderRef.current?.slickNext()}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {portfolioItems.map((item) => (
              <div key={item.id} className="px-3">
                <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl text-white mb-2">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{item.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}