// Sample product data
const products = [
    { name: "Pink Glitter", price: "$15.99" },
    { name: "Matte Black", price: "$12.99" },
    { name: "Clear Base Coat", price: "$8.99" }
];

// Render products to the page
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        productGrid.appendChild(div);
    });
}

renderProducts();
