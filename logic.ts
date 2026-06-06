interface Court {
    id:string;
    size:number;
    overlappingNeighbours:string[];
}

/**|A  |B   | 
 * |C |D |E |
 */
const courts:Court[] = [
    {id:"A", size:7, overlappingNeighbours:["C", "D"]},
    {id:"B", size:7, overlappingNeighbours:["D", "E"]},
    {id:"C", size:5, overlappingNeighbours:["A"]},
    {id:"D", size:5, overlappingNeighbours:["A", "B"]},
    {id:"E", size:5, overlappingNeighbours:["B"]}
];

// input example - currentBookedCourts => ["A"] => output => blocked => C,D and Availabled -> B, E
export function getAvailableCourts(currentBookedCourts:string[]):{blockedCourts:string[],availableCourts:string[]} {
    // need to block the courts that are overlapping
    const blockedSet = new Set<string>();
    for(let i=0;i<currentBookedCourts.length;i++){
        const court = courts.find((item)=> item.id===currentBookedCourts[i]);
        court?.overlappingNeighbours.forEach((item)=>{
            blockedSet.add(item);
        });
    }
    
    const availableCourts:string[] =[];
    courts.forEach((court)=>{
        if(!currentBookedCourts.find((item)=>item===court.id) && !blockedSet.has(court.id)){
            availableCourts.push(court.id);
        }
    });
    return {
        availableCourts,
        blockedCourts:[...blockedSet],
    }
}

export { courts };