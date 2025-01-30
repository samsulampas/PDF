import React from 'react';
import { Users, FileCheck, Clock } from 'lucide-react';

const ConversionStats = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12" />
            </div>
            <div className="text-4xl font-bold mb-2">100K+</div>
            <div className="text-lg opacity-90">Happy Users</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FileCheck className="h-12 w-12" />
            </div>
            <div className="text-4xl font-bold mb-2">1M+</div>
            <div className="text-lg opacity-90">Files Converted</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12" />
            </div>
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-lg opacity-90">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionStats;