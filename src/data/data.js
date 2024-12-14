import pizza from "../assets/pizza.webp";

export const menu = [
  // Pitsa
  {
    id: 1,
    food_count: 0,
    name: "Tovuq Pitsa",
    price: 25000,
    ingredients: ["tovuq go'shti", "salat", "pomidor", "pitsa non"],
    category: "Fast Food",
    img: pizza,
  },
  {
    id: 2,
    food_count: 0,
    name: "Mol go'shtli Pitsa",
    price: 30000,
    ingredients: ["mol go'shti", "salat", "bodring", "pitsa non"],
    category: "Fast Food",
    img: pizza,
  },
  {
    id: 3,
    food_count: 0,
    name: "Sabzavotli Pitsa",
    price: 20000,
    ingredients: ["pomidor", "bodring", "makkajo'xori", "pitsa non"],
    category: "Fast Food",
    img: pizza,
  },

  // Ichimliklar
  {
    id: 4,
    food_count: 0,
    name: "Coca-Cola",
    price: 10000,
    size: "500ml",
    category: "Ichimlik",
    img: pizza,
  },
  {
    id: 5,
    food_count: 0,
    name: "Fanta",
    price: 10000,
    size: "500ml",
    category: "Ichimlik",
    img: pizza,
  },
  {
    id: 6,
    food_count: 0,
    name: "Sprite",
    price: 10000,
    size: "500ml",
    category: "Ichimlik",
    img: pizza,
  },

  // Hot Dog
  {
    id: 7,
    food_count: 0,
    name: "Oddiy Hot Dog",
    price: 15000,
    ingredients: ["sosiska", "xantal", "ketchup", "hot dog non"],
    category: "Fast Food",
    img: pizza,
  },
  {
    id: 8,
    food_count: 0,
    name: "Pishloqli Hot Dog",
    price: 18000,
    ingredients: ["sosiska", "pishloq", "ketchup", "hot dog non"],
    category: "Fast Food",
    img: pizza,
  },

  // Lavash
  {
    id: 9,
    food_count: 0,
    name: "Oddiy Lavash",
    price: 25000,
    ingredients: ["tovuq go'shti", "pishloq", "salat", "pomidor", "lavash non"],
    category: "Fast Food",
    img: pizza,
  },
  {
    id: 10,
    food_count: 0,
    name: "Double Lavash",
    price: 30000,
    ingredients: ["ikki qavat tovuq", "pishloq", "salat", "lavash non"],
    category: "Fast Food",
    img: pizza,
  },

  // Qo'shimchalar
  {
    id: 11,
    food_count: 0,
    name: "Fries",
    price: 10000,
    size: "200g",
    category: "Qo'shimcha",
    img: pizza,
  },
  {
    id: 12,
    food_count: 0,
    name: "Nachos",
    price: 15000,
    size: "150g",
    category: "Qo'shimcha",
    img: pizza,
  },

  // Dessert
  {
    id: 13,
    food_count: 1,
    name: "Choko Pitsa",
    price: 22000,
    ingredients: ["shokolad sousi", "banan", "pitsa non"],
    category: "Shirinlik",
    img: pizza,
  },
  {
    id: 14,
    food_count: 0,
    name: "Mevali Lavash",
    price: 25000,
    ingredients: ["banan", "olma", "yogurt", "lavash non"],
    category: "Shirinlik",
    img: pizza,
  },

  // Combo
  {
    id: 15,
    food_count: 0,
    name: "Pitsa Combo",
    price: 50000,
    includes: ["1x Tovuq Pitsa", "1x Fries", "1x Coca-Cola"],
    category: "Kombo",
    img: pizza,
  },
];
