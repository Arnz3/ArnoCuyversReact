import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, CircleX } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);
    setFailed(false);
    // form submission logica 
    try {
      const response = await fetch('http://localhost:8080/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: `${formData.name}`,
          email: `${formData.email}`, 
          tel: `${formData.phone}`, 
          project: `${formData.projectType}`, 
          message: `${formData.message}`
        }), // Verstuur als JSON object
      });

      const data = await response.json();
      
      // create succes message
      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      } else {
        setFailed(true);
      }
    } catch (error) {
      setFailed(true);
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

              {/* TODO: fix checkbox speech and reset on submit */}
              <div className="space-y-2">
                <Checkbox id="toestemming" className='m-3' required/>
                <span className="text-sm text-gray-600">
                  Ik geef toestemming dat deze website mijn persoonlijke gegevens mag bewaren
                </span>
              </div>

              <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800">
                <Send className="w-4 h-4 mr-2" />
                Verstuur Bericht
              </Button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-in zoom-in duration-300 delay-150">
                        <CheckCircle2 className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-green-900 mb-2">
                        Bericht succesvol verzonden! 🎉
                      </h4>
                      <p className="text-green-800 mb-3">
                        Bedankt voor je interesse! Ik heb je bericht ontvangen en zal zo snel mogelijk reageren.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* Error Message */}
              {failed && (
                <div className="mt-6 p-6 bg-gradient-to-br from-pink-50 to-red-50 border-2 border-red-200 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-in zoom-in duration-300 delay-150">
                        <CircleX className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-red-900 mb-2">
                        Er is iets mis gegaan!
                      </h4>
                      <p className="text-red-800 mb-3">
                        Probeer het nog eens of contacteer de eigenaar op een andere manier.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}