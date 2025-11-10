
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet, QrCode, Smartphone, ShoppingCart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, image, index }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col bg-[#1A1F2C] text-white">
      <AspectRatio ratio={16/9}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        />
      </AspectRatio>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h3 className="text-xl font-semibold uppercase">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4 text-sm flex-grow">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeatureCards = () => {
  const features = [
    {
      title: "Tablet Menu",
      description: "Our tablet menu app runs on both iOS and Android",
      icon: <Tablet size={20} className="text-yellow-400" />,
      image: "/lovable-uploads/fb7f055b-07a2-468d-aeda-247061053184.png"
    },
    {
      title: "QR Menu",
      description: "No APP required. Scan QR on mobile to see menu",
      icon: <QrCode size={20} className="text-yellow-400" />,
      image: "https://images.unsplash.com/photo-1576749872435-ff88a193f066?q=80&w=800&auto=format"
    },
    {
      title: "QR & Tablet Ordering",
      description: "Unique QR codes identify which table or room ordered",
      icon: <Smartphone size={20} className="text-yellow-400" />,
      image: "https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?q=80&w=800&auto=format"
    },
    {
      title: "Online Ordering",
      description: "Start receiving direct online orders with 0% commission",
      icon: <ShoppingCart size={20} className="text-yellow-400" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format"
    }
  ];


  return (
    <section className="py-16 bg-[#F5EDD1]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1F2C]">
            One platform for all your restaurant, café, and hotel needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
