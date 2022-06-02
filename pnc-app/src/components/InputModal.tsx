import React from "react";
import '../styling/Custom.css';
import { TextField, Button } from "@mui/material";
import { useState } from "react";

const InputModal = () => {
    const [inputVal, setInputVal] = useState('');
    return(
        <div>
            <TextField id="outlined-basic" label="Enter number separated by ," variant="outlined" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <Button variant="contained" disabled={!inputVal} >Check Prime Number</Button>
        </div>
    );
}
export default InputModal;