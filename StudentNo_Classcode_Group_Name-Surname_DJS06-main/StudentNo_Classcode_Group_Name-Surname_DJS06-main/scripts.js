// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

provinces.forEach(province => console.log(province))

names.forEach(name => console.log(name))


provinces.forEach((province, index) => console.log(`${names[index]} (${province})`))

let upperCase = provinces.map(province => province.toUpperCase())
console.log(upperCase)


let nameLength = names.map(name => name.length)
console.log(nameLength)

filteredProvince = provinces.filter(province => !province.includes('Cape'))
console.log (filteredProvince)

let containsS = names.map(name => name.includes('S') || name.includes('s'));
console.log(containsS)

let namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(namesToProvinces);

//Advanced Exercises (Single console.log Execution)

products.forEach(product => console.log(product.product))

let filteredName = products.filter(product => product.product.length < 6)
console.log(filteredName)

let validProducts = products.filter(product => {
  // Convert the price to a number and check if it's a valid number
  const price = parseFloat(product.price);
  return !isNaN(price);
});

let productsWithNumericPrices = validProducts.map(item => ({
  ...item,
  price: parseFloat(item.price)
}));

console.log(productsWithNumericPrices)
const totalPrice = productsWithNumericPrices.reduce((total, item) => total + item.price, 0);

console.log(totalPrice);

let concatenatedNames = products.reduce((acc, item) => {
  return acc + item.product + ' ';
}, '').trim();

console.log(concatenatedNames);

// Step 3: Use reduce to find the highest and lowest prices
const extremes = productsWithNumericPrices.reduce((acc, item) => {
  if (item.price > acc.highest.price) {
    acc.highest = item;
  }
  if (item.price < acc.lowest.price) {
    acc.lowest = item;
  }
  return acc;
}, { highest: productsWithNumericPrices[0], lowest: productsWithNumericPrices[0] });

// Step 4: Format the result string
const result = `Highest: ${extremes.highest.product}. Lowest: ${extremes.lowest.product}.`;

console.log(result);

// Use reduce to transform the product objects
const transformedProducts = products.reduce((acc, item) => {
  const transformedItem = {
    name: item.product,
    cost: item.price
  };
  acc.push(transformedItem);
  return acc;
}, []);

console.log(transformedProducts);
