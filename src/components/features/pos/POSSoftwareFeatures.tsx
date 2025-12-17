import React from "react";
import { CheckCircle, Laptop } from "lucide-react";

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center gap-2 mb-3">
      <CheckCircle size={18} className="text-green-500 shrink-0" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-swirl-gray leading-relaxed">{description}</p>
  </div>
);

const POSSoftwareFeatures = () => {
  const features = [
    {
      title: "Modern Design POS",
      description: "User-friendly design that's easy to learn and requires minimal training.",
    },
    {
      title: "Table Management",
      description: "Full control over every table. Assign tables, track status, and manage dining flow effortlessly.",
    },
    {
      title: "Offline Mode",
      description:
        "Keep billing even without internet. No downtime, no lost sales — our POS works offline & syncs when online.",
    },
    {
      title: "Inventory Tracking",
      description: "Real-time inventory management integrated with your menu items.",
    },
    {
      title: "Staff Management",
      description:
        "Manage staff without micromanaging. Roles, permissions, shifts, and performance — all in one place..",
    },
    {
      title: "Cloud Synchronization",
      description: "Access your data from anywhere with secure cloud storage and backups.",
    },
    {
      title: "Reporting & Analytics",
      description:
        "See what’s working. Fix what’s not. Live sales, item performance, staff insights — can be accessed remotely.",
    },
    {
      title: "Menu Management",
      description: "Update menus in seconds.Edit prices, items, modifiers, and availability instantly.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-light/30 to-purple/5 p-8 md:p-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <Laptop className="mr-3 text-purple" /> Powerful Software Features
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};

export default POSSoftwareFeatures;
