import React from 'react';
import { Search, FileText, MessageCircle, Book } from 'lucide-react';

export default function Help() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Help Center</h1>
          <p className="text-xl text-amber-700">Find answers to your questions about LegalClarify</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-amber-600" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-amber-300 rounded-lg leading-5 bg-amber-50 placeholder-amber-600 focus:outline-none focus:placeholder-amber-500 focus:ring-2 focus:ring-amber-800 focus:border-amber-800"
            placeholder="Search for help articles..."
          />
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-amber-100 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-amber-800 mr-3" />
              <h3 className="text-xl font-semibold text-amber-900">Getting Started</h3>
            </div>
            <ul className="space-y-2 text-amber-700">
              <li><a href="#" className="hover:text-amber-900 transition-colors">How to upload documents</a></li>
              <li><a href="#" className="hover:text-amber-900 transition-colors">Understanding your results</a></li>
              <li><a href="#" className="hover:text-amber-900 transition-colors">Account setup guide</a></li>
              <li><a href="#" className="hover:text-amber-900 transition-colors">Supported file formats</a></li>
            </ul>
          </div>

          <div className="bg-amber-100 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-amber-800 mr-3" />
              <h3 className="text-xl font-semibold text-amber-900">Common Questions</h3>
            </div>
            <ul className="space-y-2 text-amber-700">
              <li><a href="#" className="hover:text-amber-900 transition-colors">Is my data secure?</a></li>
              <li><a href="#" className="hover:text-amber-900 transition-colors">How accurate are the results?</a></li>
              <li><a href="#" className="hover:text-amber-900 transition-colors">Pricing and billing</a></li>
              <li><a href="#" className="hover:text-amber-900 transition-colors">Technical requirements</a></li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-amber-100 p-8 rounded-xl border border-amber-200">
          <div className="flex items-center mb-6">
            <Book className="w-8 h-8 text-amber-800 mr-3" />
            <h2 className="text-2xl font-bold text-amber-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">What types of legal documents can I analyze?</h3>
              <p className="text-amber-700">LegalClarify supports contracts, court documents, legal notices, terms of service, privacy policies, and most other legal texts in PDF, DOC, or TXT format.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">How long does analysis take?</h3>
              <p className="text-amber-700">Most documents are analyzed within 2-5 minutes, depending on length and complexity. You'll receive an email notification when your analysis is complete.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Can I share my analysis results?</h3>
              <p className="text-amber-700">Yes, you can generate shareable links to your analysis results or export them as PDF reports for easy sharing with others.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}