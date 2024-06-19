// src/product.ts

async function fetchProductDetails(productId: number) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

function displayProductDetails(product: any) {
    const title = document.getElementById('product-title');
    const image = document.getElementById('product-image');
    const description = document.getElementById('product-description');
    const price = document.getElementById('product-price');

    if (title) title.textContent = product.title;
    if (image) image.src = product.image;
    if (description) description.textContent = product.description;
    if (price) price.textContent = `Price: $${product.price}`;
}

// Listen for the product ID from the main process
window.electron.onProductDetailsLoaded((event, productId) => {
    fetchProductDetails(productId);
});
