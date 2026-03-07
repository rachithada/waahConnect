import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      await res.json();

      toast.success("Message sent successfully! We'll get back to you soon.");

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    }

    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'waahindore09@gmail.com',
      link: 'mailto:waahindore09@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 92851 90453',
      link: 'tel:+919285190453',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Indore, Madhya Pradesh, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Create Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to take your brand to the next level? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <a href={info.link} className="text-muted-foreground hover:text-primary">
                        {info.detail}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid sm:grid-cols-2 gap-6">

                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        disabled={isLoading}
                        required
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
                        placeholder="john@example.com"
                        disabled={isLoading}
                        required
                      />
                    </div>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        disabled={isLoading}
                      />
                    </div>

                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full h-14">
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;