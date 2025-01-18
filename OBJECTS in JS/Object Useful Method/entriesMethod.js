const product = {
    id: 1,
    name: "Laptop",
    category: "Computers",
    brand: "ExampleBrand",
    price: 999.99,
    stock: 50,
    description:
      "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
    image: "image link will be added during projects",
  };
  

//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.

const entries=Object.entries(product);
console.log(entries);