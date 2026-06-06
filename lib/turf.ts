export interface Court {
  id: string;
  size: number;
  overlappingNeighbours: string[];
}

const courts: Court[] = [
  { id: "A", size: 7, overlappingNeighbours: ["C", "D"] },
  { id: "B", size: 7, overlappingNeighbours: ["D", "E"] },
  { id: "C", size: 5, overlappingNeighbours: ["A"] },
  { id: "D", size: 5, overlappingNeighbours: ["A", "B"] },
  { id: "E", size: 5, overlappingNeighbours: ["B"] }
];


const courtMap = new Map<string, Court>(
  courts.map((c) => [c.id, c])
);

export function getAvailableCourts(currentBookedCourts: string[]): {
  blockedCourts: string[];
  availableCourts: string[];
} {

  const bookedSet = new Set<string>(currentBookedCourts);


  const blockedSet = new Set<string>();
  for (const id of currentBookedCourts) {
    const court = courtMap.get(id);
    court?.overlappingNeighbours.forEach((n) => blockedSet.add(n));
  }


  bookedSet.forEach((id) => blockedSet.delete(id));


  const availableCourts: string[] = [];
  for (const court of courts) {
    if (!bookedSet.has(court.id) && !blockedSet.has(court.id)) {
      availableCourts.push(court.id);
    }
  }

  return {
    availableCourts,
    blockedCourts: [...blockedSet]
  };
}

export { courts };