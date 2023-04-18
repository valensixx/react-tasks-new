// import React, { useState } from "react";
// import InputLabelProps from "./InputLabelProps";

// /*
// Create reusable label input. Input field must take text for the label above, 
// text for a placeholder and function onInput
// */


// export default function InputLabel() {
//     const [label, setLabel] = useState('');
//     const styles={
//         title:{
//             fontWeight: 700,
//             textTransform: 'uppercase',
//         },
//         input: {
//             display: 'block',
//             width: '100%',
//             padding: 10,
//             fontSize: 20,
//         }
//     }

//     const labelChange = (e) => {
//         setLabel(e.target.value);
//         console.log(label);
//     }

//     return (
//         <div>
//             <label>THIS IS LABEL</label>
//             <input 
//                 type="text"
//                 onInput={labelChange}
//                 style={styles.input}
//             />
//             <InputLabel ></InputLabel>
//         </div>
//     );
// }