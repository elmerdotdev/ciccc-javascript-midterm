// Exercise 15: Product category revenue summary
//
// Use only products that are not discontinued.
// Group products by category.
// For each category, return:
// - category
// - productCount
// - totalRevenue rounded to 2 decimal places
// - averageRating rounded to 1 decimal place
// - topProduct, the product name with the highest estimated revenue in that category
//
// Estimated revenue = price * total yearly units sold.
// Sort by totalRevenue descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');

const lodashSolution = null;

console.log(lodashSolution);

/*
Expected output:
[
  {
    category: 'Electronics',
    productCount: 7,
    totalRevenue: 457151.63,
    averageRating: 4.4,
    topProduct: 'Noise Cancel Headphones'
  },
  {
    category: 'Home',
    productCount: 6,
    totalRevenue: 200996.11,
    averageRating: 4.4,
    topProduct: 'Air Purifier Mini'
  },
  {
    category: 'Outdoor',
    productCount: 5,
    totalRevenue: 197889.61,
    averageRating: 4.4,
    topProduct: 'Rain Shell Jacket'
  },
  {
    category: 'Fitness',
    productCount: 5,
    totalRevenue: 156941.78,
    averageRating: 4.2,
    topProduct: 'Adjustable Dumbbell'
  },
  {
    category: 'Travel',
    productCount: 3,
    totalRevenue: 97334.51,
    averageRating: 4.2,
    topProduct: 'Carry-On Spinner'
  },
  {
    category: 'Grocery',
    productCount: 5,
    totalRevenue: 88788.65,
    averageRating: 4.5,
    topProduct: 'Espresso Beans 1kg'
  },
  {
    category: 'Stationery',
    productCount: 4,
    totalRevenue: 59099.71,
    averageRating: 4.3,
    topProduct: 'Notebook 3 Pack'
  }
]
*/
