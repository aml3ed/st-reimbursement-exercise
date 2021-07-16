import { Project, ProjectData } from "./Project";

export function calcReimbursment(projects: ProjectData[]): number {
  // Initialize arrays to keep track of "seen" days in set
  const highCostTravel = [];
  const lowCostTravel = [];
  const highCostFull = [];
  const lowCostFull = [];
  // Loop through set
  projects.forEach((project) => {
    const proj = new Project(project);
  });
  return 0;
}
