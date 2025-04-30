
import { 
  LayoutDashboard, ShoppingCart, BarChart, 
  CreditCard, Users, Package, Car, Calendar, FileText,
  ChefHat, Utensils, Bell
} from 'lucide-react';

export const products = [
  {
    id: 'digital-menu',
    title: 'Digital Menu',
    description: 'Create beautiful, interactive digital menus that are easy to update in real-time. Support multiple languages, currencies, and show nutritional information like calories and allergens.',
    icon: FileText,
    path: '/products/digital-menu',
    image: "/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png",
    features: [
      'Real-time updates', 
      'Multi-language support', 
      'Nutritional information', 
      'AI-generated descriptions'
    ],
    bgClass: "bg-purple-light/10"
  },
  {
    id: 'qr-ordering',
    title: 'QR Ordering',
    description: 'Contactless ordering solution where customers can scan QR codes, browse your menu, and place their orders directly from their device, with real-time status updates.',
    icon: ShoppingCart,
    path: '/products/qr-ordering',
    image: "/lovable-uploads/4127f4ed-f4a1-452d-bdba-5bc27d6fb8bc.png",
    features: [
      'Tableside ordering', 
      'Custom QR codes', 
      'Payment integration', 
      'Order tracking'
    ],
    bgClass: "bg-purple-light/10"
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Gain valuable insights about your business with our powerful analytics tools. Track sales, customer behavior, and menu performance with customizable dashboards.',
    icon: BarChart,
    path: '/products/analytics',
    image: "/lovable-uploads/35e9fd73-7370-41cc-89e5-6259df112af0.png",
    features: [
      'Real-time dashboards', 
      'Custom reports', 
      'Trend analysis', 
      'Data export'
    ],
    bgClass: "bg-gradient-to-br from-purple-light/30 to-white"
  },
  {
    id: 'pos',
    title: 'POS System',
    description: 'Modern point-of-sale system designed specifically for restaurant needs, with user-friendly interfaces and seamless integrations for both software and hardware solutions.',
    icon: CreditCard,
    path: '/products/pos',
    image: "/lovable-uploads/61104fed-106e-4e91-a301-9f0fd8b8cb4b.png",
    features: [
      'Table management', 
      'Split bills', 
      'Fast checkout', 
      'Employee access levels'
    ],
    bgClass: "bg-gradient-to-br from-purple-light/30 to-white"
  },
  {
    id: 'reports',
    title: 'Financial Reports',
    description: "Comprehensive financial reporting to track your restaurant's performance, with detailed P&L statements, cost analysis, and forecasting tools for data-driven decisions.",
    icon: LayoutDashboard,
    path: '/products/financial-reports',
    image: "/lovable-uploads/459383dc-eff1-410b-af47-ff49a9a0a01e.png",
    features: [
      'P&L statements', 
      'Cost analysis', 
      'Tax reporting', 
      'Financial forecasting'
    ]
  },
  {
    id: 'crm',
    title: 'CRM',
    description: 'Customer relationship management tools to build loyalty and drive repeat business through targeted marketing campaigns and personalized customer experiences.',
    icon: Users,
    path: '/products/crm',
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    features: [
      'Customer profiles', 
      'Loyalty programs', 
      'Email campaigns', 
      'Customer feedback'
    ]
  },
  {
    id: 'car-ordering',
    title: 'In-Car Ordering',
    description: 'Enable customers to order from their vehicles for pickup or drive-through service, optimizing your curbside operations and enhancing customer convenience.',
    icon: Car,
    path: '/products/ordering-from-car',
    image: "/lovable-uploads/74058c9d-fba3-4dc8-b1e2-5c34716bd074.png",
    features: [
      'GPS location tracking', 
      'Digital car hop', 
      'Order notifications', 
      'Payment processing'
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    description: 'Streamline staff payments and track labor costs efficiently, with time tracking, tax calculations, and direct deposit options for hassle-free payroll processing.',
    icon: Calendar,
    path: '/products/payroll-management',
    image: "/lovable-uploads/4a4a7e21-2319-4b47-89c2-c17befc8735c.png",
    features: [
      'Time tracking', 
      'Tax calculations', 
      'Direct deposit', 
      'Compliance reporting'
    ]
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Track stock levels, reduce waste, and optimize your purchasing with real-time inventory tracking, automated ordering, and comprehensive vendor management.',
    icon: Package,
    path: '/products/inventory-management',
    image: "/lovable-uploads/inventory_dash.png",
    features: [
      'Real-time tracking', 
      'Waste reduction', 
      'Automated ordering', 
      'Vendor management'
    ]
  },
  {
    id: 'kitchen-display',
    title: 'Kitchen Display System',
    description: 'Streamline kitchen operations with our advanced KDS solution. Improve efficiency, reduce errors, and enhance communication between front and back of house.',
    icon: ChefHat,
    path: '/products/kitchen-display',
    image: "/lovable-uploads/85df272f-78b0-4180-bd9e-a069e750623a.png",
    features: [
      'Real-time orders', 
      'Cooking timers', 
      'Station routing', 
      'Performance metrics'
    ]
  },
  {
    id: 'reservations',
    title: 'Reservations',
    description: 'Manage bookings and optimize table turnover with our advanced reservation system. Handle waitlists, send automated reminders, and collect guest preferences.',
    icon: Utensils,
    path: '/products/reservations',
    image: "/lovable-uploads/res.jpg",
    features: [
      'Online bookings', 
      'Table management', 
      'Guest profiles', 
      'Waitlist handling'
    ]
  }
];

export default products;
