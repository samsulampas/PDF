import React from 'react';
import SEO from '../components/SEO';

const DMCA = () => {
  return (
    <>
      <SEO 
        title="DMCA Policy"
        description="Our DMCA policy outlines how we handle copyright infringement claims."
        canonical="/dmca"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">DMCA Policy</h1>
        
        <div className="prose prose-indigo">
          <p>Last updated: March 10, 2024</p>

          <h2>Digital Millennium Copyright Act Notice</h2>
          <p>
            bruiser.xyz respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement that are reported to our designated copyright agent.
          </p>

          <h2>DMCA Notice Requirements</h2>
          <p>
            If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on our service, please notify our copyright agent. For your complaint to be valid under the DMCA, you must provide the following information:
          </p>
          
          <ol>
            <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity</li>
            <li>Contact information for the complainant, such as an address, telephone number, and email</li>
            <li>A statement that the complainant has a good faith belief that use of the material is not authorized by the copyright owner</li>
            <li>A statement that the information in the notification is accurate and that the complainant is authorized to act on behalf of the copyright owner</li>
          </ol>

          <h2>Filing a DMCA Notice</h2>
          <p>
            To file a DMCA notice, please send the above information to:
          </p>
          <p>
            DMCA Agent<br />
            bruiser.xyz<br />
            123 Conversion Street<br />
            Suite 456<br />
            San Francisco, CA 94105<br />
            Email: dmca@bruiser.xyz
          </p>

          <h2>Counter-Notification</h2>
          <p>
            If you believe your content was wrongly removed due to a DMCA notice, you may file a counter-notification. Your counter-notification must include:
          </p>
          <ul>
            <li>Your physical or electronic signature</li>
            <li>Identification of the removed content and its original location</li>
            <li>A statement under penalty of perjury that you have a good faith belief the content was removed by mistake</li>
            <li>Your name, address, and phone number</li>
            <li>A statement that you consent to local federal court jurisdiction</li>
          </ul>

          <h2>Repeat Infringers</h2>
          <p>
            We maintain a policy of terminating the accounts of repeat infringers. A user who repeatedly uploads copyrighted material will have their account terminated.
          </p>
        </div>
      </div>
    </>
  );
};

export default DMCA;