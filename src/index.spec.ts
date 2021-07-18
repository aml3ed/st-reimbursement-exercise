import { calcReimbursment } from ".";
import { set1, set2, set3, set4 } from "../data";
import { Day } from "./Day";
import { Project } from "./Project";

describe("Main testing sets", () => {
  it("should calculate set1 correctly", () => {
    expect(calcReimbursment(set1)).toBe(165);
  });
  it("should calculate set2 correctly", () => {
    expect(calcReimbursment(set2)).toBe(620);
  });
  it("should calculate set3 correctly", () => {
    expect(calcReimbursment(set3)).toBe(475);
  });
  it("should calculate set4 correctly", () => {
    expect(calcReimbursment(set4)).toBe(215);
  });
});

describe("Project class tests", () => {
  it("should calculate middle days correctly", () => {
    expect(new Project(set1[0], 0).middleDays).toStrictEqual([
      new Day("Wed, 02 Sep 2015 04:00:00 GMT", 0)
    ]);
    expect(new Project(set2[0], 0).middleDays).toStrictEqual([]);
    expect(new Project(set2[1], 1).middleDays).toStrictEqual([
      new Day("Sat, 05 Sep 2015 04:00:00 GMT", 1),
      new Day("Fri, 04 Sep 2015 04:00:00 GMT", 1),
      new Day("Thu, 03 Sep 2015 04:00:00 GMT", 1)
    ]);
    expect(new Project(set4[3], 1).middleDays).toStrictEqual([]);
  });
});

describe("Day class tests", () => {
  it("should compare two Days and find them equal", () => {
    expect(
      new Day("Wed, 02 Sep 2015 04:00:00 GMT", 0).isEqual(
        new Day("Wed, 02 Sep 2015 04:00:00 GMT", 0)
      )
    ).toBeTruthy();
  });
  it("should compare two Days and find them unequal", () => {
    expect(
      new Day("Wed, 02 Sep 2015 04:00:00 GMT", 0).isEqual({
        date: 1232435434535,
        projectKey: 0
      })
    ).toBeFalsy();
  });
  it("should calculate whether it has neighbors correctly", () => {
    expect(
      new Day(
        "Wed, 02 Sep 2015 04:00:00 GMT",
        0,
        "start"
      ).adjacentToOtherProject([
        new Day("Thu, 03 Sep 2015 04:00:00 GMT", 1),
        new Day("Wed, 02 Sep 2015 04:00:00 GMT", 1),
        new Day("Tue, 01 Sep 2015 04:00:00 GMT", 0)
      ])
    ).toEqual(1);
  });
});
