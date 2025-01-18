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



//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.

Object.freeze(product);
product.name="Desktop";
product.id="545655";
console.log(product.id,product.name);