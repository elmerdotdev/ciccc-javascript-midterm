// Exercise 18: Regional prosperity comparison
//
// For every region that has at least 3 countries, calculate:
// - countryCount
// - totalPopulation
// - medianGdpPerCapita
// - highestDensityCountry
//
// highestDensityCountry should be the country name with the highest population / area.
// Sort by medianGdpPerCapita descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const countries = require('../data/countries.json');

const lodashSolution = null;

console.log(lodashSolution);

/*
Expected output:
[
  {
    region: 'Europe',
    countryCount: 4,
    totalPopulation: 274658781,
    medianGdpPerCapita: 43505.5,
    highestDensityCountry: 'United Kingdom'
  },
  {
    region: 'Americas',
    countryCount: 4,
    totalPopulation: 723655867,
    medianGdpPerCapita: 33509.5,
    highestDensityCountry: 'Mexico'
  },
  {
    region: 'Asia',
    countryCount: 4,
    totalPopulation: 3255127650,
    medianGdpPerCapita: 8701,
    highestDensityCountry: 'India'
  },
  {
    region: 'Africa',
    countryCount: 21,
    totalPopulation: 1173458608,
    medianGdpPerCapita: 1192,
    highestDensityCountry: 'Rwanda'
  }
]
*/
