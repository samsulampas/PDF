import React from 'react';
import { Upload, Settings, Download } from 'lucide-react';

type ConversionType = 'pdf-to-word' | 'word-to-pdf';

interface HowItWorksProps {
  conversionType?: ConversionType;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ conversionType = 'pdf-to-word' }) => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: `Upload ${conversionType === 'pdf-to-word' ? 'PDF' : 'Word'}`,
      description: `Select your ${conversionType === 'pdf-to-word' ? 'PDF' : 'Word'} file or drag and drop it into the conversion area`
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Convert",
      description: "Our system will process your file while maintaining formatting"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download",
      description: `Get your converted ${conversionType === 'pdf-to-word' ? 'Word document' : 'PDF file'} ready for use`
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Convert your {conversionType === 'pdf-to-word' ? 'PDF to Word' : 'Word to PDF'} in three simple steps
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="flex justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;