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
  

//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.
let values=Object.values(product);
console.log(values);

  