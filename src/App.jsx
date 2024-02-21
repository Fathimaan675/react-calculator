import { useState } from 'react'

import './App.css'

function App() {

  const [displayValue, setDisplayValue] = useState('');
  const displayContent = (content) => {
    setDisplayValue((prevValue) => prevValue + content);
  };

  const clearScreen = () => {
    setDisplayValue('');
  };
  const deleteLastCharacter = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };
  const finalOutput = () => {
    try {
      setDisplayValue(eval(displayValue));
    } catch {
      setDisplayValue('error');
    }
  };

  return (
    <>
    <div className='row'>
    <div className="row1 ">
      <div id="calculator  ">
        <br/>
        <h2 className='calc'>Simple Calculator</h2>
        <input  type="text" value={displayValue} readOnly />
        <br />
        <button className='del' onClick={deleteLastCharacter}>DEL</button>
        <button className='ac' onClick={clearScreen}>AC</button>
       <br/>
        <button onClick={() => displayContent('7')}>7</button>
        <button onClick={() => displayContent('8')}>8</button>
        <button onClick={() => displayContent('9')}>9</button>
        <button onClick={() => displayContent('*')} className="operator">*</button>
        <br />
        <button onClick={() => displayContent('4')}>4</button>
        <button onClick={() => displayContent('5')}>5</button>
        <button onClick={() => displayContent('6')}>6</button>
        <button onClick={() => displayContent('-')} className="operator">-</button>
        <br />
        <button onClick={() => displayContent('1')}>1</button>
        <button onClick={() => displayContent('2')}>2</button>
        <button onClick={() => displayContent('3')}>3</button>
        <button onClick={() => displayContent('+')} className="operator">+</button>
        <br />
        <button onClick={() => displayContent('0')}>0</button>
        <button onClick={() => displayContent('.')}>.</button>
        <button onClick={finalOutput}>=</button>
      
       
        <button onClick={() => displayContent('/')} className="operator">/</button>
        <br />
        
      </div>
    </div>
    </div>
   </>
  )
}

export default App
