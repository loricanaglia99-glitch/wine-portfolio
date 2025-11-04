# Wine Portfolio - Launch Checklist

Use this checklist to prepare your portfolio for launch.

## Before You Start

- [ ] Navigate to the project directory: `cd /Users/Lorenzo/wine-portfolio`
- [ ] Install dependencies: `npm install`
- [ ] Create `.env` file: `cp .env.example .env`

## Content Customization

### Personal Information
- [ ] Update LinkedIn URL in [components/layout/Navbar.tsx](components/layout/Navbar.tsx:68)
- [ ] Update LinkedIn URL in [components/layout/Footer.tsx](components/layout/Footer.tsx:50)
- [ ] Update contact email in [components/layout/Footer.tsx](components/layout/Footer.tsx:63)
- [ ] Update email in `.env` file (`CONTACT_EMAIL`)

### Photos & Images
- [ ] Add your professional headshot to `public/images/headshot.jpg`
- [ ] Update image reference in About page (line 19 in `app/about/page.tsx`)
- [ ] Add collaboration logos to `public/images/collaborations/`
- [ ] Update logo references in Collaborations page

### About Page (Already Personalized!)
- [x] Journey timeline updated with your real story
- [x] Mission statement customized
- [x] Vision statement customized
- [ ] Review and make any final adjustments to [app/about/page.tsx](app/about/page.tsx)

### Home Page
- [ ] Review services section in [app/page.tsx](app/page.tsx:55-95)
- [ ] Update featured collaborations (lines 120-141)
- [ ] Customize value proposition text

### Collaborations Page
- [ ] Replace example collaborations with real clients in [app/collaborations/page.tsx](app/collaborations/page.tsx:5-61)
- [ ] Update statistics (line 74-91)
- [ ] Add real testimonials (lines 110-180)

### Projects Page
- [ ] Update projects list with your real projects in [app/projects/page.tsx](app/projects/page.tsx:5-58)
- [ ] Update impact statistics (lines 88-109)
- [ ] Review areas of expertise (lines 127-148)

## Email Configuration

### Choose ONE Option:

#### Option A: Gmail (Recommended for simplicity)
- [ ] Enable 2-factor authentication on your Google account
- [ ] Generate App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- [ ] Install Nodemailer: `npm install nodemailer @types/nodemailer`
- [ ] Update `.env` with Gmail credentials:
  ```env
  SMTP_HOST=smtp.gmail.com
  SMTP_PORT=587
  SMTP_SECURE=false
  SMTP_USER=your-email@gmail.com
  SMTP_PASS=your-app-password
  CONTACT_EMAIL=your-email@gmail.com
  ```
- [ ] Uncomment Nodemailer code in [app/api/contact/route.ts](app/api/contact/route.ts:48-72)

#### Option B: SendGrid
- [ ] Sign up at [sendgrid.com](https://sendgrid.com)
- [ ] Create API key
- [ ] Install SendGrid: `npm install @sendgrid/mail`
- [ ] Update `.env` with SendGrid API key
- [ ] Uncomment SendGrid code in [app/api/contact/route.ts](app/api/contact/route.ts:74-94)

#### Option C: Resend
- [ ] Sign up at [resend.com](https://resend.com)
- [ ] Create API key
- [ ] Install Resend: `npm install resend`
- [ ] Update `.env` with Resend API key
- [ ] Uncomment Resend code in [app/api/contact/route.ts](app/api/contact/route.ts:96-112)

## SEO & Analytics

- [ ] Get Google Analytics ID from [analytics.google.com](https://analytics.google.com)
- [ ] Add GA ID to `.env`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- [ ] Update GA ID in [app/layout.tsx](app/layout.tsx:39)
- [ ] Get Google Search Console verification code
- [ ] Add verification to `.env`: `NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code`
- [ ] Update verification in [app/layout.tsx](app/layout.tsx:24)
- [ ] Update site title if needed in [app/layout.tsx](app/layout.tsx:10)
- [ ] Update meta description if needed (line 11)

## Local Testing

- [ ] Run development server: `npm run dev`
- [ ] Test all pages:
  - [ ] Home: http://localhost:3000
  - [ ] About: http://localhost:3000/about
  - [ ] Collaborations: http://localhost:3000/collaborations
  - [ ] Projects: http://localhost:3000/projects
- [ ] Test navigation (desktop)
- [ ] Test mobile menu (resize browser to mobile width)
- [ ] Test contact form:
  - [ ] Try submitting empty form (should show validation)
  - [ ] Try invalid email (should show error)
  - [ ] Submit valid form (should show success message)
  - [ ] Check that email arrives in your inbox
- [ ] Test all links (LinkedIn, internal navigation, CTAs)
- [ ] Test smooth scroll to contact section

## Build & Production Test

- [ ] Build the project: `npm run build`
- [ ] Check for any errors
- [ ] Start production server: `npm start`
- [ ] Test production version on http://localhost:3000
- [ ] Verify everything works as expected

## Git Setup

- [ ] Initialize git: `git init`
- [ ] Add all files: `git add .`
- [ ] Create first commit: `git commit -m "Initial commit: Wine portfolio website"`
- [ ] Create GitHub repository at [github.com/new](https://github.com/new)
- [ ] Add remote: `git remote add origin YOUR-REPO-URL`
- [ ] Push to GitHub: `git push -u origin main`

## Vercel Deployment

### Setup
- [ ] Go to [vercel.com/new](https://vercel.com/new)
- [ ] Import your GitHub repository
- [ ] Verify framework is detected as Next.js
- [ ] Configure environment variables in Vercel:
  - [ ] Add email service variables (SMTP, SendGrid, or Resend)
  - [ ] Add `CONTACT_EMAIL`
  - [ ] Add `NEXT_PUBLIC_GA_ID` (if using Google Analytics)
  - [ ] Add `NEXT_PUBLIC_GOOGLE_VERIFICATION` (if using Search Console)
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

### Post-Deployment Testing
- [ ] Visit your deployed URL
- [ ] Test all pages on live site
- [ ] Test contact form on live site
- [ ] Verify email delivery works
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)

## Optional Enhancements

### Custom Domain
- [ ] Purchase domain (if needed)
- [ ] Add domain in Vercel: Settings → Domains
- [ ] Configure DNS records
- [ ] Wait for DNS propagation
- [ ] Test custom domain

### Performance
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Address any issues
- [ ] Optimize images if needed (compress, use WebP)
- [ ] Check Core Web Vitals

### Google Analytics Setup
- [ ] Verify tracking is working in GA dashboard
- [ ] Set up goals/conversions for contact form
- [ ] Set up audience segments

### Google Search Console
- [ ] Submit site to Google Search Console
- [ ] Submit sitemap (optional - can create with Next.js plugin)
- [ ] Monitor indexing status

### Social Media
- [ ] Create OpenGraph images for social sharing
- [ ] Test how site looks when shared on LinkedIn, Twitter, Facebook
- [ ] Update OpenGraph meta tags if needed

## Launch!

- [ ] Share your portfolio URL on LinkedIn
- [ ] Add link to your email signature
- [ ] Add link to your resume/CV
- [ ] Share with your network

## Maintenance

### Regular Updates
- [ ] Update content as you complete new projects
- [ ] Add new collaborations
- [ ] Update testimonials
- [ ] Keep dependencies updated: `npm update`

### Monitoring
- [ ] Check Google Analytics monthly
- [ ] Monitor contact form submissions
- [ ] Review and respond to inquiries promptly

## Troubleshooting

If you encounter issues, check:
- [ ] [README.md](README.md) - Full documentation
- [ ] [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment troubleshooting
- [ ] [QUICKSTART.md](QUICKSTART.md) - Quick reference
- [ ] Vercel deployment logs
- [ ] Browser console for errors

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Google Analytics**: https://analytics.google.com
- **Google Search Console**: https://search.google.com/search-console

---

## Progress Summary

- [x] Project created and configured
- [x] All pages built (Home, About, Collaborations, Projects)
- [x] All components created (Navbar, Footer, Hero, Cards, ContactForm)
- [x] API route for contact form created
- [x] Styling with Tailwind CSS completed
- [x] About page personalized with your real story
- [x] Responsive design implemented
- [x] SEO meta tags added
- [x] Documentation written (README, DEPLOYMENT, QUICKSTART)
- [x] Build tested successfully
- [ ] **Your turn**: Customize content and deploy!

**Estimated time to complete checklist**: 2-4 hours

**Good luck with your launch!** 🍷🚀
