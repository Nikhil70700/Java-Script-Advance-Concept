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

//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
const hasOwnProperty=Object.hasOwnProperty("name");
const hasOwnProperty2=Object.hasOwnProperty("myName");
console.log(hasOwnProperty); // true
console.log(hasOwnProperty2);