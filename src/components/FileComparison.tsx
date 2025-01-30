import React from 'react';
import { FileCheck } from 'lucide-react';

type ConversionType = 'pdf-to-word' | 'word-to-pdf';

interface FileComparisonProps {
  conversionType?: ConversionType;
}

const FileComparison: React.FC<FileComparisonProps> = ({ conversionType = 'pdf-to-word' }) => {
  const comparisons = {
    'pdf-to-word': {
      before: {
        title: 'Original PDF',
        image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?auto=format&fit=crop&q=80',
        features: [
          'Static, non-editable format',
          'Fixed layout and formatting'
        ]
      },
      after: {
        title: 'Converted Word Document',
        image: 'https://images.unsplash.com/photo-1591522810850-58128c5fb089?auto=format&fit=crop&q=80',
        features: [
          'Fully editable content',
          'Preserved formatting'
        ]
      }
    },
    'word-to-pdf': {
      before: {
        title: 'Original Word Document',
        image: 'https://images.unsplash.com/photo-1591522810850-58128c5fb089?auto=format&fit=crop&q=80',
        features: [
          'Editable format',
          'May have compatibility issues'
        ]
      },
      after: {
        title: 'Converted PDF',
        image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?auto=format&fit=crop&q=80',
        features: [
          'Universal compatibility',
          'Professional presentation'
        ]
      }
    }
  };

  const comparison = comparisons[conversionType];

  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Before and After Comparison
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{comparison.before.title}</h3>
            <img 
              src={comparison.before.image}
              alt={comparison.before.title}
              className="w-full rounded-lg shadow-md mb-4"
            />
            <ul className="space-y-2">
              {comparison.before.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <FileCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{comparison.after.title}</h3>
            <img 
              src={comparison.after.image}
              alt={comparison.after.title}
              className="w-full rounded-lg shadow-md mb-4"
            />
            <ul className="space-y-2">
              {comparison.after.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <FileCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileComparison;