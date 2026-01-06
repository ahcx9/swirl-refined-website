import React from 'react';
import { Package, ClipboardList, AlertTriangle, RefreshCw, Truck, Timer, MapPin, Building2 } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const InventoryMockup = () => {
  const { amounts } = useCurrency();

  const metrics = [
    { 
      label: 'Inventory on hand', 
      value: amounts.inventoryOnHand, 
      subtext: '2 active storage locations',
      icon: Package,
      highlight: true 
    },
    { 
      label: 'PO fill rate', 
      value: '40.3%', 
      subtext: 'Includes partially received purchase orders',
      icon: ClipboardList 
    },
    { 
      label: 'Items below par', 
      value: '0', 
      subtext: 'Days of cover under 3',
      icon: AlertTriangle 
    },
    { 
      label: 'Requisitions waiting approval', 
      value: '0', 
      subtext: 'Approvals older than 12 hours should be prioritised',
      icon: RefreshCw 
    },
    { 
      label: 'Transfers in motion', 
      value: '0', 
      subtext: 'Orders still in-transit or awaiting receipt',
      icon: Truck 
    },
    { 
      label: 'OTIF performance', 
      value: '0%', 
      subtext: 'On-time in-full vs commitment',
      icon: Timer 
    },
  ];

  const locations = [
    { 
      name: 'Abu Dhabi Branch', 
      type: 'BRANCH BACKSTORE', 
      typeStyle: 'bg-gray-800 text-white',
      scope: 'Branch only', 
      scopeStyle: 'border border-gray-300 text-gray-600',
      branch: 'Abu Dhabi · Swirl Cafe' 
    },
    { 
      name: 'Central Kitchen', 
      type: 'CENTRAL WAREHOUSE', 
      typeStyle: 'bg-gray-800 text-white',
      scope: 'Shared', 
      scopeStyle: 'bg-gray-800 text-white',
      branch: '—' 
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Metrics Dashboard */}
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">Inventory Overview</h3>
            <p className="text-xs md:text-sm text-gray-500">Real-time metrics across all locations</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-green-700">Live</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className={`relative p-3 md:p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                  metric.highlight 
                    ? 'bg-primary/5 border-primary/20' 
                    : 'bg-gray-50 border-gray-100 hover:border-primary/30'
                }`}
              >
                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center mb-2 md:mb-3 ${
                  metric.highlight ? 'bg-primary/10' : 'bg-gray-200/50'
                }`}>
                  <metric.icon className={`w-3 h-3 md:w-4 md:h-4 ${metric.highlight ? 'text-primary' : 'text-gray-600'}`} />
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 mb-1">{metric.label}</p>
                <p className={`text-base md:text-xl font-bold ${metric.highlight ? 'text-primary' : 'text-gray-900'}`}>
                  {metric.value}
                </p>
                <p className="text-[9px] md:text-[10px] text-gray-400 mt-1 leading-tight">{metric.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Directory */}
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-100">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">Location Directory</h3>
              <p className="text-xs md:text-sm text-gray-500">2 total · 1 branch-only location</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="text-left px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">Scope</th>
                <th className="text-left px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">Branch</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                      </div>
                      <span className="font-medium text-gray-900 text-xs md:text-sm">{location.name}</span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <span className={`inline-block px-2 md:px-2.5 py-0.5 md:py-1 rounded text-[9px] md:text-[10px] font-semibold uppercase tracking-wide ${location.typeStyle}`}>
                      {location.type}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <span className={`inline-block px-2 md:px-2.5 py-0.5 md:py-1 rounded text-[9px] md:text-[10px] font-medium ${location.scopeStyle}`}>
                      {location.scope}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600">{location.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decorative floating badge */}
      <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-lg hidden md:block">
        Real-time Data
      </div>
    </div>
  );
};

export default InventoryMockup;