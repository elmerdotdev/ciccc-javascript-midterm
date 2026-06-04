// Exercise 11: Campus performance summary
//
// Group active students by campus.
// For each campus, calculate:
// - activeStudentCount
// - averageAttendance rounded to 1 decimal place
// - averageOverallScore rounded to 1 decimal place
// Sort from highest averageOverallScore to lowest.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const students = require('../data/students.json');

const lodashSolution = null;

console.log(lodashSolution);

/*
Expected output:
[
  {
    campus: 'Toronto',
    activeStudentCount: 10,
    averageAttendance: 90.2,
    averageOverallScore: 86.4
  },
  {
    campus: 'Montreal',
    activeStudentCount: 9,
    averageAttendance: 88.9,
    averageOverallScore: 85.1
  },
  {
    campus: 'Vancouver',
    activeStudentCount: 12,
    averageAttendance: 89.3,
    averageOverallScore: 84.4
  }
]
*/
