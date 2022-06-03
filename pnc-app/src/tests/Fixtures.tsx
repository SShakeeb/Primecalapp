import { APIResponse } from "../types";
export const Numbers_To_Sum = "1,2,3";
export const Number_Is_Prime = 11;
export const Number_Is_Not_Prime = 9;
export function getTestSum(): Readonly<APIResponse> {
    return (
        {"result":6,"isPrime":false}
    )
}
export function getTestPrimeCheck(): Readonly<APIResponse> {
    return (
        {"isPrime":true}
    )
}
export function getTestPrimeCheckFalse(): Readonly<APIResponse> {
    return (
        {"isPrime":false}
    )
}