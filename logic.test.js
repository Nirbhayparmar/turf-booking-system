const assert = require('assert');
const { getAvailableCourts } = require('./logic');

function sortAndCompare(actual, expected) {
  return assert.deepStrictEqual([...actual].sort(), [...expected].sort());
}

function runTest(name, booked, expectedBlocked, expectedAvailable) {
  const result = getAvailableCourts(booked);
  sortAndCompare(result.blockedCourts, expectedBlocked);
  sortAndCompare(result.availableCourts, expectedAvailable);
  console.log(`PASS: ${name}`);
}

runTest(
    'booking all 5v5 courts blocks all 7v7 courts',
    ['C', 'D', 'E'],
    ['A', 'B'],
    []
)

runTest(
    'booking middle 5v5 court blocks both 7v7 courts',
    ['D'],
    ['A', 'B'],
    ['C', 'E']
)

runTest(
  'one 5v5 booked blocks one 7v7',
  ['C'],
  ['A'],
  ['B', 'D', 'E']
);

runTest(
  'one 7v7 booked blocks two 5v5',
  ['A'],
  ['C', 'D'],
  ['B', 'E']
);

runTest(
  'two 5v5 booked blocks both 7v7',
  ['C', 'D'],
  ['A', 'B'],
  ['E']
);

runTest(
  'two 7v7 booked blocks all 5v5',
  ['A', 'B'],
  ['C', 'D', 'E'],
  []
);

runTest(
  'no bookings returns all courts available',
  [],
  [],
  ['A', 'B', 'C', 'D', 'E']
);

runTest(
  'duplicate booking IDs are ignored consistently',
  ['A', 'A'],
  ['C', 'D'],
  ['B', 'E']
);

runTest(
  'booking non-existent court does not affect availability',
  ['X'],
  [],
  ['A', 'B', 'C', 'D', 'E']
);

runTest(
    'booking A and C blocks A, C and D, but B and E remain available',
    ['A', 'C'],
    ['A', 'C', 'D'],
    ['B', 'E']
)

console.log('All tests passed.');
