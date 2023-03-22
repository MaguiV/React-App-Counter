import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
      <div className={`counter ${count === 0 ? 'zero' : ''}`}>
        Counter: {count}
      </div>
    </div>
  );
}

export default App;