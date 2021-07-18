export class Day {
  date: number;
  projectKey: number;
  isStartOrEnd: boolean;

  constructor(utcString: string, setIndex: number, isStartOrEnd?: boolean) {
    this.date = new Date(utcString).getTime();
    this.projectKey = setIndex;
    this.isStartOrEnd = isStartOrEnd || false;
  }

  get nextDayTime(): number {
    if (!this.date) throw Error("Date variable not constructed yet");
    return this.date + 1000 * 3600 * 24;
  }

  get prevDayTime(): number {
    if (!this.date) throw Error("Date variable not constructed yet");
    return this.date - 1000 * 3600 * 24;
  }

  get asUTCString(): string {
    return new Date(this.date).toUTCString();
  }

  isEqual(otherDay: { date: number; projectKey: number }): boolean {
    if (otherDay.date === this.date && otherDay.projectKey === this.projectKey)
      return true;
    return false;
  }
  countOfIn(array: Day[]): number {
    return array.filter((x) => x.date === this.date).length;
  }
  adjacentToOtherProject(array: Day[]): number {
    return this.isStartOrEnd
      ? array.filter(
          (x) =>
            (x.date === this.prevDayTime || x.date === this.nextDayTime) &&
            x.projectKey !== this.projectKey
        ).length
      : 0;
  }
}
