//Part 1: Basic Arrays - Product Inventory
// Create the products array
var products = [
    {
        name: 'Product 1',
        price: 100,
        inventory: {
            stock: 10,
            colorOptions: ['red', 'blue', 'green'],
        },
    },
    {
        name: 'Product 2',
        price: 200,
        inventory: {
            stock: 20,
            colorOptions: ['red', 'blue'],
        },
    },
    {
        name: 'Product 3',
        price: 300,
        inventory: {
            stock: 30,
            colorOptions: ['green', 'yellow'],
        },
    },
];
// Implement the changeColor function
function changeColor(product, newColor) {
    // Update the color property
    product.inventory.colorOptions.push(newColor);
    // Adjust the price based on the new color
    if (newColor === 'red') {
        product.price *= 1.1; // Increase by 10%
    }
    else if (newColor === 'blue') {
        product.price *= 0.95; // Decrease by 5%
    }
}
// Display each product's details
products.forEach(function (product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(', ')));
    console.log('---');
});
// Example usage of the changeColor function
changeColor(products[0], 'red');
console.log('After changing color:');
products.forEach(function (product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(', ')));
    console.log('---');
});
