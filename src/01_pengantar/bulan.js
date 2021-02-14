let fruit = {
  name: "grape",
  description: "Popular and famous fruit.",
  colors: ["purple", "green"],
  isSmall: true,
  order: 1,
  owner: "me",
};

console.log(fruit["order"]);
console.log(fruit.description);
console.log(fruit.owner || "Bulan");

let keys = Object.keys(fruit);
console.log(keys);
let values = Object.values(fruit);
console.log(values);
let entries = Object.entries(fruit);
console.log(entries);

fruit.price = 25000;
console.log(fruit);
fruit.price = 35000;
console.log(fruit);
fruit.price = 50000;
console.log(fruit);

delete fruit.price;
console.log(fruit);
