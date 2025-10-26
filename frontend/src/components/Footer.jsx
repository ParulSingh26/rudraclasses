import React from 'react'
import {NavLink} from 'react-router-dom';
import img1 from "../assets/img1.jpeg"; // 👈 adjust path if needed

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          
          {/* Left - Logo + Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={img1}
                alt="Coaching Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold text-white">
                RUDRA CLASSES
              </h2>
            </div>
            <p className="text-sm">
              Empowering students to achieve excellence through quality education and guidance.
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-white">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="hover:text-white">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm">
              📍 123 Main Road, City, India
            </p>
            <p className="text-sm">📞 +91 9876543210</p>
            <p className="text-sm">📧 info@mycoaching.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Rudra Coaching Classes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
