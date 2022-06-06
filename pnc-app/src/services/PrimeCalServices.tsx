import axios, { AxiosError } from "axios";
import { APIResult, APIResponse } from "../types";
import { getErrorMessage } from "./common";
const BASE_URL = 'http://localhost:9090/';
const SUM_ENDPOINT = BASE_URL + 'sumandcheck?numbers=';
const PRIME_CHECK_ENDPOINT = BASE_URL + 'checkprime?number=';

async function getSum(Numbers: string): Promise<APIResult<APIResponse>> {
    try {
        const {data} = await axios.get(
            SUM_ENDPOINT + Numbers
        );
        return {
            data: data,
            error: null,
        };
    } catch (error) {
        const error_TC = error as AxiosError // Type Casting
        return {data: null, error: { message:  getErrorMessage(error_TC)}} 
        
    }
}

async function getPrimeCheck(Number: number): Promise<APIResult<APIResponse>> {
    try {
        const {data} = await axios.get(
            PRIME_CHECK_ENDPOINT + Number
        );
        return {
            data: data,
            error: null,
        };
    } catch (error) {
        const error_TC = error as AxiosError // Type Casting
        return {data: null, error: { message:  getErrorMessage(error_TC)}}
    }
}

export default {
    getSum,
    getPrimeCheck,
}
