import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import usePrimeCheck from "../stateHooks/usePrimeCheck";
import OutputModal from "./OutputModal";

const style = {
    component: "form",
    display: "flex", 
    alignItems: "center",
    justifyContent: "center",
    autoComplete: "off",
  };

const InputModal = () => {
    const [inputVal, setInputVal] = useState('');
    const { resultRes, getSum, getPrime} = usePrimeCheck();
    const [showOutputModal, setOutputModal] = useState(false);
    const onSubmit = () => {
        setOutputModal(true);
        inputVal.length>1 ?
            getSum(inputVal) : getPrime(parseInt(inputVal));
    };
    return(
        <Box sx={style}>
            <TextField
                required
                className='relative_pos'
                id="outlined-basic"
                label="Enter number separated by ," 
                variant="outlined" 
                value={inputVal} 
                onChange={e => setInputVal(e.target.value)}
            />
            <Button className='relative_pos' variant="contained" disabled={!inputVal} onClick={onSubmit}>
                Submit
            </Button>
            {resultRes && 
                <OutputModal
                    result={resultRes.result}
                    isPrime={resultRes.isPrime}
                    show={showOutputModal}
                    handleClose={() => setOutputModal(false)}
                />
            }
        </Box>
    );
}
export default InputModal;