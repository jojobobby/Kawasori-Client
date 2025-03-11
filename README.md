# The Happy Dog Place - Client Application

A modern React-based web application for The Happy Dog Place, providing a user-friendly interface for dog-related services and management.

## Prerequisites

Before setting up the project, ensure you have:

- Node.js (v16 or higher)
- npm (v8 or higher) or Yarn
- Git

## Quick Start

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd TheHappyDogPlace-Client
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```
   Access the application at [http://localhost:3000](http://localhost:3000)

## Project Dependencies

Key technologies and libraries used:

- **Core:**
  - React 18.3.1
  - TypeScript 5.5.4
  - React Router DOM 6.26.2

- **Styling:**
  - Tailwind CSS 3.4.11
  - Bootstrap 4.6.0
  - Styled Components 6.0.7

- **UI Components:**
  - React Rainbow Components 1.32.0
  - Framer Motion 10.15.0
  - React Spring 9.7.2

- **Development Tools:**
  - React Scripts 5.0.1
  - PostCSS 8.4.45
  - Autoprefixer 10.4.20

## Available Scripts

- `npm start` - Start development server
- `npm test` - Run test suite
- `npm run build` - Create production build
- `npm run eject` - Eject from Create React App

## Project Structure

```
TheHappyDogPlace-Client/
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React context providers
│   ├── requests/       # API integration
│   ├── routes/         # Application routing
│   ├── App.js         # Root component
│   └── index.js       # Entry point
├── public/            # Static assets
├── Dockerfile         # Docker configuration
└── package.json       # Project dependencies
```

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices and hooks
- Implement responsive design using Tailwind CSS
- Utilize React Rainbow components for consistent UI

### State Management
- Use React Context for global state
- Implement hooks for local state
- Follow proper data flow patterns

### Testing
- Write unit tests for components
- Test API integrations
- Ensure responsive design works

## Docker Support

Build and run the application using Docker:

```bash
# Build Docker image
docker build -t happy-dog-place-client .

# Run with Docker Compose
docker-compose up
```

## Environment Variables

The application uses the following environment variables:

### Website Details
- `WEBSITE_NAME`: Name of the website
- `WEBSITE_DESCRIPTION`: Website description
- `WEBSITE_LOGO`: URL to website logo
- `WEBSITE_CONTACT`: Contact information
- `WEBSITE_ADDRESS`: Physical address
- `WEBSITE_PHONE`: Contact phone number
- `WEBSITE_EMAIL`: Contact email address

### Social Media
- `WEBSITE_FACEBOOK`: Facebook page URL
- `WEBSITE_INSTAGRAM`: Instagram profile URL
- `WEBSITE_TWITTER`: Twitter profile URL
- `WEBSITE_YOUTUBE`: YouTube channel URL
- `WEBSITE_LINKEDIN`: LinkedIn company page URL
- `WEBSITE_PINTEREST`: Pinterest profile URL
- `WEBSITE_TIKTOK`: TikTok profile URL

### API Configuration
- `REACT_APP_API_URL`: Backend API URL
- `REACT_APP_ENV`: Environment (development/production)

To set up your environment:
1. Copy `.env.example` to `.env`
2. Fill in the values in `.env`
3. Restart the development server

Note: Never commit the `.env` file to version control. The `.env.example` file serves as a template.

## Build and Deployment

### Production Build
```bash
npm run build
# or
yarn build
```
This creates an optimized production build in the `build/` directory.

### Deployment
- The application can be deployed to any static hosting service
- Supports containerized deployment via Docker
- Configure CI/CD as needed

## Troubleshooting

Common issues and solutions:

1. **Build Errors**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **Development Server Issues**
   - Check port availability
   - Verify environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For technical support or questions:
- Check existing documentation
- Contact the development team
- Submit issues through the project's issue tracker

---

For additional information about specific features or components, refer to the project documentation or contact the development team.
