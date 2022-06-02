import React from "react";
import '../styling/Custom.css';
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import usePrimeCheck from "../stateHooks/usePrimeCheck";

const InputModal = () => {
    const [inputVal, setInputVal] = useState('');
    const { getSum, getPrime} = usePrimeCheck();
    const onSubmit = () => {
        inputVal.length>1 ? getSum(inputVal): getPrime(parseInt(inputVal));
    };
    return(
        <div>
            <TextField id="outlined-basic" label="Enter number separated by ," variant="outlined" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <Button variant="contained" disabled={!inputVal} onClick={onSubmit}>
                Check Prime Number
            </Button>
        </div>
    );
}
export default InputModal;