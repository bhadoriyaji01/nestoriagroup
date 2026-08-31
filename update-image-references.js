const fs = require('fs');
const path = require('path');

// Define all the files that need to be updated
const filesToUpdate = [
  'src/components/Navbar.jsx',
  'src/components/Seo.jsx',
  'src/components/TabsComponent.jsx',
  'src/pages/AboutUs.jsx',
  'src/pages/Aboutdholera.jsx',
  'src/pages/Achievements.jsx',
  'src/pages/Blog.jsx',
  'src/pages/Contact.jsx',
  'src/pages/Home.jsx',
  'src/pages/Media.jsx',
  'src/pages/Projects.jsx',
  'src/pages/Services.jsx',
  'src/pages/Team.jsx',
  'src/pages/Testimonial.jsx',
  'src/components/Carousel.jsx',
  'src/components/ParallaxBackground.jsx',
  'src/components/Header.jsx',
  'src/components/Footer.jsx'
];

// Function to update file content
function updateFileReferences(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File does not exist: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Replace all .png, .jpg, .jpeg extensions with .webp
  const originalContent = content;
  
  // Replace PNG references
  content = content.replace(/\.(png)/gi, '.webp');
  // Replace JPG references
  content = content.replace(/\.(jpg)/gi, '.webp');
  // Replace JPEG references
  content = content.replace(/\.(jpeg)/gi, '.webp');
  
  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated references in: ${filePath}`);
    updated = true;
  } else {
    console.log(`- No changes needed in: ${filePath}`);
  }
  
  return updated;
}

// Main function to update all files
function updateAllReferences() {
  console.log('Updating image references to WebP format...');
  
  let updatedCount = 0;
  for (const file of filesToUpdate) {
    try {
      const wasUpdated = updateFileReferences(file);
      if (wasUpdated) updatedCount++;
    } catch (error) {
      console.error(`Error updating ${file}:`, error);
    }
  }
  
  console.log(`\nCompleted! Updated ${updatedCount} files with WebP references.`);
}

// Run the update
updateAllReferences();