// Exercise 12: Cohort risk list
//
// Find students who are active or on probation and are academically at risk.
// A student is at risk when attendance is below 80 OR overall average is below 70.
// Return: id, name, cohort, attendance, average rounded to 1 decimal place, reasons.
// reasons should be an array containing "low attendance" and/or "low average".
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
    id: 'S007',
    name: 'Sophia Brown',
    cohort: 'Web-0526',
    attendance: 76,
    average: 73.2,
    reasons: [ 'low attendance' ]
  },
  {
    id: 'S012',
    name: 'Logan Taylor',
    cohort: 'Data-0526',
    attendance: 70,
    average: 65.8,
    reasons: [ 'low attendance', 'low average' ]
  },
  {
    id: 'S014',
    name: 'James Thomas',
    cohort: 'Web-0526',
    attendance: 64,
    average: 62,
    reasons: [ 'low attendance', 'low average' ]
  },
  {
    id: 'S020',
    name: 'Alexander Young',
    cohort: 'Web-0526',
    attendance: 78,
    average: 71.8,
    reasons: [ 'low attendance' ]
  },
  {
    id: 'S024',
    name: 'Michael Green',
    cohort: 'Web-0526',
    attendance: 73,
    average: 65.4,
    reasons: [ 'low attendance', 'low average' ]
  },
  {
    id: 'S033',
    name: 'Aria Phillips',
    cohort: 'UX-0526',
    attendance: 79,
    average: 78,
    reasons: [ 'low attendance' ]
  },
  {
    id: 'S035',
    name: 'Scarlett Parker',
    cohort: 'Data-0526',
    attendance: 72,
    average: 67,
    reasons: [ 'low attendance', 'low average' ]
  }
]
*/
