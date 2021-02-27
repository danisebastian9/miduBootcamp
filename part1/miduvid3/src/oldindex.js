import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from "react"

const Counter = ({ number }) => {
  return <h1> {number} </h1>
}

const App = () => {
  const [counterValue, updateCounter] = useState(0)

  console.log("render");

  const handleClick = () => {
    updateCounter(counterValue + 1);
  }

  const handleClickReset = () => {
    updateCounter(0)
  }

  const isEven = counterValue % 2 === 0
  const messageEven = isEven ? "Is Even" : "Is Odd"


  return (
    <div>
      <p> The counter value is: </p>
      <Counter number={counterValue} />
      <p> {messageEven} </p>
      <button onClick={handleClick}>
        Increment
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'))

