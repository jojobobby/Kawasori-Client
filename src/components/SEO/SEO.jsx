import { Helmet } from 'react-helmet';
import { Website } from '../../utilities/website.ts';

const SEO = ({ 
    title, 
    description = Website.description,
    image = Website.logo,
    type = 'website',
    noindex = false,
    nofollow = false,
}) => {
    const siteTitle = title ? `${title} | ${Website.name}` : Website.name;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type} />
        </Helmet>
    );
};

export default SEO; 