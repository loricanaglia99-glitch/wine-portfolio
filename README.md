# Wine Portfolio - Personal Landing Page

A modern, minimal, and visually appealing personal landing page for wine industry professionals. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **SEO Optimized**: Meta tags, OpenGraph, and Google Analytics ready
- **Contact Form**: Functional API route with email integration support
- **Smooth Animations**: Fade-in and slide-up effects for engaging UX
- **Custom Color Palette**: Burgundy/wine theme with elegant typography
- **4 Main Pages**:
  - Home (Hero, Services, Featured Collaborations, Contact Form)
  - About Me (Journey Timeline, Mission & Vision)
  - Collaborations (Portfolio with case studies)
  - Projects (Timeline with status indicators)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd wine-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure your email service (choose one):

**Option 1: Nodemailer (SMTP)**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@yourdomain.com
CONTACT_EMAIL=your-email@example.com
```

**Option 2: SendGrid**
```env
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=your-email@example.com
```

**Option 3: Resend**
```env
RESEND_API_KEY=your-resend-api-key
RESEND_FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=your-email@example.com
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Email Configuration

The contact form is ready to integrate with your email service of choice. Follow these steps:

### Using Nodemailer (SMTP)

1. Install Nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

2. Open `app/api/contact/route.ts` and uncomment the Nodemailer section

3. For Gmail, create an [App Password](https://support.google.com/accounts/answer/185833)

### Using SendGrid

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Open `app/api/contact/route.ts` and uncomment the SendGrid section

3. Get your API key from [SendGrid Dashboard](https://sendgrid.com/)

### Using Resend

1. Install Resend:
```bash
npm install resend
```

2. Open `app/api/contact/route.ts` and uncomment the Resend section

3. Get your API key from [Resend](https://resend.com/)

## Customization

### Update Content

1. **Personal Information**:
   - Edit `components/layout/Footer.tsx` for contact links
   - Update LinkedIn URL in `components/layout/Navbar.tsx`
   - Modify About page content in `app/about/page.tsx`

2. **Collaborations**:
   - Edit the `collaborations` array in `app/collaborations/page.tsx`
   - Add your real case studies and client logos

3. **Projects**:
   - Edit the `projects` array in `app/projects/page.tsx`
   - Update timeline with your actual projects

4. **Home Page**:
   - Customize services in `app/page.tsx`
   - Update value proposition and featured collaborations

### Add Images

Replace placeholder images with real photos:

1. Add images to `/public/images/` directory
2. Import and use them in components:
```tsx
import Image from 'next/image'

<Image
  src="/images/your-photo.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Colors & Styling

The color palette is defined in `tailwind.config.ts`:
- Primary: `wine` (#722F37)
- Burgundy shades: 50-950
- Modify the `extend.colors` section to customize

### Google Analytics

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Update `NEXT_PUBLIC_GA_ID` in `.env`
3. Replace the placeholder in `app/layout.tsx`

## Deployment on Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy with GitHub Integration

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "Import Project"

4. Select your GitHub repository

5. Configure environment variables in Vercel:
   - Add all variables from `.env` file
   - Make sure to add `NEXT_PUBLIC_` prefix for client-side variables

6. Click "Deploy"

### Environment Variables in Vercel

In your Vercel project settings, add these environment variables:

**Required for Email:**
- `CONTACT_EMAIL`
- Choose one email service and add its variables (SMTP, SendGrid, or Resend)

**Optional:**
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google Search Console verification

## Build for Production

```bash
npm run build
npm run start
```

This will create an optimized production build.

## Project Structure

```
wine-portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx           # About Me page
│   ├── collaborations/
│   │   └── page.tsx           # Collaborations page
│   ├── projects/
│   │   └── page.tsx           # Projects page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API
│   ├── layout.tsx             # Root layout with SEO
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Navigation component
│   │   └── Footer.tsx         # Footer component
│   └── ui/
│       ├── Hero.tsx           # Hero section
│       ├── ContactForm.tsx    # Contact form
│       ├── CollaborationCard.tsx
│       └── ProjectCard.tsx
├── public/
│   ├── images/                # Image assets
│   └── icons/                 # Icon assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.mjs            # Next.js configuration
└── package.json               # Dependencies
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React 19** - UI library
- **Vercel** - Hosting platform

## Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS with PurgeCSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Support

For issues or questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Open an issue in the repository

## Credits

Built with modern web technologies and best practices for wine industry professionals.

---

**Ready to customize and deploy your wine portfolio!** 🍷
