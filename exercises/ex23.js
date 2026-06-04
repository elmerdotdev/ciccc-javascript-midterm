// Exercise 23: Award-winning movies by country
//
// Use only movies that have at least one award.
// Group them by country.
// For each country, return:
// - country
// - awardWinningMovieCount
// - awards as a sorted array of unique award names
// Sort by awardWinningMovieCount descending, then country alphabetically.
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
  {
    country: 'Japan',
    awardWinningMovieCount: 3,
    awards: [ 'Best Director', 'Best Original Score' ]
  },
  {
    country: 'United Kingdom',
    awardWinningMovieCount: 3,
    awards: [ 'Best Actress', 'Best Animated Feature', 'Best Screenplay' ]
  },
  {
    country: 'United States',
    awardWinningMovieCount: 3,
    awards: [ 'Best Animated Feature', 'Best Sound', 'Best Stunts', 'Best Visual Effects' ]
  },
  {
    country: 'Canada',
    awardWinningMovieCount: 2,
    awards: [ 'Best Screenplay', 'Best Visual Effects' ]
  },
  {
    country: 'Italy',
    awardWinningMovieCount: 2,
    awards: [ 'Audience Choice', 'Best Actress' ]
  },
  {
    country: 'Norway',
    awardWinningMovieCount: 2,
    awards: [ 'Best Cinematography', 'Best Editing' ]
  }
]
*/
