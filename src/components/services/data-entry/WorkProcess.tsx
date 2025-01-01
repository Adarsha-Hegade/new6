import React from 'react';
import { ClipboardList, Settings, CheckSquare, MessageSquare } from 'lucide-react';

export default function WorkProcess() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Understanding Your Needs",
      description: "Detailed consultation to understand your requirements and challenges"
    },
    {
      icon: Settings,
      title: "Custom Workflow Design",
      description: "Tailored workflow balancing technology and human expertise"
    },
    {
      icon: CheckSquare,
      title: "Execution & QA",
      description: "Data processing with multiple validation checks"
    },
    {
      icon: MessageSquare,
      title: "Delivery & Feedback",
      description: "Final delivery and continuous improvement based on feedback"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How We Work</h2>
          <p className="mt-4 text-xl text-gray-600">
            Our proven process ensures quality and efficiency
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-blue-200" />
                )}
                <div className="relative bg-white rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}