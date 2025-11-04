# Deployment Guide

This guide will walk you through deploying your wine portfolio to Vercel with GitHub integration.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Your repository pushed to GitHub

## Step 1: Prepare Your Repository

1. Initialize git (if not already done):
```bash
cd wine-portfolio
git init
```

2. Create a `.gitignore` file (already included in the project)

3. Commit your code:
```bash
git add .
git commit -m "Initial commit: Wine portfolio website"
```

4. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name it: `wine-portfolio`
   - Make it public or private (your choice)
   - Don't initialize with README (you already have one)

5. Push to GitHub:
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/wine-portfolio.git
git push -u origin main
```

## Step 2: Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)

2. Click "Import Git Repository"

3. If this is your first time:
   - Click "Continue with GitHub"
   - Authorize Vercel to access your repositories

4. Find and select your `wine-portfolio` repository

5. Click "Import"

## Step 3: Configure Project Settings

On the configuration page:

1. **Project Name**: `wine-portfolio` (or customize)

2. **Framework Preset**: Next.js (should be auto-detected)

3. **Root Directory**: `./` (leave as default)

4. **Build Command**: `npm run build` (auto-filled)

5. **Output Directory**: `.next` (auto-filled)

6. **Install Command**: `npm install` (auto-filled)

## Step 4: Add Environment Variables

Click "Environment Variables" and add the following:

### Required for Email (Choose ONE option):

**Option A: Nodemailer (SMTP)**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@yourdomain.com
CONTACT_EMAIL=your-email@example.com
```

**Option B: SendGrid**
```
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=your-email@example.com
```

**Option C: Resend**
```
RESEND_API_KEY=your-resend-api-key
RESEND_FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=your-email@example.com
```

### Optional (Recommended):

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

**Important**:
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Other variables are server-side only (secure for API keys)

## Step 5: Deploy

1. Click "Deploy"

2. Vercel will:
   - Clone your repository
   - Install dependencies
   - Build the project
   - Deploy to a production URL

3. Wait for deployment (usually 2-3 minutes)

4. Once complete, you'll see:
   - ✅ Build succeeded
   - Your live URL: `https://wine-portfolio-xxx.vercel.app`

## Step 6: Configure Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"

2. Add your custom domain:
   - Enter your domain (e.g., `yourdomain.com`)
   - Click "Add"

3. Configure DNS:
   - If using Vercel nameservers (recommended):
     - Copy the nameserver addresses
     - Update your domain registrar with these nameservers

   - If using existing DNS provider:
     - Add an A record pointing to `76.76.21.21`
     - Add a CNAME for `www` pointing to `cname.vercel-dns.com`

4. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## Step 7: Test Your Deployment

1. Visit your deployed URL

2. Test all pages:
   - Home page
   - About page
   - Collaborations page
   - Projects page

3. Test the contact form:
   - Fill out the form
   - Submit
   - Check that you receive the email

4. Test on mobile devices:
   - Check responsive design
   - Test navigation menu
   - Verify all interactions work

## Automatic Deployments

Now that your site is connected to GitHub:

1. Every push to `main` branch triggers a production deployment
2. Every pull request creates a preview deployment
3. You can see all deployments in your Vercel dashboard

Example workflow:
```bash
# Make changes to your code
git add .
git commit -m "Update about page content"
git push origin main

# Vercel automatically deploys the changes
```

## Environment Variables Management

To update environment variables after deployment:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add, edit, or delete variables
4. Click "Save"
5. Redeploy for changes to take effect:
   - Go to "Deployments"
   - Click "..." on the latest deployment
   - Click "Redeploy"

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Common issues:
   - Missing dependencies: Add to `package.json`
   - Environment variables: Ensure all required variables are set
   - TypeScript errors: Fix in your code

### Contact Form Not Working

1. Verify environment variables are set correctly
2. Check email service configuration:
   - SMTP: Verify credentials and host
   - SendGrid: Verify API key is valid
   - Resend: Verify API key is valid
3. Check Vercel function logs for errors

### Custom Domain Not Working

1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check Vercel domain settings for any errors
4. Clear your browser cache

### Images Not Loading

1. Ensure images are in `/public` directory
2. Use correct paths: `/images/photo.jpg` (not `./images/`)
3. Check image file names match exactly (case-sensitive)

## Performance Optimization

After deployment, optimize your site:

1. **Run Lighthouse Audit**:
   - Open DevTools in Chrome
   - Go to "Lighthouse" tab
   - Run audit
   - Address any issues

2. **Optimize Images**:
   - Use Next.js Image component
   - Compress images before uploading
   - Use WebP format when possible

3. **Monitor Performance**:
   - Use Vercel Analytics (Settings → Analytics)
   - Check Core Web Vitals
   - Monitor page load times

## Security Checklist

- [ ] Environment variables are set in Vercel (not committed to git)
- [ ] `.env` file is in `.gitignore`
- [ ] Contact form validates input
- [ ] Email API keys are secure
- [ ] HTTPS is enabled (automatic on Vercel)

## Monitoring

1. **Vercel Analytics**:
   - Enable in project settings
   - Monitor visitor metrics
   - Track performance

2. **Google Analytics**:
   - Ensure `NEXT_PUBLIC_GA_ID` is set
   - Verify tracking in GA dashboard
   - Set up goals and conversions

3. **Error Tracking**:
   - Consider adding Sentry or similar
   - Monitor function errors in Vercel logs

## Updating Content

To update your portfolio content:

1. Edit the relevant files locally:
   - `app/about/page.tsx` - About content
   - `app/collaborations/page.tsx` - Collaborations
   - `app/projects/page.tsx` - Projects

2. Commit and push:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

3. Vercel automatically deploys the changes

## Backup

Regularly backup your:
- Repository (GitHub already does this)
- Environment variables (document them securely)
- Custom configuration files

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Your wine portfolio is now live!** 🚀🍷
