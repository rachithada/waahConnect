import React from 'react';

export const ClientLogos = () => {
  // Mock client logos - in a real scenario, these would be actual client logos
  const clients = [
    { name: 'Fashion Brand', color: 'hsl(330 100% 71%)' },
    { name: 'Tech Corp', color: 'hsl(0 0% 20%)' },
    { name: 'Food Chain', color: 'hsl(330 100% 71%)' },
    { name: 'Lifestyle Co', color: 'hsl(0 0% 20%)' },
    { name: 'Beauty Brand', color: 'hsl(330 100% 71%)' },
    { name: 'Wellness Hub', color: 'hsl(0 0% 20%)' },
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
            Trusted by Leading Brands
          </h3>
          <p className="text-muted-foreground">
            Join 200+ brands that trust WAAH CONNECT for their influencer marketing needs
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center">
                <div
                  className="text-3xl font-bold mb-1 transition-colors duration-300"
                  style={{ color: client.color }}
                >
                  {client.name.split(' ').map(word => word.charAt(0)).join('')}
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
