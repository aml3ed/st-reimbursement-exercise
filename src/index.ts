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
      pushNoDups(highCostTravel, proj.startDate, proj.endDate);
      pushNoDups(highCostFull, ...proj.middleDays);
    } else {
      pushNoDups(lowCostTravel, proj.startDate, proj.endDate);
      pushNoDups(lowCostFull, ...proj.middleDays);
    }
    // Add days to allDaysWorked
    pushNoDups(allDaysWorked, proj.startDate, proj.endDate, ...proj.middleDays);
  });
  // Go back through and compare each array for overlaps in projects, take the higher cost full-day rate
  // Calculate cost based on reimbursement amount for each day
  return (
    highCostTravel.length * highCostTravelRate +
    highCostFull.length * highCostFullRate +
    lowCostTravel.length * lowCostTravelRate +
    lowCostFull.length * lowCostFullRate
  );
}

// Helper function to only add to array if not currently included
function pushNoDups(array, ...items: string[]): void {
  items.forEach((item) => {
    if (!array.includes(item)) {
      array.push(item);
    }
  });
}
