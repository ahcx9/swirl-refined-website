import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
import MenuDeviceShowcase from '@/components/features/digital-menu/MenuDeviceShowcase';

const MenuHero = () => {

  return (
    <section className="relative pt-32 md:pt-36 pb-12 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      {/* Hero device showcase */}
      <MenuDeviceShowcase />
    </section>
  );
};

export default MenuHero;
