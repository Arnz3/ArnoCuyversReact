import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} Web Developer & Digital Solutions</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>Gebouwd met</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>voor het web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}