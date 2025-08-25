import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">About LegalClarify</h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Empowering everyone to understand legal documents through the power of artificial intelligence
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-amber-100 p-8 rounded-xl border border-amber-200">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-amber-800 mr-4" />
              <h2 className="text-2xl font-bold text-amber-900">Our Mission</h2>
            </div>
            <p className="text-amber-700 text-lg leading-relaxed">
              Legal documents shouldn't be a barrier to understanding your rights and obligations. 
              LegalClarify was founded on the belief that everyone deserves access to clear, 
              understandable explanations of legal content. Our AI-powered platform breaks down 
              complex legal jargon into plain language, making legal literacy accessible to all.
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">The Problem We Solve</h2>
          <div className="bg-amber-100 p-8 rounded-xl border border-amber-200">
            <p className="text-amber-700 text-lg leading-relaxed mb-6">
              Understanding legal documents is often challenging for the general public due to complex language, 
              technical jargon, and structural ambiguity. This creates a barrier to legal awareness and 
              self-reliance, forcing individuals to rely on costly legal consultations for even basic comprehension.
            </p>
            <p className="text-amber-700 text-lg leading-relaxed">
              There is a critical need for a solution that bridges this gap by simplifying legal content. 
              Our AI-powered platform leverages Natural Language Processing (NLP) to extract, summarize, 
              and explain legal documents in plain, understandable language.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Accessibility</h3>
              <p className="text-amber-700">
                Making legal understanding available to everyone, regardless of their background or education level.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Accuracy</h3>
              <p className="text-amber-700">
                Providing precise, reliable analysis backed by advanced AI technology and legal expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Innovation</h3>
              <p className="text-amber-700">
                Continuously improving our technology to better serve our users' legal understanding needs.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-amber-100 p-8 rounded-xl border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">How LegalClarify Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-800 text-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Upload Document</h3>
              <p className="text-amber-700 text-sm">
                Upload your legal document in PDF, DOC, or TXT format through our secure platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-800 text-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">AI Analysis</h3>
              <p className="text-amber-700 text-sm">
                Our advanced NLP models analyze the document structure, identify key clauses, and extract important information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-800 text-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Plain Language Summary</h3>
              <p className="text-amber-700 text-sm">
                Receive a clear, understandable explanation of your document's contents and implications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}