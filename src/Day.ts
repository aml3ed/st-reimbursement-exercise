export class Day {
  date: number;
  projectKey: number;

  constructor(utcString: string, setIndex: number) {
    this.date = new Date(utcString).getTime();
    this.projectKey = setIndex;
  }

  nextDayTime(): number {
    if (!this.date) throw Error("Date variable not constructed yet");
    return this.date + 1000 * 3600 * 24;
  }

  prevDayTime(): number {
    if (!this.date) throw Error("Date variable not constructed yet");
    return this.date - 1000 * 3600 * 24;
  }

  isEqual(otherDay: { date: number; projectKey: number }): boolean {
    if (otherDay.date === this.date && otherDay.projectKey === this.projectKey)
      return true;
    return false;
  }
  countOfIn(array: Day[]): number {
    return array.filter((x) => x.isEqual(this)).length;
  }
}
