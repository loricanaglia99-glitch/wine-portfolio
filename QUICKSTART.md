# Quick Start Guide

Get your wine portfolio up and running in 5 minutes!

## 1. Install Dependencies

```bash
cd wine-portfolio
npm install
```

## 2. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your email configuration (choose one option):

**Gmail Example:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourname@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=yourname@gmail.com
```

## 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 4. Customize Content

### Update Personal Information

1. **[components/layout/Footer.tsx](components/layout/Footer.tsx:25)** - LinkedIn URL and contact email
2. **[components/layout/Navbar.tsx](components/layout/Navbar.tsx:8)** - LinkedIn URL
3. **[app/layout.tsx](app/layout.tsx:11)** - SEO metadata and Google Analytics ID

### Update Page Content

1. **Home Page** - [app/page.tsx](app/page.tsx)
   - Services offered
   - Value proposition
   - Featured collaborations

2. **About Page** - [app/about/page.tsx](app/about/page.tsx)
   - Your journey story
   - Mission & vision
   - Professional background

3. **Collaborations** - [app/collaborations/page.tsx](app/collaborations/page.tsx)
   - Client list
   - Case studies
   - Testimonials

4. **Projects** - [app/projects/page.tsx](app/projects/page.tsx)
   - Project timeline
   - Impact metrics
   - Areas of expertise

### Add Your Photos

1. Add images to [public/images/](public/images/)
2. Update image references in components
3. Replace placeholder content

## 5. Configure Email Service

Choose ONE option and follow the setup:

### Option A: Gmail (Easiest)

1. Enable 2-factor authentication on your Google account
2. Generate an App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Install dependencies:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```
4. Uncomment Nodemailer section in [app/api/contact/route.ts](app/api/contact/route.ts:48)
5. Update `.env` with your credentials

### Option B: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Install dependency:
```bash
npm install @sendgrid/mail
```
4. Uncomment SendGrid section in [app/api/contact/route.ts](app/api/contact/route.ts:73)
5. Update `.env` with your API key

### Option C: Resend

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Install dependency:
```bash
npm install resend
```
4. Uncomment Resend section in [app/api/contact/route.ts](app/api/contact/route.ts:96)
5. Update `.env` with your API key

## 6. Test Locally

1. **Test all pages**:
   - Home: http://localhost:3000
   - About: http://localhost:3000/about
   - Collaborations: http://localhost:3000/collaborations
   - Projects: http://localhost:3000/projects

2. **Test contact form**:
   - Fill out the form on the home page
   - Click "Send Message"
   - Verify you receive the email

3. **Test responsive design**:
   - Open DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M)
   - Test on different screen sizes

## 7. Deploy to Vercel

### Quick Deploy

```bash
npm install -g vercel
vercel login
vercel
```

### Or Use GitHub Integration

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR-GITHUB-REPO-URL
git push -u origin main
```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add environment variables
5. Click "Deploy"

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Common Issues

### Build Error
```bash
npm run build
```
Check the error message and fix TypeScript or import errors.

### Contact Form Not Sending
1. Verify `.env` file exists and has correct values
2. Check you uncommented the email service code in `route.ts`
3. Verify your email credentials are correct

### Port Already in Use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill
# Or use a different port
npm run dev -- -p 3001
```

## Project Structure

```
wine-portfolio/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── collaborations/    # Collaborations page
│   ├── projects/          # Projects page
│   └── api/contact/       # Contact form API
├── components/            # React components
│   ├── layout/           # Navbar, Footer
│   └── ui/               # Reusable UI components
├── public/               # Static assets
│   └── images/          # Your photos
├── .env                  # Environment variables (create this)
├── .env.example         # Example env variables
└── README.md            # Full documentation
```

## Next Steps

1. ✅ Customize content with your information
2. ✅ Add your professional photos
3. ✅ Configure email service
4. ✅ Test locally
5. ✅ Deploy to Vercel
6. ✅ Add custom domain (optional)
7. ✅ Set up Google Analytics
8. ✅ Share your portfolio!

## Need Help?

- 📖 [Full README](README.md)
- 🚀 [Deployment Guide](DEPLOYMENT.md)
- 🔧 [Next.js Docs](https://nextjs.org/docs)
- 💬 [Tailwind Docs](https://tailwindcss.com/docs)

---

**Your wine portfolio is ready to launch!** 🍷✨
