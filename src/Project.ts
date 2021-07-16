export class Project {
  /**
   * Whether the city is high (true) or low (false) cost
   */
  highCost: boolean;
  /**
   * Date the project begins in month/day/year format
   */
  startDate: string;
  /**
   * Date the project end in month/day/year format
   */
  endDate: string;
  /**
   * Days in-between the start and end date in month/day/year
   */
  middleDays: string[];

  constructor(projectData: ProjectData) {
    this.highCost = projectData.highCost;
    // Setup start, end, and middle days
    const startDay = new Date(projectData.startDate);
    const endDay = new Date(projectData.endDate);
    this.startDate = startDay.toUTCString();
    this.endDate = endDay.toUTCString();
    let dayCursor = new Date(endDay);
    this.middleDays = [];
    // Loop back from end date until start date and log the "middle" days in an array
    while (dayCursor > startDay) {
      const prevDay = new Date(
        dayCursor.getTime() - 1000 * 3600 * 24
      ).toUTCString();
      if (prevDay !== startDay.toUTCString()) {
        this.middleDays.push(prevDay);
      }
      dayCursor = new Date(prevDay);
    }
  }
}

export type ProjectData = {
  /**
   * Whether the city is high (true) or low (false) cost
   */
  highCost: boolean;
  /**
   * Date the project begins in month/day/year format
   */
  startDate: string;
  /**
   * Date the project end in month/day/year format
   */
  endDate: string;
};
