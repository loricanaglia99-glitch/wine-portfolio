# Image Guide - How to Add Your Photos

## Photos to Add

Based on the images you shared, here's where to place each photo:

### 1. Professional Headshot (Wine Tasting Photo)
**Photo**: The one where you're tasting wine with grey jacket and green backpack
**Location**: `/Users/Lorenzo/wine-portfolio/public/images/lorenzo-headshot.jpg`
**Used in**: About page (main profile photo)
**Recommended size**: 800x800px or 1200x1200px (square or 4:3 ratio)

### 2. Event/Networking Photo
**Photo**: The one at the wine tasting event with orange background
**Location**: `/Users/Lorenzo/wine-portfolio/public/images/lorenzo-event.jpg`
**Used in**: Home page or Collaborations page
**Recommended size**: 1200x800px (landscape)

### 3. Harvest/Team Photo
**Photo**: Group photo during harvest in the vineyard
**Location**: `/Users/Lorenzo/wine-portfolio/public/images/lorenzo-harvest.jpg`
**Used in**: About page (journey section - Alsace or Yarra Valley)
**Recommended size**: 1200x800px (landscape)

## How to Add Photos

### Step 1: Create Images Directory
```bash
cd /Users/Lorenzo/wine-portfolio
mkdir -p public/images
```

### Step 2: Save Your Photos

Save each photo with the names mentioned above in the `public/images/` directory.

You can do this by:
1. **Drag and drop** the files into the folder
2. **Copy-paste** from your downloads/photos folder
3. **Download** from your cloud storage to this location

### Step 3: Optimize Images (Optional but Recommended)

For best performance, optimize your images:

**Online Tools:**
- [TinyPNG](https://tinypng.com/) - Compress without losing quality
- [Squoosh](https://squoosh.app/) - Google's image compressor

**Recommended Settings:**
- Format: JPEG or WebP
- Quality: 80-85%
- Max width: 1920px for landscape, 1200px for portrait

### Step 4: Update the Code

The code is already prepared to use these images. Once you add the photos to `public/images/`, they will automatically appear on the site.

## Where Photos Are Used

### Home Page
- Hero background (optional): Can add a wine-related background
- Currently using gradient overlay - can be replaced with photo

### About Page
**Main Headshot** (line 19 in `app/about/page.tsx`):
```tsx
<div className="relative h-96 bg-gradient-to-br from-gray-200 to-burgundy-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
  {/* Replace this with: */}
  <Image
    src="/images/lorenzo-headshot.jpg"
    alt="Lorenzo Canaglia - Wine Professional"
    fill
    className="object-cover"
    priority
  />
</div>
```

### Optional: Add Photos to Journey Timeline

You can add small photos next to each journey milestone (Franciacorta, Napa Valley, Alsace, Yarra Valley, etc.)

## Quick Reference

| Photo | Filename | Size | Where Used |
|-------|----------|------|------------|
| Wine tasting (main) | `lorenzo-headshot.jpg` | 1200x1200px | About page hero |
| Event/networking | `lorenzo-event.jpg` | 1200x800px | Home/Collaborations |
| Harvest/vineyard | `lorenzo-harvest.jpg` | 1200x800px | About page journey |

## After Adding Photos

1. **Test locally**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000/about to see your photos

2. **Build and deploy**:
   ```bash
   npm run build
   git add public/images
   git commit -m "Add professional photos"
   git push
   ```

3. **Verify on live site** after Vercel deployment completes

## Image Best Practices

✅ **Do:**
- Use high-quality, professional photos
- Compress images before uploading
- Use descriptive filenames
- Keep aspect ratios consistent
- Test on mobile devices

❌ **Don't:**
- Upload very large files (>2MB)
- Use low-resolution images
- Forget to add alt text for accessibility
- Use too many images (slows down site)

## Need Help?

If you need help adding or optimizing images, you can:
1. Use the Next.js Image component (already imported)
2. Refer to [Next.js Image Optimization docs](https://nextjs.org/docs/app/api-reference/components/image)
3. Test different image sizes to see what looks best

---

**Your photos will make the portfolio much more personal and professional!** 📸
