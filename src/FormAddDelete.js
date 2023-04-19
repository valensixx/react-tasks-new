import React, { useState } from "react";

/*
Create form with select. Data must be added from array. 
Every array contains label and value. Also add and delete button.
Pressing the button, in ul, will add element with delete option.
*/

export default function Form() {
    const [selectOptopns, setSelectOptions] = useState([
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
    ]);

    const[currentSelection, setCurrentSelection] = useState('');

    const[array, serArray] = useState([]);

    return (
        <div>
            <select value={currentSelection}>
                <option value="">Select</option>
                {selectOptopns.map(o => <option key={o.value} value={o.value}>
                    {o.label}
                </option>)}
            </select>
            <button onClick={()=>{

            }}>Add</button>
            <div>
                <ul>
                    {array.map(i => <li key={i}>{i}</li> )}
                </ul>
            </div>
        </div>
    );
}