import { calcReimbursment } from ".";
import { set1 } from "../data";

describe("Main testing sets", () => {
  it("should calculate set1 correctly", () => {
    expect(calcReimbursment(set1)).toBe(165);
  });
  it("should calculate set2 correctly", () => {
    expect(calcReimbursment(set1)).toBe(620);
  });
  it("should calculate set3 correctly", () => {
    expect(calcReimbursment(set1)).toBe(475);
  });
  it("should calculate set4 correctly", () => {
    expect(calcReimbursment(set1)).toBe(215);
  });
});
