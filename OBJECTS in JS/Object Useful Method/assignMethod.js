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

//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
const target = {a:1,b:3};
const source = {b:2,c:4};
const mergedObject=Object.assign(target,source);
console.log(mergedObject); // Output: { a: 1, b: 2,c:4}

//!Think of it like painting a wall: if you paint a section blue and then paint over the same section with red, you'll see red, not blue. Similarly, Object.assign() "paints over" existing properties with new values.