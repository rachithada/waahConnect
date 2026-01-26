import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'CEO, Fashion Forward',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'WAAH CONNECT transformed our brand visibility! Their strategic influencer partnerships helped us reach 3 million potential customers and increase sales by 250% in just 3 months.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Marketing Director, TechGrow',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      rating: 5,
      text: 'The team\'s expertise in influencer marketing is unmatched. They delivered exceptional results for our product launch, exceeding all our KPIs. Highly recommended!',
    },
    {
      name: 'Ananya Patel',
      role: 'Founder, Wellness Hub',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      rating: 5,
      text: 'Professional, creative, and results-driven. WAAH CONNECT understood our brand perfectly and connected us with the right influencers. Our engagement rates skyrocketed!',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with WAAH CONNECT.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-border"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-16 h-16" fill="currentColor" />
              </div>

              <CardContent className="p-6 space-y-4 relative z-10">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
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

export default Testimonials;
