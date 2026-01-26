import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import img1 from "../assets/img1.png"

export const Hero = () => {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                India's Leading Influencer Marketing Agency
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Promote Your Brand on Indore's Top City Pages
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className='font-extrabold text-2xl text-[#FF6BB5]'>Waah Connect</span> is the Best Influencer Marketing Agency for any Business in Indore.
              We connect brands with top influencers to create impactful campaigns that drive real results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => handleScroll('#contact')}
              >
                Start Your Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300"
                onClick={() => handleScroll('#portfolio')}
              >
                <Play className="mr-2 w-5 h-5" />
                View Our Work
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">City Pages</div>
              </div>
              <div className="text-center lg:text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Influencers</div>
              </div>
              <div className="text-center lg:text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">100M+</div>
                <div className="text-sm text-muted-foreground">Reach</div>
              </div>
            </div>
          </div>

          {/* Right Image/Video */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={img1}
                alt="Influencer Marketing"
                className="w-auto h-[20cm] object-cover"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
