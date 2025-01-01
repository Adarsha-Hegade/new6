import React from 'react';
import { FileText, Database, Eraser, TableProperties, RefreshCcw, Receipt } from 'lucide-react';

export default function ServicesOffered() {
  const services = [
    {
      icon: FileText,
      title: "Manual Data Entry",
      description: "Keying in data from physical or digital sources with precision"
    },
    {
      icon: Database,
      title: "Data Digitization",
      description: "Converting paper-based records into digital formats for easy access"
    },
    {
      icon: Eraser,
      title: "Data Cleaning",
      description: "Correcting errors and inconsistencies in datasets"
    },
    {
      icon: TableProperties,
      title: "Data Formatting",
      description: "Organizing information to suit specific business needs"
    },
    {
      icon: RefreshCcw,
      title: "Database Updates",
      description: "Regularly updating CRM systems and inventory records"
    },
    {
      icon: Receipt,
      title: "Invoice Processing",
      description: "Managing financial information accurately and efficiently"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What We Handle</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive data entry services for all your business needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="relative bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}