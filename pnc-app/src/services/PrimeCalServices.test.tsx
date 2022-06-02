import { getTestSum, getTestPrimeCheck, getTestPrimeCheckFalse, Numbers_To_Sum, Number_Is_Prime, Number_Is_Not_Prime } from "../tests/Fixtures";
import PrimeCalServices from "./PrimeCalServices";

describe("PrimeCalServices", () => {
    describe("getTestSum", () => {
        it("should return sum of number with it's status of prime number", async () => {
            const result = await PrimeCalServices.getSum(Numbers_To_Sum);
            expect(result.data).toEqual(getTestSum());
        });
    });
    describe("getTestPrimeCheck", () => {
        it("should return true if number is a prime number", async () => {
            const result = await PrimeCalServices.getPrimeCheck(Number_Is_Prime);
            expect(result.data).toEqual(getTestPrimeCheck());
        });
        it("should return false if number is not a prime number", async () => {
            const result = await PrimeCalServices.getPrimeCheck(Number_Is_Not_Prime);
            expect(result.data).toEqual(getTestPrimeCheckFalse());
        });
    });
});