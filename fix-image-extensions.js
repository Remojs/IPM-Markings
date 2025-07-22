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
let fixCount = 0;
products.forEach(product => {
  // Check if image path is missing .png extension
  if (product.image && !product.image.endsWith('.png')) {
    product.image = `${product.image}.png`;
    fixCount++;
  }
});

// Write the updated JSON back to the file
fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');

console.log(`Fixed ${fixCount} image paths missing .png extension`);
