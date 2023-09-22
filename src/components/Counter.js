import React from "react";
import { useState } from "react";


function Counter() {
    const currentDate = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
   

    

    const [step, setStep] = useState(0);
    const [counter, setCounter] = useState(0);
   
    currentDate.setDate(currentDate.getDate() + counter);
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    function handlePrevious(){
        if (step > 0 || step < 0 ){
            setCounter(counter - step);
        } else {
            setCounter(counter - 1)
        }
    }

    function handleNext(){
        if (step > 0 || step < 0 ){
            setCounter(counter + step);
        } else {
            setCounter(counter + 1)
        }
        
    }

    function stepIncrease(){
        setStep(step + 1);
    }

    
    function stepDecrease(){
        setStep(step - 1);
    }

    return (
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
    <h1>Use Count to move date forward or backward. Use Step to move the Count by a certain amount.</h1>
    </div>
    <div style={{ display: 'flex', alignItems: 'center'}} >
        
    <div></div>
        <button onClick={stepDecrease}>-</button>
      <h1>Step: {step}</h1>
      <button onClick={stepIncrease}>+</button>
      </div> 
       
        
        
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handlePrevious}>-</button>
      <h1>Count: {counter} </h1>
      <button onClick={handleNext}>+</button>
      </div>
      <br />
      <div>
       <h1>  {counter > 0 ? (
  <span>{counter} days from today is </span>
) : counter < 0 ? (
  <span>{counter}days ago is </span>
) : (
  <span>Today is </span>
)}

        
         {formattedDate}</h1>
         
      </div>
    </div>
    )
}


export default Counter;