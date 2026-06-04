// Exercise 16: Normalized student records
//
// Create a normalized object of active Vancouver students in Web-0526 keyed by id.
// Each value should contain:
// - name
// - campus
// - cohort
// - courseScores as an object of course code -> score
// - projectAverage rounded to 1 decimal place
// - skillCount
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const students = require('../data/students.json');

const lodashSolution = null;

console.log(lodashSolution);

/*
Expected output:
{
  S001: {
    name: 'Ava Chen',
    campus: 'Vancouver',
    cohort: 'Web-0526',
    courseScores: { JS: 91, HTML: 88, CSS: 93 },
    projectAverage: 92,
    skillCount: 3
  },
  S002: {
    name: 'Liam Park',
    campus: 'Vancouver',
    cohort: 'Web-0526',
    courseScores: { JS: 74, HTML: 79, CSS: 72 },
    projectAverage: 74.5,
    skillCount: 2
  },
  S007: {
    name: 'Sophia Brown',
    campus: 'Vancouver',
    cohort: 'Web-0526',
    courseScores: { JS: 68, HTML: 81, CSS: 74 },
    projectAverage: 71.5,
    skillCount: 2
  },
  S010: {
    name: 'Mason Davis',
    campus: 'Vancouver',
    cohort: 'Web-0526',
    courseScores: { JS: 86, HTML: 80, CSS: 84 },
    projectAverage: 85,
    skillCount: 2
  },
  S022: {
    name: 'Daniel Wright',
    campus: 'Vancouver',
    cohort: 'Web-0526',
    courseScores: { JS: 87, HTML: 85, CSS: 88 },
    projectAverage: 88,
    skillCount: 3
  },
  S034: {
    name: 'Sebastian Campbell',
    campus: 'Vancouver',
    cohort: 'Web-0526',
    courseScores: { JS: 94, HTML: 90, CSS: 92 },
    projectAverage: 93,
    skillCount: 4
  }
}
*/
