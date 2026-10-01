import React from "react";
import { Truck, RotateCcw, ShieldCheck, CreditCard } from "lucide-react";

const WhyBuy = () => {
  return (
    <section className="w-full bg-gray-50/70 py-20 px-6 flex flex-col items-center">
      <div className="max-w-325 w-full mx-auto flex flex-col items-center">
        
       
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16 text-center tracking-tight">
          Why buy from Meta
        </h2>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
         
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1">
            <div className="text-blue-600 mb-6">
              <Truck className="w-8 h-8 stroke-2" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Free 2-day delivery
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get free 2-day shipping on Meta Glasses, Meta Quest, Ray-Ban Meta and Oakley Meta.
            </p>
          </div>

          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1">
            <div className="text-blue-600 mb-6">
              <RotateCcw className="w-8 h-8 stroke-2" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Free 30-day returns
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Change your mind? Return your product within 30 days with no shipping fees attached.
            </p>
          </div>

        
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1">
            <div className="text-blue-600 mb-6">
              <ShieldCheck className="w-8 h-8 stroke-2" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Worry-free warranty
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Products that come with peace of mind. One-year warranty included.
            </p>
          </div>

          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1">
            <div className="text-blue-600 mb-6">
              <CreditCard className="w-8 h-8 stroke-2" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Buy now, pay later
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Payment plans with 0% APR for as low as $19.99 USD/month‡.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyBuy;