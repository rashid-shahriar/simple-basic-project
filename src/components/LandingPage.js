import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LandingPage() {
      return (
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
                  <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                  >
                        <h1 className="text-5xl font-bold text-gray-800">Welcome to Growon</h1>
                        <p className="mt-4 text-lg text-gray-600">Discover Excellence in Website Development with Us.</p>
                        <div className="mt-8 flex space-x-4">
                              <Link
                                    to="/login"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                              >
                                    Get Started
                              </Link>
                              <Link
                                    to="/login"
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                              >
                                    Sign Up
                              </Link>
                              <Link
                                    to="/login"
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                              >
                                    Log In
                              </Link>
                        </div>
                        <nav className="mt-8">
                              <ul className="flex space-x-4">
                                    <li><Link to="/about" className="text-blue-500 hover:text-blue-600">About Us</Link></li>
                                    <li><Link to="/contact" className="text-blue-500 hover:text-blue-600">Contact</Link></li>
                                    <li><Link to="/pricing" className="text-blue-500 hover:text-blue-600">Pricing</Link></li>
                              </ul>
                        </nav>
                        <div className="mt-12">
                              <img
                                    src="/images/vincent.jpg"
                                    alt="visual"
                                    className="mx-auto rounded-lg shadow-lg"
                              />
                              <p className="mt-4 text-gray-600">Testimonials or success stories.</p>
                        </div>
                  </motion.div>
            </div>
      );
}

export default LandingPage;
