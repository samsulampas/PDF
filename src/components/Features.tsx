import React from 'react';
import { Shield, Zap, FileText, Layout, Globe, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bank-Level Security",
      description: "Your files are protected with 256-bit SSL encryption and automatically deleted after conversion."
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Perfect Formatting",
      description: "Maintain original layout, images, tables, and fonts in your converted documents."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multiple Languages",
      description: "Support for documents in over 50 languages, including right-to-left scripts."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Processing",
      description: "Convert your files in seconds with our advanced processing technology."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Batch Conversion",
      description: "Convert multiple PDF files to Word format simultaneously to save time."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "OCR Technology",
      description: "Extract text from scanned PDFs with our advanced OCR technology."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Our Converter?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional-grade features for everyone, completely free
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;