import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Function to convert image to WebP using sharp (preferred) or ffmpeg
async function convertToWebP(inputPath, outputPath) {
  try {
    // Try to use sharp for conversion if available
    const sharp = await import('sharp');
    await sharp.default(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`✓ Converted (using Sharp): ${inputPath} → ${outputPath}`);
  } catch (sharpError) {
    console.log(`Sharp not available, trying ffmpeg: ${sharpError.message}`);
    // Fallback to ffmpeg
    try {
      const command = `ffmpeg -i "${inputPath}" -q:v 80 "${outputPath}"`;
      await execAsync(command);
      console.log(`✓ Converted (using FFmpeg): ${inputPath} → ${outputPath}`);
    } catch (ffmpegError) {
      console.error(`✗ Failed to convert: ${inputPath}`, ffmpegError.message);
      throw ffmpegError;
    }
  }
}

// Function to find all image files in a directory and subdirectories
function findImageFiles(dir) {
  let imageFiles = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      imageFiles = imageFiles.concat(findImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
      imageFiles.push(fullPath);
    }
  }

  return imageFiles;
}

// Main function to convert all images in the project
async function convertAllImages() {
  console.log('Starting image conversion to WebP format...\n');
  
  const imageDirs = [
    'src/assets/img',
    'src/assets/img/icon',
    'src/assets/img/project',
    'src/assets/img/team',
    'src/assets/img/team/management',
    'src/assets/img/team/sales',
    'src/assets/img/testomonials'
  ];

  let totalConverted = 0;
  let totalFailed = 0;

  for (const dir of imageDirs) {
    if (fs.existsSync(dir)) {
      console.log(`\nProcessing directory: ${dir}`);
      const imageFiles = findImageFiles(dir);
      
      for (const imagePath of imageFiles) {
        const ext = path.extname(imagePath).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          
          if (fs.existsSync(webpPath)) {
            console.log(`- Skipping (already exists): ${webpPath}`);
            continue;
          }
          
          try {
            console.log(`Converting: ${imagePath}`);
            await convertToWebP(imagePath, webpPath);
            totalConverted++;
          } catch (error) {
            console.error(`✗ Failed to convert: ${imagePath}`, error.message);
            totalFailed++;
          }
        }
      }
    } else {
      console.log(`Directory does not exist: ${dir}`);
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`Image conversion completed!`);
  console.log(`✓ Successfully converted: ${totalConverted} images`);
  console.log(`✗ Failed conversions: ${totalFailed} images`);
  console.log('='.repeat(50));
  
  if (totalConverted > 0) {
    console.log('\nNext steps:');
    console.log('1. Verify that the converted WebP images look correct');
    console.log('2. Update your code to reference the new .webp files instead of .png/.jpg/.jpeg');
    console.log('3. Optionally, remove the original .png/.jpg/.jpeg files after confirming WebP works correctly');
  }
}

// Run the conversion
convertAllImages().catch(console.error);