import React,{useState} from "react";
import InputLabel from "./InputLabel";
export default function InputLabelProps(){
    
    return(
        <div>
            <InputLabel
                title="Example"
                placeholder="Example placeholder"
                onInput={(e)=>{
                    console.log(e.target.value)
                }}
            />
        </div>
    );
}