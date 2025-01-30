import React from 'react';
import SEO from '../components/SEO';
import { Shield, Zap, FileText } from 'lucide-react';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about bruiser.xyz and our mission to provide the best PDF to Word conversion service."
        canonical="/about"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to making document conversion simple, secure, and accurate for everyone.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To provide the most reliable and secure PDF to Word conversion service while maintaining document integrity.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Zap className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Our Technology</h3>
              <p className="mt-2 text-gray-600">
                We use advanced conversion algorithms to ensure the highest quality output while maintaining speed and efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <FileText className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Our Promise</h3>
              <p className="mt-2 text-gray-600">
                We're committed to providing a free, reliable service while protecting your privacy and data security.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Story</h2>
          <div className="mt-6 prose prose-indigo mx-auto">
            <p>
              Founded in 2024, bruiser.xyz was created to address the growing need for reliable and secure document conversion tools. We understood the frustration of losing formatting when converting PDFs to Word documents, and we set out to create a solution that would maintain document integrity while being easy to use.
            </p>
            <p>
              Our team consists of document processing experts and software engineers who are passionate about creating the best possible conversion experience. We've developed proprietary technology that ensures accurate conversion while maintaining the security and privacy of your documents.
            </p>
            <p>
              Today, we serve users from around the world, helping them convert their documents quickly and accurately. We're constantly improving our service based on user feedback and technological advancements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;