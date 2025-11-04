# Next Steps - Lorenzo's Portfolio

## ✅ What's Already Done

- [x] Project structure created with Next.js + TypeScript + Tailwind
- [x] All 4 pages completed (Home, About, Collaborations, Projects)
- [x] **About page personalized with your real journey**:
  - High School → Franciacorta → Napa Valley (V.Sattui) → Alsace (Marcel Deiss) → Yarra Valley (Re'em Estate) → Vintrail Pro → Velvet Global
- [x] LinkedIn URLs updated to your profile: https://www.linkedin.com/in/lorenzo-canaglia/
- [x] Email updated to: lorenzo.canaglia@velvetglobal.it
- [x] SEO meta tags personalized with your name and credentials
- [x] Logo updated to "LC" (Lorenzo Canaglia)
- [x] Footer updated with "WSET Level 3" credential
- [x] Build tested successfully ✓

## 🎯 What You Need to Do Next

### 1. Add Your Photos (10 minutes)

Based on your photos:

**Photo 1 - Wine Tasting (Professional Headshot)**
- The one where you're tasting wine with grey jacket and green backpack
- **Save as**: `public/images/lorenzo-headshot.jpg`
- **Used for**: About page main photo

**Photo 2 - Event/Networking**
- The one at wine tasting event with orange background
- **Save as**: `public/images/lorenzo-event.jpg`
- **Used for**: Home or Collaborations page

**Photo 3 - Harvest Team**
- Group photo during vendemmia in vineyard
- **Save as**: `public/images/lorenzo-harvest.jpg`
- **Used for**: About page journey section

**How to add**:
```bash
cd /Users/Lorenzo/wine-portfolio
mkdir -p public/images
# Then drag your photos into public/images/ with the names above
```

See [IMAGE_GUIDE.md](IMAGE_GUIDE.md) for details.

### 2. Configure Email Service (15 minutes)

Choose ONE option:

#### Option A: Gmail (Easiest - Recommended)

1. Go to https://myaccount.google.com/apppasswords
2. Create an app password for "Mail"
3. Install Nodemailer:
   ```bash
   cd /Users/Lorenzo/wine-portfolio
   npm install nodemailer @types/nodemailer
   ```
4. Create `.env` file:
   ```bash
   cp .env.example .env
   ```
5. Edit `.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=lorenzo.canaglia@velvetglobal.it
   ```
6. Open `app/api/contact/route.ts` and **uncomment lines 48-72** (the Nodemailer section)

### 3. Test Locally (5 minutes)

```bash
cd /Users/Lorenzo/wine-portfolio
npm run dev
```

Visit http://localhost:3000 and test:
- All pages load correctly
- Your photos appear
- Contact form works and sends email
- LinkedIn links work

### 4. Update Content (Optional - 30 minutes)

#### Home Page
- Update services descriptions if needed
- Add real collaboration examples

#### Collaborations Page
Replace example collaborations with real clients:
- Edit `app/collaborations/page.tsx` (lines 5-61)
- Add real case studies and testimonials

#### Projects Page
Update with your real projects:
- Edit `app/projects/page.tsx` (lines 5-58)

### 5. Deploy to Vercel (10 minutes)

#### Step A: Push to GitHub
```bash
cd /Users/Lorenzo/wine-portfolio
git init
git add .
git commit -m "Initial commit: Lorenzo Canaglia wine portfolio"
git branch -M main
# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/wine-portfolio.git
git push -u origin main
```

#### Step B: Deploy on Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Add environment variables:
   - `SMTP_HOST` = smtp.gmail.com
   - `SMTP_PORT` = 587
   - `SMTP_SECURE` = false
   - `SMTP_USER` = your-gmail@gmail.com
   - `SMTP_PASS` = your-app-password
   - `CONTACT_EMAIL` = lorenzo.canaglia@velvetglobal.it
4. Click "Deploy"
5. Wait 2-3 minutes
6. Your site is live! 🎉

## 📋 Quick Checklist

```
Phase 1 - Local Setup (30 min):
[ ] Add your 3 photos to public/images/
[ ] Install nodemailer: npm install nodemailer @types/nodemailer
[ ] Create .env file with Gmail credentials
[ ] Uncomment Nodemailer code in app/api/contact/route.ts
[ ] Test locally: npm run dev
[ ] Test contact form sends email

Phase 2 - Content (30 min - optional):
[ ] Review and update Collaborations page
[ ] Review and update Projects page
[ ] Check all text sounds like you

Phase 3 - Deploy (15 min):
[ ] Create GitHub repository
[ ] Push code to GitHub
[ ] Connect to Vercel
[ ] Add environment variables in Vercel
[ ] Deploy
[ ] Test live site

Phase 4 - Polish (15 min):
[ ] Add custom domain (optional)
[ ] Set up Google Analytics (optional)
[ ] Share on LinkedIn!
```

## 🚀 Quick Commands Reference

```bash
# Navigate to project
cd /Users/Lorenzo/wine-portfolio

# Install dependencies (if needed)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Add all files to git
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main
```

## 📁 Key Files to Edit

| File | What to Update | Priority |
|------|----------------|----------|
| `public/images/` | Add your 3 photos | **HIGH** |
| `.env` | Email credentials | **HIGH** |
| `app/api/contact/route.ts` | Uncomment email code | **HIGH** |
| `app/collaborations/page.tsx` | Real collaborations | Medium |
| `app/projects/page.tsx` | Real projects | Medium |
| `app/page.tsx` | Home page content | Low |

## 🆘 Need Help?

Check these docs:
- [README.md](README.md) - Complete documentation
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md) - How to add photos
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guide
- [QUICKSTART.md](QUICKSTART.md) - 5-minute guide

## 📞 Contact Form Email

The contact form will send emails to: **lorenzo.canaglia@velvetglobal.it**

Make sure to:
1. Check spam folder for test emails
2. Add no-reply@gmail.com to contacts
3. Test with a real email address

## 🎨 Customization Ideas

Want to personalize further?

**Colors**: Edit `tailwind.config.ts` (line 11)
**Fonts**: Edit `app/layout.tsx` (line 7)
**Logo**: Already set to "LC" in `components/layout/Navbar.tsx`

## ⏱️ Time Estimate

- **Minimum** (just deploy): 45 minutes
- **Recommended** (with content updates): 2 hours
- **Complete** (with all customizations): 4 hours

## 🍷 Your Portfolio is Almost Ready!

The hardest part is done. Now just:
1. Add your photos ✨
2. Configure email 📧
3. Deploy to Vercel 🚀
4. Share with the world! 🌍

**Your personalized wine portfolio is waiting to go live!**

---

**Built for Lorenzo Canaglia - Italian Wine Export Professional** 🍇
