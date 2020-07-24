import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';


function App() {

  let [count, setCount] = useState(0);


  let increase = () => {
    if (count < 5) {
      setCount(count + 1)
    }
  }

  const reset = () => {
    setCount(0)
  }


  return (
      <div className="App">
        <Counter
            increase={increase}
            reset={reset}
            count={count}
        />
      </div>
  );
}

export default App;