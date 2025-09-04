import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Prepare for your next exam with our platform
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8">
                Access comprehensive study materials, take practice exams, and get certified with our secure online platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Start Exam</Link>
                <Link to="/login" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Get Started</Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://placehold.co/500x400/f3f4f6/6b7280?text=Students+studying+together+with+laptops+and+books"
                alt="Students studying together with laptops and books in a modern learning environment"
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get started in just 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Register</h3>
              <p className="text-gray-600">Create your account and choose your exam category</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Study</h3>
              <p className="text-gray-600">Access comprehensive materials and practice questions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Take Exam</h3>
              <p className="text-gray-600">Complete your exam in our secure testing environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Certified</h3>
              <p className="text-gray-600">Receive your certificate and advance your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">Everything you need for successful exam preparation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Exams</h3>
              <p className="text-gray-600 text-sm">Advanced security measures ensure exam integrity and prevent cheating</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm">Get your results immediately after completion with detailed feedback</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Integration</h3>
              <p className="text-gray-600 text-sm">Secure payment processing with multiple payment options available</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98A1 1 0 0117 18H8.236a1 1 0 01-.447-.106l-.535-.268a1 1 0 11.894-1.789l.18.09h7.724l-.447-.894-2.724-5.447-.895 1.789a1 1 0 01-1.789-.894l.5-1A1 1 0 0113 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-language Support</h3>
              <p className="text-gray-600 text-sm">Take exams in your preferred language with full localization support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exams Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Exams</h2>
            <p className="text-lg text-gray-600">{"Don't miss out on these available test categories"}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IT Certification</h3>
              <p className="text-gray-600 mb-4">Comprehensive IT skills assessment covering programming, networking, and security</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Duration: 2 hours</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">Available</span>
              </div>
              <Link to="/login" className="text-center block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"> Enroll Now</Link>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Management</h3>
              <p className="text-gray-600 mb-4">Test your knowledge in business strategy, leadership, and project management</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Duration: 1.5 hours</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Available</span>
              </div>
              <Link to="/login" className="text-center block w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"> Enroll Now</Link>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Evaluate your skills in SEO, social media, and online advertising strategies</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Duration: 1 hour</span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">Available</span>
              </div>
              <Link to="/login" className="text-center block w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"> Enroll Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">Success stories from our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/60x60/e5e7eb/6b7280?text=SJ"
                  alt="Sarah Johnson profile photo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This platform helped me pass my certification exam on the first try! The practice questions were spot-on."
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/60x60/e5e7eb/6b7280?text=MC"
                  alt="Michael Chen profile photo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Project Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Excellent study materials and user-friendly interface. I highly recommend this to anyone preparing for exams."
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/60x60/e5e7eb/6b7280?text=ER"
                  alt="Emily Rodriguez profile photo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The instant results and detailed feedback helped me understand my strengths and areas for improvement."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
