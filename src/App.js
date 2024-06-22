
import { useState } from 'react';
import './App.css';


function App() {


  const [count, setcount] = useState(0)

  const [step, setstep] = useState(1)
  

  const date = new Date("jun 10 2024");
  date.setDate(date.getDate()+count);
  
  function handlereset (){
    setcount(0)
    setstep(1)
  }
  
  return (
    <>
    <div>
      <input type='range' min="0" max="10" value={step} onChange={(e)=>setstep(Number(e.target.value))} />
     <span>Step:{step}</span>
        
    </div>
      <div>
        <button onClick={() => setcount((c) => c - step)}>-</button>
       <input type='text' value={count} onChange={(e)=>setcount(Number(e.target.value))} /> 
        <button onClick={() => setcount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)}days ago was`}
        </span>
        {date.toDateString()}
      </p>
     
     
     {count!==0 || step!==1? (<div>
        <button onClick={handlereset}>Reset </button>
      </div> ): null }
    </>
  );
}

export default App;
