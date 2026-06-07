import { getAvailableCourts } from './turf';

type TestCase = {
  name: string;
  booked: string[];
  expectedBlocked: string[];
  expectedAvailable: string[];
};

const tests: TestCase[] = [
  {
    name: 'booking all 5v5 courts blocks all 7v7 courts',
    booked: ['C', 'D', 'E'],
    expectedBlocked: ['A', 'B'],
    expectedAvailable: []
  },
  {
    name: 'booking middle 5v5 court blocks both 7v7 courts',
    booked: ['D'],
    expectedBlocked: ['A', 'B'],
    expectedAvailable: ['C', 'E']
  },
  {
    name: 'one 5v5 booked blocks one 7v7',
    booked: ['C'],
    expectedBlocked: ['A'],
    expectedAvailable: ['B', 'D', 'E']
  },
  {
    name: 'one 7v7 booked blocks two 5v5',
    booked: ['A'],
    expectedBlocked: ['C', 'D'],
    expectedAvailable: ['B', 'E']
  },
  {
    name: 'two 5v5 booked blocks both 7v7',
    booked: ['C', 'D'],
    expectedBlocked: ['A', 'B'],
    expectedAvailable: ['E']
  },
  {
    name: 'two 7v7 booked blocks all 5v5',
    booked: ['A', 'B'],
    expectedBlocked: ['C', 'D', 'E'],
    expectedAvailable: []
  },
  {
    name: 'no bookings returns all courts available',
    booked: [],
    expectedBlocked: [],
    expectedAvailable: ['A', 'B', 'C', 'D', 'E']
  },
  {
    name: 'duplicate booking IDs are ignored consistently',
    booked: ['A', 'A'],
    expectedBlocked: ['C', 'D'],
    expectedAvailable: ['B', 'E']
  },
  {
    name: 'booking non-existent court does not affect availability',
    booked: ['X'],
    expectedBlocked: [],
    expectedAvailable: ['A', 'B', 'C', 'D', 'E']
  },
  {
    name: 'booking A and C blocks A, C and D, but B and E remain available',
    booked: ['A', 'C'],
    expectedBlocked: ['D'],
    expectedAvailable: ['B', 'E']
  }
];

function sorted(arr: string[]) {
  return [...arr].sort();
}

describe('getAvailableCourts', () => {
  test.each(tests)('$name', ({ booked, expectedBlocked, expectedAvailable }) => {
    const result = getAvailableCourts(booked);
    expect(sorted(result.blockedCourts)).toEqual(sorted(expectedBlocked));
    expect(sorted(result.availableCourts)).toEqual(sorted(expectedAvailable));
  });
});
