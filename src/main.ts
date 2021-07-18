import { calcReimbursment } from ".";
import { set1, set2, set3, set4 } from "../data";

function main() {
  console.log("-------- Project Set 1 --------");
  console.log("The reimbursement amount for project set 1 is:");
  console.log("$" + calcReimbursment(set1));
  console.log("-------- Project Set 2 --------");
  console.log("The reimbursement amount for project set 2 is:");
  console.log("$" + calcReimbursment(set2));
  console.log("-------- Project Set 3 --------");
  console.log("The reimbursement amount for project set 3 is:");
  console.log("$" + calcReimbursment(set3));
  console.log("-------- Project Set 4 --------");
  console.log("The reimbursement amount for project set 4 is:");
  console.log("$" + calcReimbursment(set4));
}
main();
