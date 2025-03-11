type social = string | null;

interface Socials {
    facebook: social;
    instagram: social;
    twitter: social;
    youtube: social;
    linkedin: social;
    pinterest: social;
    tiktok: social;
}

interface WebsiteDetails {
    name: string;
    description: string;
    logo: string;
    contact: string;
    address: string;
    phone: string;
    email: string;
    social: Socials;
}

const Website: WebsiteDetails = {
    name: process.env.WEBSITE_NAME || "The Happy Dog Place",
    description: process.env.WEBSITE_DESCRIPTION || "The Happy Dog Place is a website that sells dog products.",
    logo: process.env.WEBSITE_LOGO || "https://via.placeholder.com/150",
    contact: process.env.WEBSITE_CONTACT || "contact@thehappydogplace.com",
    address: process.env.WEBSITE_ADDRESS || "123 Main St, Anytown, USA",
    phone: process.env.WEBSITE_PHONE || "123-456-7890",
    email: process.env.WEBSITE_EMAIL || "contact@thehappydogplace.com",
    social: {
        facebook: process.env.WEBSITE_FACEBOOK || null,
        instagram: process.env.WEBSITE_INSTAGRAM || null,
        twitter: process.env.WEBSITE_TWITTER || null,
        youtube: process.env.WEBSITE_YOUTUBE || null,
        linkedin: process.env.WEBSITE_LINKEDIN || null,
        pinterest: process.env.WEBSITE_PINTEREST || null,
        tiktok: process.env.WEBSITE_TIKTOK || null,
    },
}

export {
    Website
};