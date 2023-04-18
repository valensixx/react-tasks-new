import React,{useState} from 'react';
import './App.css';
/*
create checkbox, text "i agree" and registration button
if checkbox is not clicked must be disabled and it can not be clicked
*/

export default function App() {
  const [isAgreed, setIsAgreed] = useState(false);
  return (
    <div>
      <div>
        <input 
          type="checkbox"
          onClick={(e)=>{
            setIsAgreed(e.target.checked);
          }}
        
        />
        <label>I agree!</label>
      </div>
      <div>
          <button disabled={isAgreed ? '' : 'disabled'}>
            Registration
          </button>
      </div>
    </div>
  );
}


