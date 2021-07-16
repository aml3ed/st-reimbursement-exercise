import { calcReimbursment } from ".";
import { set1, set2, set3, set4 } from "../data";
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
    expect(new Project(set1[0]).middleDays).toStrictEqual([
      "Wed, 02 Sep 2015 04:00:00 GMT"
    ]);
    expect(new Project(set2[0]).middleDays).toStrictEqual([]);
    expect(new Project(set2[1]).middleDays).toStrictEqual([
      "Sat, 05 Sep 2015 04:00:00 GMT",
      "Fri, 04 Sep 2015 04:00:00 GMT",
      "Thu, 03 Sep 2015 04:00:00 GMT"
    ]);
  });
});
