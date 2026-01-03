import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-2xl font-light text-gray-800">Yori</h3>
            <p className="text-sm text-gray-500 mt-2">Drawing near to genuine connection</p>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <a 
              href="mailto:hello@yori.rocks" 
              className="text-warmSunset-coral hover:text-warmSunset-orange transition-colors"
            >
              hello@yori.rocks
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-8 max-w-xs mx-auto"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} Yori. Built with care for genuine connection.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
