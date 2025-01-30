import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Our privacy policy explains how we handle your data and protect your privacy."
        canonical="/privacy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-indigo">
          <p>Last updated: March 10, 2024</p>

          <h2>1. Introduction</h2>
          <p>
            At bruiser.xyz, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our PDF to Word conversion service.
          </p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li>Files you upload for conversion</li>
            <li>Email address (if provided)</li>
            <li>Usage data and analytics</li>
            <li>IP address and browser information</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul>
            <li>Provide our PDF to Word conversion service</li>
            <li>Improve our service</li>
            <li>Communicate with you about our service</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h2>4. File Security</h2>
          <p>
            Your files are:
          </p>
          <ul>
            <li>Encrypted during transmission</li>
            <li>Automatically deleted after 2 hours</li>
            <li>Never shared with third parties</li>
            <li>Processed on secure servers</li>
          </ul>

          <h2>5. Data Storage</h2>
          <p>
            We store your files temporarily for processing purposes only. All files are automatically deleted after 2 hours to ensure your privacy.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Request data portability</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at privacy@bruiser.xyz.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;