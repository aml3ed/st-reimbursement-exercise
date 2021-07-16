import { Project, ProjectData } from "./Project";

const highCostTravelRate = 55;
const highCostFullRate = 85;
const lowCostTravelRate = 45;
const lowCostFullRate = 75;

export function calcReimbursment(projects: ProjectData[]): number {
  // Initialize arrays to keep track of "seen" days in set
  const allDaysWorked = [];
  const highCostTravel = [];
  const lowCostTravel = [];
  const highCostFull = [];
  const lowCostFull = [];
  // Loop through set and add days to each array
  projects.forEach((project) => {
    const proj = new Project(project);
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

  // Go back through and compare each array for overlaps in projects, take the higher cost full-day rate
  allDaysWorked.forEach((day) => {
    // each of these variables will be used to store bool and count value
    const isLowCostTravelDay = countOf(lowCostTravel, day);
    const isHighCostTravelDay = countOf(highCostTravel, day);
    const isLowCostFullDay = countOf(lowCostFull, day);
    const isHighCostFullDay = countOf(highCostFull, day);
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
    highCostTravel.length * highCostTravelRate +
    highCostFull.length * highCostFullRate +
    lowCostTravel.length * lowCostTravelRate +
    lowCostFull.length * lowCostFullRate
  );
}

// Helper function to only add to array if not currently included
function pushNoDups(array: any[], ...items: string[]): void {
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
function countOf(array: any[], item: any): number {
  return array.filter((x) => x === item).length;
}
