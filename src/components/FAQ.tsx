import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type ConversionType = 'pdf-to-word' | 'word-to-pdf';

interface FAQProps {
  conversionType?: ConversionType;
}

const FAQ: React.FC<FAQProps> = ({ conversionType = 'pdf-to-word' }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = {
    'pdf-to-word': [
      {
        question: "How accurate is the PDF to Word conversion?",
        answer: "Our conversion technology maintains 99.9% accuracy in preserving formatting, images, tables, and text layout from your original PDF document."
      },
      {
        question: "Is there a file size limit?",
        answer: "Yes, the maximum file size is 10MB for free conversions. This limit ensures fast processing times and optimal performance."
      },
      {
        question: "How long does the conversion take?",
        answer: "Most conversions are completed within seconds. Larger or more complex files might take up to a minute to process."
      },
      {
        question: "Are my files secure?",
        answer: "Yes, we use bank-level encryption to protect your files. All uploaded files are automatically deleted after 2 hours, and we never share your data with third parties."
      },
      {
        question: "What happens if the conversion fails?",
        answer: "In the rare case of conversion failure, you can try our troubleshooting guide or contact our support team for assistance. We're here to help 24/7."
      }
    ],
    'word-to-pdf': [
      {
        question: "Will my Word document formatting be preserved in the PDF?",
        answer: "Yes, our converter maintains all formatting, including fonts, images, tables, and layouts, ensuring your PDF looks exactly like your Word document."
      },
      {
        question: "What Word formats are supported?",
        answer: "We support all modern Word formats including .docx and .doc files. The converted PDF will be compatible with all PDF readers."
      },
      {
        question: "Can I convert password-protected Word documents?",
        answer: "For security reasons, you'll need to remove the password protection from your Word document before conversion."
      },
      {
        question: "What's the quality of the converted PDF?",
        answer: "We generate high-quality PDFs suitable for professional use, with crisp text and clear images."
      },
      {
        question: "Can I convert multiple Word files at once?",
        answer: "Yes, our batch conversion feature allows you to convert multiple Word documents to PDF simultaneously."
      }
    ]
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs[conversionType].map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <button
                className="w-full px-4 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;