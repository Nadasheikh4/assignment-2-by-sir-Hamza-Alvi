//Part 1: Basic Arrays - Product Inventory

// Define the Product type alias
type Product = {
    name: string;
    price: number;
    inventory: {
      stock: number;
      colorOptions: string[];
    };
  };
  
  // Create the products array
  const products: Product[] = [
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
  function changeColor(product: Product, newColor: string) {
    // Update the color property
    product.inventory.colorOptions.push(newColor);
  
    // Adjust the price based on the new color
    if (newColor === 'red') {
      product.price *= 1.1; // Increase by 10%
    } else if (newColor === 'blue') {
      product.price *= 0.95; // Decrease by 5%
    }
  }
  
  // Display each product's details
  products.forEach((product) => {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
    console.log('---');
  });
  
  // Example usage of the changeColor function
  changeColor(products[0], 'red');
  console.log('After changing color:');
  products.forEach((product) => {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
    console.log('---');
  });
  