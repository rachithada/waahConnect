import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Influencers',
      description: 'Verified influencer network',
    },
    {
      icon: TrendingUp,
      value: '500+',
      label: 'Campaigns',
      description: 'Successfully executed',
    },
    {
      icon: Award,
      value: '200+',
      label: 'Happy Clients',
      description: 'Across industries',
    },
    {
      icon: Globe,
      value: '50M+',
      label: 'Total Reach',
      description: 'Cumulative audience',
    },
  ];

  return (
    <section
      id="stats-section"
      className="py-20 lg:py-32 bg-accent text-accent-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-accent-foreground">
            Our Impact in <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-lg text-accent-foreground/80 leading-relaxed">
            Real results that speak for themselves. We're proud of the milestones we've achieved with our clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center space-y-4 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-accent-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-accent-foreground/70">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
