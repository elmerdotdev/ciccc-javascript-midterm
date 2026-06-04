// Exercise 20: Genre summary
//
// Group movies by genre.
// For each genre, calculate:
// - movieCount
// - averageRating rounded to 1 decimal place
// - totalBoxOffice rounded to 1 decimal place
// Sort by averageRating descending, then totalBoxOffice descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const movies = require('../data/movies.json');

const lodashSolution = null;

console.log(lodashSolution);

/*
Expected output:
[
  { genre: 'Sci-Fi', movieCount: 4, averageRating: 7.9, totalBoxOffice: 665.1 },
  { genre: 'Drama', movieCount: 5, averageRating: 7.9, totalBoxOffice: 265.2 },
  { genre: 'Adventure', movieCount: 3, averageRating: 7.7, totalBoxOffice: 331.8 },
  { genre: 'Animation', movieCount: 3, averageRating: 7.6, totalBoxOffice: 670.2 },
  { genre: 'Thriller', movieCount: 3, averageRating: 7.6, totalBoxOffice: 282.1 },
  { genre: 'Romance', movieCount: 3, averageRating: 7.6, totalBoxOffice: 187.6 },
  { genre: 'Action', movieCount: 4, averageRating: 7.5, totalBoxOffice: 840.4 },
  { genre: 'Comedy', movieCount: 5, averageRating: 6.8, totalBoxOffice: 276.3 }
]
*/
