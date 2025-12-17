import React from 'react';
import { Monitor, Printer, Laptop, Scan, Square, Tv } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CustomCTAButton from '@/components/CustomCTAButton';
const HomeHardwareSection = () => {
  const hardwareFeatures = [{
    icon: Monitor,
    title: "Point-of-Sale Systems",
    description: "Advanced POS terminals with touchscreen interfaces"
  }, {
    icon: Printer,
    title: "Thermal Printers",
    description: "High-speed receipt and kitchen ticket printing"
  }, {
    icon: Laptop,
    title: "Kitchen Display Screens",
    description: "Real-time order tracking for kitchen staff"
  }, {
    icon: Square,
    title: "Self-Service Kiosks",
    description: "Customer-facing ordering kiosks"
  }, {
    icon: Scan,
    title: "Barcode Scanners",
    description: "Fast and accurate inventory scanning"
  }, {
    icon: Tv,
    title: "Menu Display Screens",
    description: "Digital menu boards for customer viewing"
  }];
  return <section className="py-16 overflow-hidden relative bg-white">
      <div className="container-custom relative">
        
      </div>
    </section>;
};
export default HomeHardwareSection;