import React from 'react';
import {
  Megaphone,
  Calendar,
  TrendingUp,
  Video,
  Share2,
  BarChart3,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Influencer Campaigns',
      description:
        'End-to-end influencer marketing campaigns designed to amplify your brand message and reach your target audience effectively.',
      image: 'https://images.pexels.com/photos/19399494/pexels-photo-19399494.jpeg',
      features: ['Strategy Development', 'Influencer Selection', 'Content Creation', 'Campaign Management'],
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description:
        'Professional event hosting and management services, from product launches to brand activations and influencer meetups.',
      image: 'https://images.pexels.com/photos/3379257/pexels-photo-3379257.jpeg',
      features: ['Event Planning', 'Venue Management', 'Guest Coordination', 'Live Coverage'],
    },
    {
      icon: TrendingUp,
      title: 'Brand Partnerships',
      description:
        'Strategic brand collaborations that create win-win partnerships between your business and influential content creators.',
      image: 'https://images.pexels.com/photos/35575497/pexels-photo-35575497.jpeg',
      features: ['Partnership Strategy', 'Negotiation', 'Contract Management', 'Performance Tracking'],
    },
    {
      icon: Video,
      title: 'Content Production',
      description:
        'High-quality content creation for social media, including videos, photos, reels, and stories that resonate with your audience.',
      image: 'https://images.pexels.com/photos/4345410/pexels-photo-4345410.jpeg',
      features: ['Video Production', 'Photography', 'Editing', 'Content Strategy'],
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description:
        'Complete social media management services to build and maintain a strong presence across all major platforms.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      features: ['Account Management', 'Content Calendar', 'Community Engagement', 'Growth Strategies'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description:
        'Comprehensive analytics and performance tracking to measure ROI and optimize your influencer marketing campaigns.',
      image: 'https://images.pexels.com/photos/3689547/pexels-photo-3689547.jpeg',
      features: ['Performance Metrics', 'ROI Analysis', 'Competitor Analysis', 'Custom Reports'],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From strategy to execution, we offer comprehensive influencer marketing services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
