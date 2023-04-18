import React from "react";
import InputLabelProps from "./InputLabelProps";


 /*
 Create reusable label input. Input field must take text for the label above, 
 text for a placeholder and function onInput
 */

 
 export default function LabelInput(){
     return (
         <div>
             <InputLabelProps 
                 title="Example"
                 placeholder="Example placeholder"
                 onInput={(e)=>{
                     console.log(e.target.value);
                 }}
             />
         </div>
     );
 }