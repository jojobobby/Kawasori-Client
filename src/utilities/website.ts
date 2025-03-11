import { WebsiteDetails } from "./structures/interfaces";

const Website: WebsiteDetails = {
    name: process.env.WEBSITE_NAME || "Name",
    description: process.env.WEBSITE_DESCRIPTION || "Description",
    logo: process.env.WEBSITE_LOGO || "https://via.placeholder.com/150",
    contact: process.env.WEBSITE_CONTACT || "contact@example.com",
    address: process.env.WEBSITE_ADDRESS || "123 Main St, Anytown, USA",
    phone: process.env.WEBSITE_PHONE || "123-456-7890",
    email: process.env.WEBSITE_EMAIL || "contact@example.com",
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