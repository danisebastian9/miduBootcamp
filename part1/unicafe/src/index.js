import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"

const WarningNotUsed = () => {
  return <h3>No Feedback given</h3>
}

const Button = ({handleClick, text, id}) => {
  return <button className="buttons" id={id} onClick={handleClick}>{text}</button>
}

const Statistics = ({ stats }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td id="goodRow">Good</td><td>{stats.good}</td>
          </tr>
          <tr>
            <td id="neutralRow">Neutral</td><td>{stats.neutral}</td>
          </tr>
          <tr>
            <td id="badRow">Bad</td><td>{stats.bad}</td>
          </tr>
          <tr>
            <td>Total Reviews</td><td>{stats.clicks.length}</td>
          </tr>
          <tr>
            <td>Average</td><td>{(stats.average * 100 / stats.clicks.length).toFixed(2)}%</td>
          </tr>
          <tr>
            <td id="posPercRow">Positive</td><td>{(stats.good * 100 / stats.clicks.length).toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [reviews, setCounters] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    clicks: [],
    average: 0,
  });
  
  const handleClickGood = () => {
    setCounters ({
      ...reviews,
      good: reviews.good + 1,
      clicks: reviews.clicks + 1,
      average: reviews.average + 1,
    })
  }

  const handleClickNeutral = () => {
    setCounters ({
      ...reviews,
      neutral: reviews.neutral + 1,
      clicks: reviews.clicks + 1, 
    })
  }

  const handleClickBad = () => {
    setCounters ({
      ...reviews,
      bad: reviews.bad + 1,
      clicks: reviews.clicks + 1,
      average: reviews.average -1, 
    })
  }

  return (
    <div>
      <h1> Give Feedback </h1>
      < Button id="Good" handleClick={handleClickGood} text="Good" />
      < Button id="Neutral" handleClick={handleClickNeutral} text="Neutral" />
      < Button id="Bad" handleClick={handleClickBad} text="Bad" />
      <h1 id="stats">Statistics</h1>
      {reviews.clicks.length === 0 
      ? < WarningNotUsed />
      : < Statistics stats={reviews} />}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)