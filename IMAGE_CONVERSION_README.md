# Image Conversion to WebP

This document outlines the process of converting images from PNG, JPG, and JPEG formats to WebP format in the Nestoria project.

## Why WebP?

WebP is a modern image format that provides superior compression and quality compared to traditional formats:
- **Smaller file sizes**: Up to 25-35% smaller than JPEG at the same quality
- **Better quality**: Better visual quality at the same file size
- **Transparency support**: Unlike JPEG, WebP supports transparency
- **Animation support**: Can be used for animated images like GIFs

## Conversion Process

### Automatic Conversion Script

We've created a script to automatically convert all images in the project:

1. **convert-images-to-webp-complete.js** - Complete script to convert all images in the project
2. **convert-images-to-webp.js** - Basic conversion script
3. **update-image-references.js** - Updates JSX file references

### Running the Conversion

```bash
# Install sharp for better conversion quality
npm install sharp

# Run the complete conversion script
node convert-images-to-webp-complete.js

# Or use the npm scripts
npm run convert-images
npm run update-references
npm run convert-all
```

### Files Updated

All JSX files in the project have been updated to reference `.webp` files instead of `.png`, `.jpg`, or `.jpeg`:

- `src/components/Navbar.jsx`
- `src/components/Seo.jsx`
- `src/components/TabsComponent.jsx`
- `src/pages/AboutUs.jsx`
- `src/pages/Aboutdholera.jsx`
- `src/pages/Achievements.jsx`
- `src/pages/Blog.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Faq.jsx`
- `src/pages/Home.jsx`
- `src/pages/LandDeal.jsx`
- `src/pages/Media.jsx`
- `src/pages/Projects.jsx`
- `src/pages/Services.jsx`
- `src/pages/Team.jsx`
- `src/pages/Testimonial.jsx`

### Image Directories Converted

- `src/assets/img/`
- `src/assets/img/icon/`
- `src/assets/img/project/`
- `src/assets/img/team/`
- `src/assets/img/team/management/`
- `src/assets/img/team/sales/`
- `src/assets/img/testomonials/`

## Verification

After conversion, please verify:

1. All images load correctly on the website
2. Image quality is acceptable
3. Page loading times have improved
4. No broken image links exist

## Reverting Changes

If you need to revert to original formats:

1. Restore original image files from backup
2. Revert JSX file changes to use original extensions
3. Update the import statements back to original formats

## Performance Impact

Converting to WebP typically results in:
- 25-35% reduction in image file sizes
- Faster page loading times
- Reduced bandwidth usage
- Better user experience on mobile devices

## Additional Notes

- The original images are preserved for now - you may want to remove them after confirming WebP works correctly
- Some older browsers may not support WebP (though most modern browsers do)
- Always test in your target browsers before deploying to production