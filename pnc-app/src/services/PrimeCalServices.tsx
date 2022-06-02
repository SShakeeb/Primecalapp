import axios from "axios";
const BASE_URL = 'http://localhost:9090/';
const SUM_ENDPOINT = BASE_URL + 'sumandcheck?numbers=';
const PRIME_CHECK_ENDPOINT = BASE_URL + 'checkprime?number=';

const getSum = async (Numbers: string) =>{
    try {
        const sum = await axios.get(
            SUM_ENDPOINT + Numbers
        );
        return sum;
    } catch (err) {
        console.log("get Sum error:", err)
    }
}

const getPrimeCheck = async (Number: number) =>{
    try {
        const checkPrime = await axios.get(
            PRIME_CHECK_ENDPOINT + Number
        );
        return checkPrime;
    } catch (err) {
        console.log("get PrimeCheck error:", err)
    }
}

export {
    getSum,
    getPrimeCheck,
}
