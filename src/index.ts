import { Day } from "./Day";
import { Project, ProjectData } from "./Project";

const highCostTravelRate = 55;
const highCostFullRate = 85;
const lowCostTravelRate = 45;
const lowCostFullRate = 75;

export function calcReimbursment(projects: ProjectData[]): number {
  // Initialize arrays to keep track of "seen" days in set
  const allDaysWorked = [] as Day[];
  const highCostTravel = [] as Day[];
  const lowCostTravel = [] as Day[];
  const highCostFull = [] as Day[];
  const lowCostFull = [] as Day[];
  // Loop through set and add days to each array
  projects.forEach((project, projectIndex) => {
    const proj = new Project(project, projectIndex);
    // Add day to high or low cost arrays depending on city of project
    if (proj.highCost) {
      highCostTravel.push(proj.startDate, proj.endDate);
      highCostFull.push(...proj.middleDays);
      // pushNoDups(highCostTravel, proj.startDate, proj.endDate);
      // pushNoDups(highCostFull, ...proj.middleDays);
    } else {
      lowCostTravel.push(proj.startDate, proj.endDate);
      lowCostFull.push(...proj.middleDays);
      // pushNoDups(lowCostTravel, proj.startDate, proj.endDate);
      // pushNoDups(lowCostFull, ...proj.middleDays);
    }
    // Add days to allDaysWorked
    pushNoDups(allDaysWorked, proj.startDate, proj.endDate, ...proj.middleDays);
  });

  // Setup counts for final tallying
  let highCostFullDays = 0,
    lowCostFullDays = 0,
    highCostTravelDays = 0,
    lowCostTravelDays = 0;
  // Go back through and compare each array for overlaps in projects
  allDaysWorked.forEach((day) => {
    // each of these variables will be used to store bool and count value
    const isLowCostTravelDay = day.countOfIn(lowCostTravel);
    const isHighCostTravelDay = day.countOfIn(highCostTravel);
    const isLowCostFullDay = day.countOfIn(lowCostFull);
    const isHighCostFullDay = day.countOfIn(highCostTravel);
    // Based on counts, we can tell if there are overlaps
    const hasOverlaps =
      isLowCostTravelDay +
      isHighCostTravelDay +
      isLowCostFullDay +
      isHighCostFullDay;

    // We can now count this day based on what yields the highest rate
    if (isHighCostFullDay || (isHighCostTravelDay && hasOverlaps > 1)) {
      // just count as high-cost full day
      highCostFullDays += 1;
    } else if (isLowCostFullDay || (isLowCostTravelDay && hasOverlaps > 1)) {
      // just count as low-cost full-day
      lowCostFullDays += 1;
    } else if (isHighCostTravelDay) {
      highCostTravelDays += 1;
    } else {
      lowCostTravelDays += 1;
    }
  });
  // Print Values for debugging
  console.log("------ High Cost Travel ------");
  console.table(highCostTravel);
  console.log("------ Low Cost Travel ------");
  console.table(lowCostTravel);
  console.log("------ High Cost Full ------");
  console.table(highCostFull);
  console.log("------ Low Cost Full ------");
  console.table(lowCostFull);
  // Calculate cost based on reimbursement amount for each day
  return (
    highCostTravelDays * highCostTravelRate +
    highCostFullDays * highCostFullRate +
    lowCostTravelDays * lowCostTravelRate +
    lowCostFullDays * lowCostFullRate
  );
}

// Helper function to only add to array if not currently included
function pushNoDups(array: any[], ...items: any[]): void {
  items.forEach((item) => {
    if (!array.includes(item)) {
      array.push(item);
    }
  });
}

// Helper function to remove item from array
function removeFrom(array: any[], item: any): void {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
}

// Helper function to count items in array
// function countOf(array: any[], item: any): number {
//   return array.filter((x) => x === item).length;
// }
