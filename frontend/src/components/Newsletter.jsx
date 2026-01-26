import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);

    // Mock API call - simulating newsletter signup
    setTimeout(() => {
      // Store in localStorage (mock database)
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
        toast.success('Successfully subscribed to our newsletter!');
        setEmail('');
      } else {
        toast.info('You are already subscribed!');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-2xl">
            <Send className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold">
            Stay Updated with Latest Trends
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Subscribe to our newsletter and get exclusive insights, case studies, and influencer marketing tips delivered to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 px-6 bg-primary-foreground text-foreground border-0 rounded-full text-base"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-14 font-semibold transition-all duration-300 hover:scale-105"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-sm text-primary-foreground/70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
