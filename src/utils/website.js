const getEnvVar = (key, defaultValue = '') => {
    const value = process.env[`REACT_APP_${key}`];
    return value || defaultValue;
};

const Website = {
    name: getEnvVar('WEBSITE_NAME', 'The Happy Dog Place'),
    description: getEnvVar('WEBSITE_DESCRIPTION', 'Welcome to The Happy Dog Place, your premier destination for high-quality dog products and accessories.'),
    shortDescription: getEnvVar('WEBSITE_SHORT_DESCRIPTION', 'Your premier destination for premium dog products and accessories.'),
    metaKeywords: getEnvVar('WEBSITE_META_KEYWORDS', 'dog products, pet supplies, dog accessories'),
    logo: getEnvVar('WEBSITE_LOGO', 'https://via.placeholder.com/150'),
    contact: getEnvVar('WEBSITE_CONTACT', 'contact@thehappydogplace.com'),
    address: getEnvVar('WEBSITE_ADDRESS', '123 Main St, Anytown, USA'),
    phone: getEnvVar('WEBSITE_PHONE', '123-456-7890'),
    email: getEnvVar('WEBSITE_EMAIL', 'contact@thehappydogplace.com'),
    
    // Business Hours
    businessHours: getEnvVar('WEBSITE_BUSINESS_HOURS', 'Monday-Friday: 9:00 AM - 6:00 PM'),
    customerServiceHours: getEnvVar('WEBSITE_CUSTOMER_SERVICE_HOURS', 'Monday-Friday: 8:00 AM - 7:00 PM EST'),
    
    // Page-specific descriptions
    pages: {
        home: {
            description: getEnvVar('WEBSITE_HOME_DESCRIPTION'),
        },
        about: {
            description: getEnvVar('WEBSITE_ABOUT_DESCRIPTION'),
        },
        products: {
            description: getEnvVar('WEBSITE_PRODUCTS_DESCRIPTION'),
        },
        contact: {
            description: getEnvVar('WEBSITE_CONTACT_DESCRIPTION'),
        },
    },
    
    announcement: getEnvVar('WEBSITE_ANNOUNCEMENT'),
    
    social: {
        facebook: getEnvVar('WEBSITE_FACEBOOK'),
        instagram: getEnvVar('WEBSITE_INSTAGRAM'),
        twitter: getEnvVar('WEBSITE_TWITTER'),
        youtube: getEnvVar('WEBSITE_YOUTUBE'),
        linkedin: getEnvVar('WEBSITE_LINKEDIN'),
        pinterest: getEnvVar('WEBSITE_PINTEREST'),
        tiktok: getEnvVar('WEBSITE_TIKTOK'),
    },
    
    api: {
        url: getEnvVar('API_URL', 'http://localhost:3001/api'),
        version: getEnvVar('API_VERSION', 'v1'),
    },
    
    environment: process.env.NODE_ENV || 'development',
};

// Validate required environment variables in development
if (process.env.NODE_ENV !== 'production') {
    const requiredVars = [
        'REACT_APP_WEBSITE_NAME',
        'REACT_APP_WEBSITE_DESCRIPTION',
        'REACT_APP_WEBSITE_EMAIL',
    ];

    const missingVars = requiredVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
        console.warn('Missing required environment variables:', missingVars.join(', '));
    }
}

export default Website; 