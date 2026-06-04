// Exercise 17: Supplier scorecard
//
// Group products by supplier.
// For each supplier, return:
// - supplier
// - productCount
// - averageRating rounded to 1 decimal place
// - totalRevenue rounded to 2 decimal places
// - lowStockCount for products with stock below 25
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
  { supplier: 'TechSource', productCount: 3, averageRating: 4.3, totalRevenue: 192044.96, lowStockCount: 0 },
  { supplier: 'TrailWorks', productCount: 3, averageRating: 4.5, totalRevenue: 155417.6, lowStockCount: 1 },
  { supplier: 'AudioLab', productCount: 2, averageRating: 4, totalRevenue: 128774.37, lowStockCount: 1 },
  { supplier: 'ActiveSupply', productCount: 4, averageRating: 4.2, totalRevenue: 128130.17, lowStockCount: 1 },
  { supplier: 'ScreenHub', productCount: 2, averageRating: 4.3, totalRevenue: 122476.08, lowStockCount: 2 },
  { supplier: 'HomeBase', productCount: 3, averageRating: 4.4, totalRevenue: 90873.35, lowStockCount: 0 },
  { supplier: 'TravelMart', productCount: 2, averageRating: 4.4, totalRevenue: 84537.51, lowStockCount: 0 },
  { supplier: 'FreshMarket', productCount: 3, averageRating: 4.4, totalRevenue: 66455.82, lowStockCount: 0 },
  { supplier: 'SoftGoods', productCount: 3, averageRating: 4.1, totalRevenue: 63908.87, lowStockCount: 0 },
  { supplier: 'PaperTrail', productCount: 4, averageRating: 4.3, totalRevenue: 59099.71, lowStockCount: 0 },
  { supplier: 'CampDirect', productCount: 2, averageRating: 4.2, totalRevenue: 42472.01, lowStockCount: 0 },
  { supplier: 'CleanAir Co', productCount: 1, averageRating: 4.3, totalRevenue: 39197.55, lowStockCount: 1 },
  { supplier: 'OfficeDepot Pro', productCount: 1, averageRating: 4.4, totalRevenue: 37448.93, lowStockCount: 1 },
  { supplier: 'HealthMetrics', productCount: 1, averageRating: 4.2, totalRevenue: 28811.61, lowStockCount: 0 },
  { supplier: 'PantryWorld', productCount: 2, averageRating: 4.6, totalRevenue: 22332.83, lowStockCount: 0 }
]
*/
