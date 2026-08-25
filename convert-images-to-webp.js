const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Define the image directories to process
const imageDirs = [
  'src/assets/img',
  'src/assets/img/icon',
  'src/assets/img/project',
  'src/assets/img/team',
  'src/assets/img/team/management',
  'src/assets/img/team/sales',
  'src/assets/img/testomonials'
];

// Function to convert image to WebP
function convertToWebP(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    // Check if sharp is available, otherwise use ffmpeg
    try {
      const sharp = require('sharp');
      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => resolve(outputPath))
        .catch(reject);
    } catch (e) {
      // If sharp is not available, try using ffmpeg
      const command = `ffmpeg -i "${inputPath}" -q:v 80 "${outputPath}"`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error converting ${inputPath}:`, error);
          reject(error);
        } else {
          console.log(`Successfully converted ${inputPath} to ${outputPath}`);
          resolve(outputPath);
        }
      });
    }
  });
}

// Function to find all image files in a directory
function findImageFiles(dir) {
  const imageFiles = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      imageFiles.push(...findImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
      imageFiles.push(fullPath);
    }
  }

  return imageFiles;
}

// Main function to convert all images
async function convertAllImages() {
  console.log('Starting image conversion to WebP format...');
  
  for (const dir of imageDirs) {
    if (fs.existsSync(dir)) {
      const imageFiles = findImageFiles(dir);
      
      for (const imagePath of imageFiles) {
        const ext = path.extname(imagePath).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          
          try {
            console.log(`Converting: ${imagePath}`);
            await convertToWebP(imagePath, webpPath);
            console.log(`✓ Converted: ${webpPath}`);
          } catch (error) {
            console.error(`✗ Failed to convert: ${imagePath}`, error);
          }
        }
      }
    }
  }
  
  console.log('Image conversion completed!');
}

// Run the conversion
convertAllImages().catch(console.error);