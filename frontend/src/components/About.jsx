import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Creative Strategy',
      description: 'Data-driven strategies tailored to your brand goals and target audience.',
    },
    {
      icon: Users,
      title: 'Influencer Network',
      description: 'Access to 10,000+ verified influencers across all major platforms.',
    },
    {
      icon: Zap,
      title: 'Quick Execution',
      description: 'Launch campaigns in days, not weeks, with our streamlined process.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of delivering 5x ROI on average for our clients.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">WAAH CONNECT?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not just another marketing agency. We're your strategic partner in building authentic connections between your brand and your audience through the power of influencer marketing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About Content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Transforming Brands Through Authentic Influence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At WAAH CONNECT, we believe in the power of authentic storytelling.
              Based in Indore, India, we've helped hundreds of brands connect with
              their ideal customers through strategic influencer partnerships.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of marketing experts, content creators, and data analysts
              work together to craft campaigns that don't just go viral—they
              drive real business results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Influencer Marketing</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Brand Partnerships</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Event Management</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1651078977658-d5f963442f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIwNyUyMHNlaXJlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
