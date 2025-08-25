import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Contact Us</h1>
          <p className="text-xl text-amber-700">Get in touch with our team for support or inquiries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-800 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900">Email</h3>
                  <p className="text-amber-700">support@legalclarify.com</p>
                  <p className="text-amber-700">hello@legalclarify.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-800 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900">Phone</h3>
                  <p className="text-amber-700">+1 (555) 123-4567</p>
                  <p className="text-amber-600 text-sm">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-800 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900">Office</h3>
                  <p className="text-amber-700">123 Legal Tech Avenue<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-100 rounded-xl border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Need immediate help?</h3>
              <p className="text-amber-700 text-sm mb-4">
                Check our Help Center for instant answers to common questions.
              </p>
              <a href="/help" className="text-amber-800 hover:text-amber-900 font-medium">
                Visit Help Center →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-amber-100 p-8 rounded-xl border border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800 bg-amber-50"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800 bg-amber-50"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-amber-900 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800 bg-amber-50"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800 bg-amber-50"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 text-amber-50 px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors duration-200 font-medium flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}