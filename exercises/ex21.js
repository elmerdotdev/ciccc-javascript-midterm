// Exercise 21: Directors with strong track records
//
// Find directors with at least 3 movies.
// For each director, return:
// - director
// - movieCount
// - averageRating rounded to 1 decimal place
// - bestMovieTitle
// Sort by averageRating descending, then director alphabetically.
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
  { director: 'Aiko Tanaka', movieCount: 3, averageRating: 7.9, bestMovieTitle: 'Harbor Lights' },
  { director: 'Ari Kim', movieCount: 3, averageRating: 7.9, bestMovieTitle: 'Silent Circuit' },
  { director: 'Maya Chen', movieCount: 4, averageRating: 7.8, bestMovieTitle: 'Solar Drift' },
  { director: 'Nora Patel', movieCount: 4, averageRating: 7.7, bestMovieTitle: 'Glass Meadow' },
  { director: 'Hugo Larsen', movieCount: 4, averageRating: 7.4, bestMovieTitle: 'Stone Horizon' },
  { director: 'Sofia Rossi', movieCount: 3, averageRating: 7.4, bestMovieTitle: 'Golden Steps' },
  { director: 'Emma Wilson', movieCount: 3, averageRating: 7.2, bestMovieTitle: 'Pixel Parade' },
  { director: 'Carlos Vega', movieCount: 4, averageRating: 7.1, bestMovieTitle: 'Neon Badge' }
]
*/
