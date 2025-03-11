import React from 'react';
import { Website } from '../../utilities/website.ts';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img 
                            src={Website.logo} 
                            alt={`website logo`} 
                            className="h-12 w-auto"
                        />
                    </Link>
                </div>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:text-primary">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-primary">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-primary">Contact</Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:text-primary">Products</Link>
                        </li>
                    </ul>
                </nav>

                {/* Contact Info */}
                <div className="hidden md:flex items-center space-x-4">
                    <a 
                        href={`tel:${Website.phone}`}
                        className="text-primary hover:text-primary-dark"
                    >
                        {Website.phone}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header; 