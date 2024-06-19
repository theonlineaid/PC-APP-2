/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.ts", included via Vite');

// Fetch data from the API
// Fetch data from the API
async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  
  // Function to display products in the HTML
  function displayProducts(products: any[]) {
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
      productsContainer.innerHTML = products.map(product => `
        <div class="product">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p>Price: $${product.price}</p>
          <img src="${product.image}" alt="${product.title}" />
          <button onclick="viewProductDetails(${product.id})">View Details</button>
        </div>
      `).join('');
    }
  }
  
  // Function to handle viewing product details
  function viewProductDetails(productId: number) {
    window.electron.openProductWindow(productId);
  }
  
  // Call the fetchProducts function when the window loads
  window.onload = () => {
    fetchProducts();
  };
  
  // Call the fetchProducts function when the window loads
  window.onload = () => {
    fetchProducts();
  };
