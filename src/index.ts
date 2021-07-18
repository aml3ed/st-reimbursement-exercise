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
    } else {
      lowCostTravel.push(proj.startDate, proj.endDate);
      lowCostFull.push(...proj.middleDays);
    }
    // Add days to allDaysWorked
    pushNoDups(allDaysWorked, proj.startDate, proj.endDate, ...proj.middleDays);
  });

  // Setup counts for final tallying
  let highCostFullDays = 0,
    lowCostFullDays = 0,
    highCostTravelDays = 0,
    lowCostTravelDays = 0;
  const countedDays = [] as Day[];
  // Go back through and compare each array for overlaps in projects
  allDaysWorked.forEach((day) => {
    // If we've already counted this day, don't count it twice
    if (day.countOfIn(countedDays) > 0) return;
    // each of these variables will be used to store bool and count value
    const isLowCostTravelDay = day.countOfIn(lowCostTravel);
    const isHighCostTravelDay = day.countOfIn(highCostTravel);
    const isLowCostFullDay = day.countOfIn(lowCostFull);
    const isHighCostFullDay = day.countOfIn(highCostFull);
    // See if this day bumps up against another project day
    const hasNeighbor = day.adjacentToOtherProject(allDaysWorked);
    // Based on counts, we can tell if there are overlaps or conditions to turn travel days into full days
    const hasOverlaps =
      isLowCostTravelDay +
      isHighCostTravelDay +
      isLowCostFullDay +
      isHighCostFullDay +
      hasNeighbor;
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
    // Add day to counted array
    countedDays.push(day);
  });
  // Calculate cost based on reimbursement amount for each day
  return (
    highCostTravelDays * highCostTravelRate +
    highCostFullDays * highCostFullRate +
    lowCostTravelDays * lowCostTravelRate +
    lowCostFullDays * lowCostFullRate
  );
}

function pushNoDups(array: Day[], ...items: Day[]): void {
  items.forEach((day) => {
    if (array.filter((x) => x.isEqual(day)).length === 0) array.push(day);
  });
}
