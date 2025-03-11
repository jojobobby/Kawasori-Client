import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, HelpCircle, Package, FileText, PhoneIcon } from 'lucide-react';
import { useCart } from '../../contexts/CartContext.js';
import { Website } from '../../utilities/website.ts';
import SEO from '../SEO/SEO.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Toaster } from 'react-hot-toast';
import { FacebookIcon, InstagramIcon } from 'lucide-react';

const Layout = ({ 
    children, 
    title, 
    description = Website.description,
    seo = {}
}) => {
    const { cart } = useCart();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <SEO 
                title={title}
                description={description}
                keywords={seo.keywords}
                image={seo.image || Website.logo}
                type={seo.type}
                noindex={seo.noindex}
                nofollow={seo.nofollow}
            />

            {/* Skip to main content link for accessibility */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
            >
                Skip to main content
            </a>

            <Header />

            {/* Announcement Banner - if needed */}
            {Website.announcement && (
                <div className="bg-primary text-white text-center py-2 px-4">
                    <p>{Website.announcement}</p>
                </div>
            )}

            {/* Main Content */}
            <main id="main-content" className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Contact Float Button */}
            <div className="fixed bottom-6 right-6 z-40">
                <a
                    href={`tel:${Website.phone}`}
                    className="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg flex items-center space-x-2"
                    aria-label="Contact Us"
                >
                    <PhoneIcon className="h-6 w-6" />
                    <span className="hidden md:inline">{Website.phone}</span>
                </a>
            </div>

            {/* Social Media Float */}
            <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
                <div className="flex flex-col space-y-4">
                    {Website.social.facebook && (
                        <a 
                            href={Website.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark"
                            aria-label="Visit our Facebook page"
                        >
                            <FacebookIcon className="h-6 w-6" />
                        </a>
                    )}
                    {Website.social.instagram && (
                        <a 
                            href={Website.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark"
                            aria-label="Visit our Instagram page"
                        >
                            <InstagramIcon className="h-6 w-6" />
                        </a>
                    )}
                    {/* Add other social media icons as needed */}
                </div>
            </div>

            <Footer />

            {/* Toast Notifications */}
            <Toaster 
                position="top-right"
                toastOptions={{
                    duration: 5000,
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                }}
            />

            {/* Cookie Consent Banner */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="text-sm">
                        {Website.name} uses cookies to enhance your experience. 
                        By continuing to visit this site you agree to our use of cookies.
                    </p>
                    <button 
                        className="ml-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                        onClick={() => {
                            // Add cookie consent logic here
                            document.querySelector('.cookie-consent').style.display = 'none';
                        }}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Layout;