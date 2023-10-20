import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(null); 
 
  function logic(op){
    if (op == "plus") setResult((result) => result + Number(inputRef.current.value)) ;
    else if (op == "minus") setResult((result) => result - Number(inputRef.current.value));
    else if (op == "times") setResult((result) => result * Number(inputRef.current.value));
    else if (op == "divide") setResult((result) => result / Number(inputRef.current.value));
  }

  function plus(e) { 
    e.preventDefault(); 
    logic("plus")
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    logic("minus")
  };
 
  function times(e) { 
    e.preventDefault(); 
    if (result) logic("times");
    else setResult(Number(inputRef.current.value)); // prevents multiplying by zero loop
  }; 
 
  function divide(e) { 
    e.preventDefault();
    if (result) logic("divide");
    else setResult(Number(inputRef.current.value)); // prevents dividing by zero
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = null;
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    inputRef.current.value = null;
    setResult(null);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>minus</button>
        <button onClick={times}>mulitply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>DC</button>
        <button onClick={resetResult}>AC</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
