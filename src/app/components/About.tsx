import { Code, Globe, Server, ShoppingCart, Lightbulb, BarChart } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Wat ik doe</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Ik help bedrijven met slimme digitale oplossingen - 
              van websites tot AI-gedreven applicaties en data-analyse.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card - Data Science & AI */}
            {/* <div className="md:col-span-8 relative overflow-hidden rounded-2xl group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1717501217912-933d2792d493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsfGVufDF8fHx8MTc2Nzg5NzE4OHww&ixlib=rb-4.1.0&q=80&w=1080)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90 group-hover:opacity-95 transition-opacity"></div>
              </div>
              <div className="relative z-10 p-8 md:p-12 text-white">
                <Brain className="w-14 h-14 mb-6 opacity-90" />
                <h3 className="text-3xl md:text-4xl mb-4">Data Science & AI</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-4">
                  Ik ontwikkel intelligente systemen met machine learning en AI. Van voorspellende modellen 
                  tot automatisering - data omzetten naar waardevolle inzichten en slimme beslissingen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Predictive Analytics</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">NLP</span>
                </div>
              </div>
            </div> */}

            {/* Medium card - Data Analytics */}
            <div className="md:col-span-4 relative overflow-hidden rounded-2xl group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2Nzg1MTMwM3ww&ixlib=rb-4.1.0&q=80&w=1080)' }}
              >
                <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/75 transition-colors"></div>
              </div>
              <div className="relative z-10 p-8 text-white">
                <BarChart className="w-10 h-10 mb-4 opacity-80" />
                <h3 className="text-2xl mb-3">Data Analyse</h3>
                <p className="text-slate-300">
                  Dashboards, rapportages en visualisaties die je data begrijpelijk maken.
                </p>
              </div>
            </div>

            {/* Large card - Website Development */}
            <div className="md:col-span-7 relative overflow-hidden rounded-2xl group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1627599936744-51d288f89af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc5MDc1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}
              >
                <div className="absolute inset-0 bg-gray-900/85 group-hover:bg-gray-900/80 transition-colors"></div>
              </div>
              <div className="relative z-10 p-8 md:p-12 text-white">
                <Globe className="w-12 h-12 mb-6 opacity-80" />
                <h3 className="text-3xl mb-4">Website Ontwikkeling</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Van landingspages tot complexe websites - ik bouw moderne, snelle sites 
                  die er goed uitzien op elk apparaat. Met aandacht voor detail en gebruiksvriendelijkheid.
                </p>
              </div>
            </div>

            {/* Medium card - Hosting */}
            <div className="md:col-span-5 relative overflow-hidden rounded-2xl group border-2 border-blue-100">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBjbG91ZCUyMGNvbXB1dGluZ3xlbnwxfHx8fDE3Njc4OTI2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}
              >
                <div className="absolute inset-0 bg-blue-600/75 group-hover:bg-blue-600/70 transition-colors"></div>
              </div>
              <div className="relative z-10 p-8 text-white">
                <Server className="w-10 h-10 mb-4" />
                <h3 className="text-2xl mb-3">Hosting & Beheer</h3>
                <p className="text-blue-50">
                  Betrouwbare hosting met SSL, e-mails en monitoring. Ik zorg dat je site 
                  altijd online is.
                </p>
              </div>
            </div>

            {/* Medium card - Booking Systems */}
            <div className="md:col-span-5 relative overflow-hidden rounded-2xl group border-2 border-green-100">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1484981184820-2e84ea0af397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHNjaGVkdWxpbmd8ZW58MXx8fHwxNzY3OTA3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080)' }}
              >
                <div className="absolute inset-0 bg-green-600/75 group-hover:bg-green-600/70 transition-colors"></div>
              </div>
              <div className="relative z-10 p-8 text-white">
                <ShoppingCart className="w-10 h-10 mb-4" />
                <h3 className="text-2xl mb-3">Reserverings&shy;systemen</h3>
                <p className="text-green-50">
                  Custom booking platforms voor restaurants, verhuur, en diensten. 
                  Met automatische bevestigingen en planning.
                </p>
              </div>
            </div>

            {/* Large card - Web Applications */}
            {/* <div className="md:col-span-7 relative overflow-hidden rounded-2xl group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3Njc5MDc1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 to-indigo-900/85 group-hover:opacity-90 transition-opacity"></div>
              </div>
              <div className="relative z-10 p-8 md:p-12 text-white">
                <Database className="w-12 h-12 mb-6 opacity-90" />
                <h3 className="text-3xl mb-4">Web Applicaties</h3>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Op maat gemaakte webapps voor bedrijfsprocessen. Dashboards, CRM systemen, 
                  datamanagement - wat je maar nodig hebt.
                </p>
              </div>
            </div> */}

            {/* Two small cards side by side */}
            <div className="md:col-span-6 relative overflow-hidden rounded-2xl group border-2 border-orange-100">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBpbnRlZ3JhdGlvbnxlbnwxfHx8fDE3Njc5MDc1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}
              >
                <div className="absolute inset-0 bg-orange-600/75 group-hover:bg-orange-600/70 transition-colors"></div>
              </div>
              <div className="relative z-10 p-6 text-white">
                <Code className="w-8 h-8 mb-3" />
                <h3 className="text-xl mb-2">API Ontwikkeling</h3>
                <p className="text-orange-50 text-sm">
                  Backend systemen en koppelingen tussen platforms.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 relative overflow-hidden rounded-2xl group border-2 border-yellow-100">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGxpZ2h0aW5nJTIwY29uY2VydHxlbnwxfHx8fDE3Njc5MDc1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}
              >
                <div className="absolute inset-0 bg-yellow-600/75 group-hover:bg-yellow-600/70 transition-colors"></div>
              </div>
              <div className="relative z-10 p-6 text-white">
                <Lightbulb className="w-8 h-8 mb-3" />
                <h3 className="text-xl mb-2">AV & Lichttechniek</h3>
                <p className="text-yellow-50 text-sm">
                  Ook beschikbaar voor evenementen en shows.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              Elk project is maatwerk - geen templates, maar oplossingen die echt bij jouw bedrijf passen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
