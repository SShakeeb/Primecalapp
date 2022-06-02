import { SumResponse, CheckPrimeResponse } from "../types";
import PrimeCalServices from "../services/PrimeCalServices";
import { useState } from "react";

const usePrimeCheck = (): Readonly<{
    getSum: (Numbers: string) => Promise<SumResponse>;
    getPrime: (Number: number) => Promise<CheckPrimeResponse>;
}> => {
    const [sumResult,setSumResult] = useState<SumResponse | null>(null);
    const [primeResult,setPrimeResult] = useState<CheckPrimeResponse | null>(null);
    const getSum = async (Numbers: string): Promise<SumResponse> => {
        const { data, error} = await PrimeCalServices.getSum(Numbers);
        if (!data|| error) {
            console.log(error);
          }
        setSumResult(data); 
        return sumResult;
    }
    const getPrime = async (Number: number): Promise<CheckPrimeResponse> => {
        const { data, error} = await PrimeCalServices.getPrimeCheck(Number);
        if (!data|| error) {
            console.log(error);
          }
        setPrimeResult(data);
        return primeResult;
    }
    return { getSum, getPrime };
}

export default usePrimeCheck;
