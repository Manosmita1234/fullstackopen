import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>{props.value}</div>
  )
}

const StatisticLine = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td><Display value={props.value}/></td>
    </tr>)
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

  const average = all === 0
    ? 0
    : (props.good - props.bad) / all

  const positive = all === 0
    ? 0
    : (props.good / all) * 100

  return (
    <div>
      <h1>Statistics</h1>
      <table>
       <tbody>

      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text = "neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={`${positive}%`}/>
       </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />

      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
      
    </div>
  )
}

export default App