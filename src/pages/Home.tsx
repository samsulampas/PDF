import React, { useState } from 'react';
import { Upload, FileText, Shield, Zap, SwitchCamera } from 'lucide-react';
import FileComparison from '../components/FileComparison';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ConversionStats from '../components/ConversionStats';
import SEO from '../components/SEO';

type ConversionType = 'pdf-to-word' | 'word-to-pdf';

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [conversionType, setConversionType] = useState<ConversionType>('pdf-to-word');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleConvert = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setConverting(true);
    // Simulated conversion delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setConverting(false);
    // In a real implementation, you would handle the file conversion here
  };

  const acceptedFiles = {
    'pdf-to-word': '.pdf',
    'word-to-pdf': '.doc,.docx'
  };

  const titles = {
    'pdf-to-word': 'Convert PDF to Word',
    'word-to-pdf': 'Convert Word to PDF'
  };

  const descriptions = {
    'pdf-to-word': 'The fastest and most accurate PDF to Word converter online.',
    'word-to-pdf': 'Convert Word documents to PDF with perfect formatting.'
  };

  return (
    <>
      <SEO
        title={`${titles[conversionType]} - Free Online Tool`}
        description={`${descriptions[conversionType]} Fast, secure, and easy to use.`}
        canonical="/"
      />
      
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex rounded-lg bg-white dark:bg-gray-800 p-1 mb-8">
              <button
                onClick={() => setConversionType('pdf-to-word')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  conversionType === 'pdf-to-word'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                PDF to Word
              </button>
              <button
                onClick={() => setConversionType('word-to-pdf')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  conversionType === 'word-to-pdf'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                Word to PDF
              </button>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              {titles[conversionType]}
              <span className="block text-indigo-600 dark:text-indigo-400">in Seconds</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {descriptions[conversionType]} 100% free and secure.
            </p>
          </div>

          <div className="mt-10">
            <form onSubmit={handleConvert} className="max-w-xl mx-auto">
              <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-lg bg-white dark:bg-gray-800">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" />
                  <div className="flex text-sm text-gray-600 dark:text-gray-400">
                    <label className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept={acceptedFiles[conversionType]}
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {conversionType === 'pdf-to-word' ? 'PDF' : 'Word'} up to 10MB
                  </p>
                </div>
              </div>

              {file && (
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={converting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                  >
                    {converting ? 'Converting...' : `Convert to ${conversionType === 'pdf-to-word' ? 'Word' : 'PDF'}`}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <ConversionStats />
      <HowItWorks conversionType={conversionType} />
      <Features />
      <FileComparison conversionType={conversionType} />
      <Testimonials />
      <FAQ conversionType={conversionType} />
    </>
  );
};

export default Home;