export function calcReimbursment(set: Project[]): number {
  return 0;
}

type Project = {
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
