import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-blue-800 py-24">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Data visualization background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800/90 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Data Entry Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            In today's data-driven business landscape, maintaining accurate, organized, and up-to-date information is critical to operational success. Our data entry services combine the efficiency of advanced technology with the accuracy and insight of skilled professionals.
          </p>
        </div>
      </div>
    </div>
  );
}