import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
    services: [
      { label: 'Influencer Campaigns', href: '#services' },
      { label: 'Event Management', href: '#services' },
      { label: 'Brand Partnerships', href: '#services' },
      { label: 'Content Production', href: '#services' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <img
              src="https://customer-assets.emergentagent.com/job_73a372fa-cf36-4bb4-9964-6533e96fbc40/artifacts/h6m61r5s_waah.png"
              alt="WAAH CONNECT"
              className="h-12 w-auto"
            />
            <p className="text-accent-foreground/80 leading-relaxed max-w-md">
              India's leading influencer marketing agency based in Indore. We connect brands with top influencers to create impactful campaigns that drive real results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-accent-foreground/80">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@waahconnect.com" className="hover:text-primary transition-colors">
                  waahindore09@gmai.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-accent-foreground/80">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 92851 90453
                </a>
              </div>
              <div className="flex items-center space-x-3 text-accent-foreground/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent-foreground">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-accent-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-accent-foreground/60 text-sm">
            © {currentYear} WAAH CONNECT. All rights reserved.
          </p>
          <p className="text-accent-foreground/60 text-sm">
            Made with ❤️ in Indore, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
