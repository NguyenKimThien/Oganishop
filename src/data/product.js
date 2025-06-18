import product1 from  "../assets/img/product/product-1.jpg"
import product2 from  "../assets/img/product/product-2.jpg"
import product3 from  "../assets/img/product/product-3.jpg"
import product4 from  "../assets/img/product/product-4.jpg"
import product5 from  "../assets/img/product/product-5.jpg"
import product6 from  "../assets/img/product/product-6.jpg"
import product7 from  "../assets/img/product/product-7.jpg"
import product8 from  "../assets/img/product/product-8.jpg"
import product9 from  "../assets/img/product/product-9.jpg"
import product10 from  "../assets/img/product/product-10.jpg"
import product11 from  "../assets/img/product/product-11.jpg"
import product12 from  "../assets/img/product/product-12.jpg"
const listProduct = [
  {
    id: 1,
    src: product1,
    text: "Meat",
    price: 300,
    categories: ['organes', 'fresh meat'],
    detail: "Fresh, high-protein meat, ideal for grilling, stir-frying, or stewing. Sourced from reputable suppliers, ensuring daily freshness. Vacuum-packed to preserve flavor and quality.",
    description: "Carefully selected fresh meat, ensuring food safety. No preservatives used, suitable for families and restaurants.",
    weight: 1
  },
  {
    id: 2,
    src: product2,
    text: "Banana",
    price: 30,
    categories: ['organes', 'vegetables'],
    detail: "Naturally ripened bananas, mildly sweet, rich in potassium and vitamins. Harvested from organic gardens, pesticide-free. Thin skin, soft flesh, perfect for eating fresh or making smoothies.",
    description: "Bananas are nutritious, good for digestion and heart health. Help lower blood pressure and provide quick energy.",
    weight: 1
  },
  {
    id: 3,
    src: product3,
    text: "Guava",
    price: 30,
    categories: ['fresh meat', 'vegetables'],
    detail: "Fresh guava, crunchy and sweet, rich in vitamin C and fiber. Grown organically, free from harmful chemicals. Great for eating raw, juicing, or salads.",
    description: "Guava boosts immunity and aids digestion. Regular consumption helps beautify skin and control weight.",
    weight: 1
  },
  {
    id: 4,
    src: product4,
    text: "Grape",
    price: 300,
    categories: ['organes', 'vegetables'],
    detail: "Fresh grapes, juicy and naturally sweet, rich in antioxidants. Chilled immediately after harvest to maintain freshness. Thin skin, small seeds, easy to eat.",
    description: "Grapes beautify skin and support heart health. Enjoy as dessert or eat fresh.",
    weight: 0.5
  },
  {
    id: 5,
    src: product5,
    text: "Hamburger",
    price: 300,
    categories: ['fastfood', 'vegetables'],
    detail: "Delicious hamburger with beef patty, fresh vegetables, and soft bun. Perfectly seasoned and grilled for a juicy taste.",
    description: "A convenient fast food meal, suitable for lunch or dinner.",
    weight: 1
  },
  {
    id: 6,
    src: product6,
    text: "Mango",
    price: 300,
    categories: ['fastfood', 'fresh meat'],
    detail: "Ripe yellow mango, sweet and rich in vitamins A and C.",
    description: "Mango boosts immunity and beautifies skin.",
    weight: 1
  },
  {
    id: 7,
    src: product7,
    text: "Watermelon",
    price: 30,
    categories: ['fastfood', 'fresh meat'],
    detail: "Fresh watermelon, sweet and refreshing, perfect for summer.",
    description: "Watermelon is hydrating and replenishes minerals.",
    weight: 1
  },
  {
    id: 8,
    src: product8,
    text: "Apple",
    price: 30,
    categories: ['fastfood', 'fresh meat'],
    detail: "Fresh red apples, crisp and sweet, rich in fiber and vitamins.",
    description: "Apples help lower cholesterol and support digestion.",
    weight: 1
  },
  {
    id: 9,
    src: product9,
    text: "Fruit Juice",
    price: 20,
    categories: ['fastfood', 'fresh meat'],
    detail: "Fresh fruit juice, nutritious and packed with essential vitamins.",
    description: "A natural, healthy beverage.",
    weight: 0.5
  },
  {
    id: 10,
    src: product10,
    text: "Chicken",
    price: 30,
    categories: ['fastfood', 'organes'],
    detail: "Fresh chicken, tender and suitable for various dishes.",
    description: "Chicken is high in protein, good for health and muscle growth.",
    weight: 1
  },
  {
    id: 11,
    src: product11,
    text: "Tropicana Fruit",
    price: 30,
    categories: ['organes', 'fresh meat'],
    detail: "Fresh tropical fruits, diverse flavors.",
    description: "Provides essential vitamins and minerals for the body.",
    weight: 1
  },
  {
    id: 12,
    src: product12,
    text: "Vegetables",
    price: 30,
    categories: ['organes', 'fresh meat'],
    detail: "Clean, fresh vegetables, various types, rich in fiber.",
    description: "Vegetables supply vitamins and minerals, good for health.",
    weight: 1
  },
  // Add new products
  {
    id: 13,
    src: product1,
    text: "Beef Steak",
    price: 50,
    categories: ['fresh meat'],
    detail: "Imported beef, fresh and perfect for steak dishes.",
    description: "Beef is rich in iron and protein, boosting health.",
    weight: 1
  },
  {
    id: 14,
    src: product2,
    text: "Papaya",
    price: 25,
    categories: ['vegetables', 'organes'],
    detail: "Ripe papaya, sweet and rich in digestive enzymes.",
    description: "Papaya aids digestion and beautifies skin.",
    weight: 1
  },
  {
    id: 15,
    src: product3,
    text: "Pineapple",
    price: 28,
    categories: ['vegetables', 'organes'],
    detail: "Fresh pineapple, sweet and tangy, rich in vitamin C.",
    description: "Pineapple boosts immunity and aids digestion.",
    weight: 1
  },
  {
    id: 16,
    src: product4,
    text: "Carrot",
    price: 18,
    categories: ['vegetables'],
    detail: "Fresh carrots, crunchy and rich in beta-carotene.",
    description: "Carrots are good for eyesight and boost immunity.",
    weight: 1
  },
  {
    id: 17,
    src: product5,
    text: "French Fries",
    price: 22,
    categories: ['fastfood'],
    detail: "Crispy, delicious French fries.",
    description: "A tasty snack, suitable for all ages.",
    weight: 0.5
  },
  {
    id: 18,
    src: product6,
    text: "Orange",
    price: 27,
    categories: ['organes', 'vegetables'],
    detail: "Juicy fresh oranges, rich in vitamin C.",
    description: "Oranges boost immunity and beautify skin.",
    weight: 1
  },
  {
    id: 19,
    src: product7,
    text: "Broccoli",
    price: 32,
    categories: ['vegetables'],
    detail: "Fresh broccoli, rich in fiber and vitamin K.",
    description: "Broccoli helps prevent cancer and is good for bones.",
    weight: 1
  },
  {
    id: 20,
    src: product8,
    text: "Strawberry",
    price: 35,
    categories: ['organes', 'vegetables'],
    detail: "Fresh strawberries, mildly sweet, rich in antioxidants.",
    description: "Strawberries beautify skin and support heart health.",
    weight: 0.5
  },
  {
    id: 21,
    src: product9,
    text: "Lettuce",
    price: 15,
    categories: ['vegetables'],
    detail: "Fresh, crunchy lettuce, perfect for salads.",
    description: "Lettuce detoxifies the body and supports weight loss.",
    weight: 1
  },
  {
    id: 22,
    src: product10,
    text: "Eggs",
    price: 20,
    categories: ['organes'],
    detail: "Clean chicken eggs, rich in protein and nutrients.",
    description: "Eggs are a natural protein source, good for all ages.",
    weight: 0.5
  },
  {
    id: 23,
    src: product11,
    text: "Kiwi",
    price: 40,
    categories: ['organes', 'vegetables'],
    detail: "Fresh kiwi, sweet and tangy, rich in vitamins C and E.",
    description: "Kiwi boosts immunity and beautifies skin.",
    weight: 0.5
  },
  {
    id: 24,
    src: product12,
    text: "Tomato",
    price: 17,
    categories: ['vegetables'],
    detail: "Fresh tomatoes, juicy and rich in lycopene.",
    description: "Tomatoes are antioxidants and good for the heart.",
    weight: 1
  }
];
export default listProduct
