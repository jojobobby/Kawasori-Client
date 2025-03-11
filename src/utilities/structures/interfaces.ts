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

export {
    WebsiteDetails,
    Socials
};