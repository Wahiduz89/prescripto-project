import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='md:mx-10 bg-blue-50 mt-20'>
      <div className='flex flex-col sm:grid grid-cols-2 md:grid-cols-4 gap-8 my-10 pt-16 px-4 text-sm'>

        {/* Clinic Info */}
        <div className='space-y-4'>
          <img className='w-40' src={assets.logo} alt="Clinic Logo" />
          <p className='text-gray-600 leading-6'>
            Your trusted partner in healthcare. Book appointments with certified doctors 
            and specialists conveniently online.
          </p>
          <div className='flex gap-4 text-blue-900'>
            <FaFacebook className='w-6 h-6 cursor-pointer hover:text-blue-700' />
            <FaTwitter className='w-6 h-6 cursor-pointer hover:text-blue-700' />
            <FaLinkedin className='w-6 h-6 cursor-pointer hover:text-blue-700' />
          </div>
        </div>

        {/* Quick Links */}
        <div className='space-y-4'>
          <p className='text-lg font-semibold text-blue-900'>Quick Links</p>
          <ul className='space-y-2 text-gray-600'>
            <li className='hover:text-blue-800 cursor-pointer'>Find a Doctor</li>
            <li className='hover:text-blue-800 cursor-pointer'>Book Appointment</li>
            <li className='hover:text-blue-800 cursor-pointer'>Video Consultation</li>
            <li className='hover:text-blue-800 cursor-pointer'>Emergency Services</li>
          </ul>
        </div>

        {/* Resources */}
        <div className='space-y-4'>
          <p className='text-lg font-semibold text-blue-900'>Resources</p>
          <ul className='space-y-2 text-gray-600'>
            <li className='hover:text-blue-800 cursor-pointer'>Blog</li>
            <li className='hover:text-blue-800 cursor-pointer'>FAQ</li>
            <li className='hover:text-blue-800 cursor-pointer'>Patient Stories</li>
            <li className='hover:text-blue-800 cursor-pointer'>Health Tips</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='space-y-4'>
          <p className='text-lg font-semibold text-blue-900'>Contact Us</p>
          <ul className='space-y-3 text-gray-600'>
            <li className='flex items-center gap-2'>
              <FaMapMarkerAlt className='w-5 h-5 text-blue-900' />
              123 Medical Drive, Health City, HC 56789
            </li>
            <li className='flex items-center gap-2'>
              <FaPhone className='w-5 h-5 text-blue-900' />
              +1 (555) 123-4567
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='w-5 h-5 text-blue-900' />
              contact@healthconnect.com
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className='border-t border-blue-100'>
        <p className='py-5 text-sm text-center text-gray-600'>
          © {currentYear} HealthConnect. All rights reserved. | 
          <a href="/privacy" className='mx-2 hover:text-blue-800'>Privacy Policy</a> | 
          <a href="/terms" className='mx-2 hover:text-blue-800'>Terms of Service</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;