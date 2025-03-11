import React from 'react';
import { Website } from '../../utilities/website.ts';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{Website.name}</h3>
                        <p className="text-gray-300">{Website.description}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <address className="not-italic text-gray-300">
                            <p>{Website.address}</p>
                            <p>
                                Phone: <a href={`tel:${Website.phone}`} className="hover:text-white">
                                    {Website.phone}
                                </a>
                            </p>
                            <p>
                                Email: <a href={`mailto:${Website.email}`} className="hover:text-white">
                                    {Website.email}
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {Website.social.facebook && (
                                <a 
                                    href={Website.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white"
                                    aria-label="Facebook"
                                >
                                    Facebook
                                </a>
                            )}
                            {Website.social.instagram && (
                                <a 
                                    href={Website.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white"
                                    aria-label="Instagram"
                                >
                                    Instagram
                                </a>
                            )}
                            {/* Add other social media links as needed */}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                    <p>&copy; {currentYear} {Website.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 