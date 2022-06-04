import { useState } from "react";
import { APIResponse } from "../types";
import PrimeCalServices from "../services/PrimeCalServices";

const usePrimeCheck = (): Readonly<{
    getSum: (Numbers: string) => Promise<APIResponse>;
    getPrime: (Number: number) => Promise<APIResponse>;
    resultRes: Readonly<APIResponse> | undefined;
}> => {
    const [resultRes,setResultRes] = useState<APIResponse | null>(null);
    const getSum = async (Numbers: string): Promise<APIResponse> => {
        const { data, error} = await PrimeCalServices.getSum(Numbers);
        if (!data|| error) {
            alert(error?.message);
          }
        setResultRes(data); 
        return resultRes;
    }
    const getPrime = async (Number: number): Promise<APIResponse> => {
        const { data, error} = await PrimeCalServices.getPrimeCheck(Number);
        if (!data|| error) {
            alert(error?.message);
          }
        setResultRes(data);
        return resultRes;
    }
    return { resultRes, getSum, getPrime };
}

export default usePrimeCheck;
