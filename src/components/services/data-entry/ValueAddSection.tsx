import React from 'react';
import { Bot, Users, Zap } from 'lucide-react';

export default function ValueAddSection() {
  const approaches = [
    {
      icon: Bot,
      title: "Advanced Technology",
      features: [
        "Automated Data Processing for large datasets",
        "OCR (Optical Character Recognition) technology",
        "Data Validation Tools for consistency"
      ]
    },
    {
      icon: Users,
      title: "Human Expertise",
      features: [
        "Contextual Understanding of complex data",
        "Quality Assurance and cross-checking",
        "Custom Formatting to meet requirements"
      ]
    },
    {
      icon: Zap,
      title: "Hybrid Approach",
      features: [
        "Faster turnaround times",
        "Enhanced quality control",
        "Cost-effective solutions"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How We Add Value</h2>
          <p className="mt-4 text-xl text-gray-600">
            We go beyond basic data entry to provide comprehensive solutions
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {approaches.map((approach) => (
            <div key={approach.title} className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <approach.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.title}</h3>
              <ul className="space-y-3">
                {approach.features.map((feature) => (
                  <li key={feature} className="text-gray-600 flex items-start">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}