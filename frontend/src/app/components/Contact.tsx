import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // form submission logica 
    try {
      console.log(formData.email)
      const response = await fetch('http://localhost:8080/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: `${formData.email}` }), // Verstuur als JSON object
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      } else {
        toast.error('Oeps er ging iets mis!');
      }
    } catch (error) {
      toast.error('Server niet bereikbaar.');
      console.log(error);
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@arnocuyvers.be',
      link: 'mailto:info@arnocuyvers.be'
    },
    {
      icon: Phone,
      title: 'Telefoon',
      value: '+32 468 34 84 34',
      link: 'tel:+32468348434'
    },
    {
      icon: MapPin,
      title: 'Locatie',
      value: 'Middelkerke, Belgie',
      link: '#contact'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6">Start Jouw Project</h2>
          <p className="text-lg text-gray-600">
            Klaar om jouw digitale aanwezigheid naar een hoger niveau te tillen? Laten we in gesprek gaan!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black text-white rounded-lg">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="mb-1">{info.title}</h3>
                    <a 
                      href={info.link}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-black text-white">
              <h3 className="mb-2">Diensten</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                {/* <li>• AI & Data Science</li> */}
                <li>• Website ontwikkeling</li>
                {/* <li>• Web applicaties</li> */}
                <li>• Reserveringssystemen</li>
                <li>• Website hosting</li>
                <li>• Data Analyse</li>
                <li>• AV & Lichttechniek</li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Naam *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jouw naam"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jouw@email.nl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+32 412 34 56 78"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType">Type Project</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecteer...</option>
                    {/* <option value="ai">AI & Data Science</option> */}
                    <option value="website">Website</option>
                    {/* <option value="webapp">Web Applicatie</option> */}
                    <option value="booking">Reserveringssysteem</option>
                    <option value="hosting">Hosting & Beheer</option>
                    <option value="av">AV & Lichttechniek</option>
                    <option value="other">Anders</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Bericht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Vertel over je project of vraag..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800">
                <Send className="w-4 h-4 mr-2" />
                Verstuur Bericht
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}