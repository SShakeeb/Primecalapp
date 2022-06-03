import axios from "axios";
import { APIResult, APIResponse } from "../types";
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
        return {data: null, error: null} // set error null just for time being needs to display error messages 
        
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
    } catch (error) {return {data: null, error: null}
    }
}

export default {
    getSum,
    getPrimeCheck,
}
