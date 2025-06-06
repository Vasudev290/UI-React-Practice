import { sum } from "../../Tests/sum"

test("Sum function should calculate the sum of the numbers", () => {
   const result =  sum(3, 4);

   //Assertion
   expect(result).toBe(7);
})