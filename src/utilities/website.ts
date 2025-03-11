import { WebsiteDetails } from "./structures/interfaces";

const Website: WebsiteDetails = {
    name: process.env.REACT_APP_WEBSITE_NAME || "Name",
    description: process.env.REACT_APP_WEBSITE_DESCRIPTION || "Description",
    logo: process.env.REACT_APP_WEBSITE_LOGO || "../assets/website/logo.png",
    contact: process.env.REACT_APP_WEBSITE_CONTACT || "contact@example.com",
    address: process.env.REACT_APP_WEBSITE_ADDRESS || "123 Main St, Anytown, USA",
    phone: process.env.REACT_APP_WEBSITE_PHONE || "123-456-7890",
    email: process.env.REACT_APP_WEBSITE_EMAIL || "contact@example.com",
    social: {
        facebook: process.env.REACT_APP_WEBSITE_FACEBOOK || null,
        instagram: process.env.REACT_APP_WEBSITE_INSTAGRAM || null,
        twitter: process.env.REACT_APP_WEBSITE_TWITTER || null,
        youtube: process.env.REACT_APP_WEBSITE_YOUTUBE || null,
        linkedin: process.env.REACT_APP_WEBSITE_LINKEDIN || null,
        pinterest: process.env.REACT_APP_WEBSITE_PINTEREST || null,
        tiktok: process.env.REACT_APP_WEBSITE_TIKTOK || null,
    },
}

export {
    Website
};