
import React from 'react';

const TrustedRestaurants = () => {
  const logos = [
    {
      src: "/lovable-uploads/a8754738-56a4-4a8c-9f5c-3e927d004034.png",
      alt: "Taste of Tongue"
    },
    {
      src: "/lovable-uploads/b2a2c52b-6298-4bda-8fd2-e0cab6171584.png",
      alt: "Garage Cafe"
    },
    {
      src: "/lovable-uploads/00599c71-eabf-4011-acfc-0ee7a9aca669.png",
      alt: "Foodbook Restaurant"
    },
    {
      src: "/lovable-uploads/9c58af8c-a78c-4160-a783-7f54412c5b7b.png",
      alt: "Bombay Restaurant & Cafe"
    },
    {
      src: "/lovable-uploads/9000dd52-fbe9-4430-8c38-eb0ab5e87e57.png",
      alt: "Seern Restaurant"
    },
    {
      src: "/lovable-uploads/c94d5f7d-130d-41cd-beb1-b2e68c9cbb68.png",
      alt: "The Centurion"
    },
    {
      src: "/lovable-uploads/2bdc3ab8-118a-4248-ae68-ed6d6883caf8.png",
      alt: "Food Book"
    },
    {
      src: "/lovable-uploads/8640f632-7915-47fa-b872-fc41d1a44c0b.png",
      alt: "Al-Baik"
    },
    {
      src: "/lovable-uploads/14839f2a-a0c1-41c9-be9b-29e27db33069.png",
      alt: "Shibara"
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container-custom">
        <h3 className="text-xl font-medium text-center mb-8 text-swirl-gray">Trusted by Restaurants Worldwide</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {logos.map((logo, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-[130px] h-[130px] md:w-[150px] md:h-[150px] flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedRestaurants;
