import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    };

    if (count > 0) {
      fetchJoke();
    }
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
    setJoke('');
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
      <div className="joke">
        {joke}
      </div>
    </div>
  );
}

export default App;