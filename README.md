# 4C Marketing Cell - NMIMS Website

Official website for the 4C Marketing Cell at NMIMS (Narsee Monjee Institute of Management Studies). A modern, dynamic platform showcasing our events, team, sponsors, and activities.

## 🌟 Features

- **Modern UI/UX**: Built with Next.js 15 and React 18
- **Animated Hero Sections**: Multiple hero section variants with smooth animations
- **Event Showcase**: Dynamic event pages with detailed descriptions and image galleries
- **Team Directory**: Meet our Advisory, Super Core, Core Team, and Crew members
- **Responsive Design**: Fully responsive across all devices
- **Contact Integration**: Firebase-powered contact form with email notifications
- **3D Visual Effects**: Interactive 3D cards and aurora background effects
- **Image Galleries**: Draggable and carousel-based image galleries

## 🚀 Tech Stack

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) with Turbopack
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **Animations**: [Motion (Framer Motion)](https://motion.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Backend**: [Firebase](https://firebase.google.com/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **AI Integration**: [Google Genkit](https://firebase.google.com/products/genkit)
- **TypeScript**: Full type safety

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/arth-1/4cweb.git
cd 4cweb
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Email Configuration (Nodemailer)
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_app_password

# Google AI (Genkit)
GOOGLE_GENAI_API_KEY=your_google_ai_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:9002](http://localhost:9002)

## 📜 Available Scripts

```bash
# Development server with Turbopack (port 9002)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint

# Type checking
npm run typecheck

# Genkit development
npm run genkit:dev
npm run genkit:watch
```

## 📁 Project Structure

```
4cweb/
├── public/              # Static assets
│   ├── events/         # Event images
│   ├── sponsors/       # Sponsor logos
│   └── team/           # Team member photos
│       ├── Advisory/   # Advisory board photos
│       ├── Core/       # Core team photos
│       ├── SuperCore/  # Super core member photos
│       └── Crew/       # Crew member photos
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── about/      # About page
│   │   ├── events/     # Events pages
│   │   ├── team/       # Team page
│   │   └── api/        # API routes
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (header, footer)
│   │   ├── sections/   # Page sections
│   │   └── ui/         # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utilities and data
│       ├── data.ts     # Static data (team, events, sponsors)
│       └── utils.ts    # Helper functions
├── components.json     # shadcn/ui configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Key Features Breakdown

### Pages

- **Home (`/`)**: Hero section, what we do, events, sponsors
- **Events (`/events`)**: Grid view of all events
- **Event Details (`/events/[slug]`)**: Detailed event pages
- **Team (`/team`)**: Advisory, Super Core, Core Team, and Crew
- **About (`/about`)**: About 4C Marketing Cell

### Components

- **3D Cards**: Interactive hover effects for team members
- **Image Carousels**: Auto-playing image galleries
- **Draggable Galleries**: Interactive drag-to-explore images
- **Aurora Background**: Animated gradient backgrounds
- **Timeline**: Event timeline display
- **Tracing Beam**: Animated scroll indicator

## 🖼️ Image Management

### Background Removal Tool

We include a Python script to remove backgrounds from team photos:

```bash
# Install dependencies
pip install -r requirements-bg-removal.txt

# Run the script
python remove_backgrounds.py
```

See `BACKGROUND_REMOVAL_README.md` for detailed instructions.

## 🔧 Configuration

### Tailwind CSS

Custom animations and utilities are configured in `tailwind.config.ts`:
- Aurora effect
- Moving borders
- Custom color schemes
- Responsive breakpoints

### TypeScript

Strict type checking enabled with path aliases:
- `@/*` maps to `src/*`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker

Build command: `npm run build`
Start command: `npm run start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Data Management

Team members, events, and sponsors are managed in `src/lib/data.ts`. To add new content:

1. Add images to respective folders in `public/`
2. Update the data arrays in `data.ts`
3. Rebuild the application

## 🐛 Troubleshooting

### Development server won't start
- Check if port 9002 is available
- Delete `.next` folder and `node_modules`, then reinstall

### Type errors
- Run `npm run typecheck` to identify issues
- Ensure all dependencies are up to date

### Build failures
- Clear Next.js cache: `rm -rf .next`
- Verify environment variables are set

## 📄 License

This project is private and proprietary to 4C Marketing Cell, NMIMS.

## 📞 Contact

For questions or support, contact the 4C Marketing Cell team:
- Website: [Your Website URL]
- Email: [Contact Email]

## 🙏 Acknowledgments

- NMIMS Management
- All 4C Marketing Cell members
- Open-source community

---

**Made with ❤️ by the 4C Marketing Cell Tech Team** 