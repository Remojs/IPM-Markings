import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the JSON file
const productsFilePath = join(__dirname, 'src', 'data', 'products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

// Update each product that doesn't have isoNumber, name_en, name_es, or descriptions
products.forEach(product => {
  // Extract ISO number from the ID or image path
  const isoNumber = product.id.toString();
  
  // Only add properties if they don't exist
  if (!product.isoNumber) {
    product.isoNumber = isoNumber;
  }
  
  if (!product.name_en) {
    product.name_en = `${product.name} Pipe`;
  }
  
  if (!product.name_es) {
    // Create Spanish name based on English name
    product.name_es = `Cinta para ${product.name}`;
  }
  
  if (!product.description_en) {
    product.description_en = `Durable pipe marking tape for ${product.name.toLowerCase()} identification, suitable for marine environments.`;
  }
  
  if (!product.description_es) {
    product.description_es = `Cinta de marcado de tuberías duradera para identificación de ${product.name.toLowerCase()}, adecuada para entornos marinos.`;
  }
});

// Write the updated JSON back to the file
fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');

console.log('All products updated successfully with ISO numbers and missing properties!');
