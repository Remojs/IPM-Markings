import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the JSON file
const productsFilePath = join(__dirname, 'src', 'data', 'products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

// Update each product image path
products.forEach(product => {
  // Update image paths
  if (product.image && product.image.includes('/src/assets/ISO/')) {
    // Extract the ISO number
    const isoNumber = product.isoNumber || product.image.split('/').pop().replace('.png', '');
    // Set relative path that works better with Vite
    product.image = `./src/assets/ISO/${isoNumber}.png`;
  }
});

// Write the updated JSON back to the file
fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');

console.log('All product image paths updated successfully!');
