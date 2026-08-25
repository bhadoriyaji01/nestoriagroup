# Nestoria Group Website

A modern, responsive website for Nestoria Group, a real estate company specializing in properties in Dholera SIR (Special Investment Region). Built with React, Vite, Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Modern UI with animations and transitions
- Contact form with email functionality
- Interactive property listings
- Testimonials carousel
- SEO optimized
- Blog section

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: PHP mail endpoint (Hostinger-compatible)
- **Email**: PHP mail() endpoint
- **Styling**: Tailwind CSS, Font Awesome
- **Animations**: CSS animations, Tailwind transitions
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd nestoria-project

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Fill in your email credentials in .env

# Run development server
npm run dev:all
```

## Deployment to Vercel

### Prerequisites

- Vercel account
- Vercel CLI (optional)

### Deployment Steps

1. **Set up environment variables in Vercel**

   Add the following environment variables in your Vercel project settings:
   ```
   EMAIL_HOST=your-smtp-host
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email
   EMAIL_PASS=your-password
   TO_EMAIL=recipient-email
   BCC_EMAIL=bcc-email (optional)
   ```

2. **Deploy using Vercel Dashboard**

   - Connect your GitHub repository
   - Configure the project with the following settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Deploy using Vercel CLI**

   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Login to Vercel
   vercel login

   # Deploy
   vercel
   ```

### Troubleshooting Vercel Deployment

- **API Routes Not Working**: Ensure the vercel.json file is properly configured with the correct routes.
- **Environment Variables**: Verify all required environment variables are set in the Vercel dashboard.
- **Build Errors**: Check the build logs in Vercel for specific error messages.
- **API Timeout**: If the API calls timeout, check your email service provider settings and ensure they allow connections from Vercel's IP ranges.

## Development

```bash
# Start development server
npm run dev

# Start API server
npm run server

# Start both frontend and backend
npm run dev:all

   ```

3. Configure environment variables
   - Create a `.env` file in the root directory based on the `.env.example` file
   - Update the email configuration for the contact form functionality

   ```
   # Server Configuration
   PORT=5000

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

   Note: For Gmail, you need to use an App Password. Go to your Google Account > Security > 2-Step Verification > App passwords and generate a new app password for this application.

### Running the Application

#### Development Mode

Run both frontend and backend servers concurrently:

```bash
npm run dev:all
```

Or run them separately:

```bash
# Frontend only
npm run dev

# Backend only
npm run server
```

The frontend will be available at http://localhost:5173 (or another port if 5173 is in use).
The backend API will be available at http://localhost:5000.

#### Production Build

```bash
npm run build
```

## Contact Form Setup

Forms now post directly to a lightweight PHP endpoint on Hostinger.

- PHP file: `public/send-email.php`
- Frontend services call `/send-email.php` with JSON body including `name`, `email`, `phone`, `subject`, `message`, and `formType`.
- No SMTP or server configuration is required on Hostinger for basic mail() delivery.

## Project Structure

```
├── public/              # Static files
├── src/                 # Frontend source code
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [Font Awesome](https://fontawesome.com/)
