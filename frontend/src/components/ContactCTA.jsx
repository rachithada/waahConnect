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

    // Mock API call - simulating form submission
    setTimeout(() => {
      // Store in localStorage (mock database)
      const contacts = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      contacts.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('contact_submissions', JSON.stringify(contacts));
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      setIsLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'hello@waahconnect.com',
      link: 'mailto:hello@waahconnect.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 98765 43210',
      link: 'tel:+919876543210',
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Create Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to take your brand to the next level? Get in touch with us today and let's discuss how we can help you achieve your marketing goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-border"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.detail}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Media Mockup */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="flex space-x-4">
                {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social}
                  >
                    {social.charAt(0)}
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
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
                        className="h-12"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-12"
                        disabled={isLoading}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-12"
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12"
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
                      placeholder="Tell us about your project and goals..."
                      rows={6}
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full h-14 text-base transition-all duration-300 hover:scale-105"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
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
