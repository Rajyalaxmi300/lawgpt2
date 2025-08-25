import React from 'react';
import { Play, Users, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-100 to-amber-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 mb-6 leading-tight">
                Legal<span className="text-amber-700">Clarify</span>
              </h1>
              <p className="text-xl lg:text-2xl text-amber-800 mb-8 leading-relaxed">
                Simplifying Complex Legal Documents with AI-Powered Analysis
              </p>
              <p className="text-lg text-amber-700 mb-10 max-w-2xl">
                Upload contracts, notices, or court papers and get clear, understandable explanations in plain language. 
                Empowering citizens with legal clarity and informed decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/signup" 
                  className="bg-amber-800 text-amber-50 px-8 py-4 rounded-xl hover:bg-amber-900 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Get Started Free
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-xl hover:bg-amber-800 hover:text-amber-50 transition-all duration-300 font-semibold text-lg text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="relative">
              <div className="bg-amber-50 rounded-2xl shadow-2xl overflow-hidden border border-amber-200">
                <div className="relative bg-amber-100 aspect-video flex items-center justify-center group cursor-pointer hover:bg-amber-200 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-800/20 to-amber-600/20"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center group-hover:bg-amber-900 transition-colors duration-300 shadow-lg">
                      <Play className="w-10 h-10 text-amber-50 ml-1" fill="currentColor" />
                    </div>
                    <p className="mt-4 text-amber-800 font-semibold text-lg">Watch How It Works</p>
                    <p className="text-amber-700 text-sm mt-1">3 min demo</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-dashed border-amber-400 rounded-xl m-4"></div>
                </div>
                <div className="p-6 bg-amber-50">
                  <h3 className="font-semibold text-amber-900 mb-2">See LegalClarify in Action</h3>
                  <p className="text-amber-700 text-sm">
                    Discover how our AI transforms complex legal jargon into clear, understandable language in just minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Why Choose LegalClarify?
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Breaking down barriers to legal understanding with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:bg-amber-100 p-6 rounded-xl transition-colors duration-300 border border-amber-200">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors duration-300">
                <Shield className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Secure & Private</h3>
              <p className="text-amber-700">
                Your documents are processed securely with enterprise-grade encryption and privacy protection.
              </p>
            </div>

            <div className="text-center group hover:bg-amber-100 p-6 rounded-xl transition-colors duration-300 border border-amber-200">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors duration-300">
                <Clock className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Instant Results</h3>
              <p className="text-amber-700">
                Get clear explanations and summaries of your legal documents in minutes, not hours.
              </p>
            </div>

            <div className="text-center group hover:bg-amber-100 p-6 rounded-xl transition-colors duration-300 border border-amber-200">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors duration-300">
                <CheckCircle className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">High Accuracy</h3>
              <p className="text-amber-700">
                Advanced NLP models trained on vast legal databases ensure precise analysis and explanation.
              </p>
            </div>

            <div className="text-center group hover:bg-amber-100 p-6 rounded-xl transition-colors duration-300 border border-amber-200">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors duration-300">
                <Users className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">User-Friendly</h3>
              <p className="text-amber-700">
                Designed for everyone - no legal background required to understand complex documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-amber-50 mb-6">
            Ready to Simplify Your Legal Documents?
          </h2>
          <p className="text-xl text-amber-200 mb-8">
            Join thousands of users who trust LegalClarify to make legal content accessible and understandable.
          </p>
          <Link 
            to="/signup" 
            className="bg-amber-50 text-amber-800 px-10 py-4 rounded-xl hover:bg-amber-100 transition-colors duration-300 font-semibold text-lg shadow-lg inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}