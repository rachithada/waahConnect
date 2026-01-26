import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Heart, Share2, ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'food', label: 'Food & Beverage' },
    { id: 'tech', label: 'Technology' },
    { id: 'lifestyle', label: 'Lifestyle' },
  ];

  const projects = [
    {
      title: 'Fashion Brand Launch',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/8117815/pexels-photo-8117815.jpeg',
      stats: { reach: '2.5M', engagement: '8.5%', conversions: '15K' },
      description: 'Multi-influencer campaign for luxury fashion brand launch',
    },
    {
      title: 'Restaurant Opening',
      category: 'food',
      image: 'https://images.pexels.com/photos/3379257/pexels-photo-3379257.jpeg',
      stats: { reach: '1.8M', engagement: '12%', conversions: '8K' },
      description: 'Food blogger collaboration for restaurant grand opening',
    },
    {
      title: 'Tech Product Launch',
      category: 'tech',
      image: 'https://images.pexels.com/photos/4345410/pexels-photo-4345410.jpeg',
      stats: { reach: '3.2M', engagement: '6.8%', conversions: '25K' },
      description: 'Tech influencer campaign for gadget launch',
    },
    {
      title: 'Lifestyle Brand Campaign',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/19399494/pexels-photo-19399494.jpeg',
      stats: { reach: '1.5M', engagement: '10.2%', conversions: '12K' },
      description: 'Lifestyle influencer series for wellness brand',
    },
    {
      title: 'Beauty Product Promotion',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg',
      stats: { reach: '2.1M', engagement: '9.5%', conversions: '18K' },
      description: 'Beauty influencer collaboration for skincare line',
    },
    {
      title: 'Event Coverage',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/3689547/pexels-photo-3689547.jpeg',
      stats: { reach: '4.2M', engagement: '15.3%', conversions: '35K' },
      description: 'Live event coverage with multiple influencers',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our portfolio of successful influencer marketing campaigns that have delivered exceptional results for brands.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(category.id)}
              className={`rounded-full ${
                activeFilter === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border-border hover:border-primary'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/50 to-transparent opacity-60"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full"
                  >
                    <ExternalLink className="mr-2 w-5 h-5" />
                    View Case Study
                  </Button>
                </div>

                {/* Category Badge */}
                <Badge className="absolute top-4 right-4 bg-card text-foreground capitalize">
                  {project.category}
                </Badge>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {project.stats.reach}
                    </div>
                    <div className="text-xs text-muted-foreground">Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {project.stats.engagement}
                    </div>
                    <div className="text-xs text-muted-foreground">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {project.stats.conversions}
                    </div>
                    <div className="text-xs text-muted-foreground">Conversions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
