import { useState } from 'react'


const App = () => {
  const [ goodCount, setGoodCount] = useState(0)
  const [ mehCount, setMehAmount] = useState(0)
  const [ badCount, setBadCount] = useState(0)
  const [ total, setTotal ] = useState(0)
  const good = () => {
    setGoodCount(goodCount + 1)
    setTotal(total+1)
  } 
  const meh = () => {
    setMehAmount(mehCount + 1)
    setTotal(total+1)
  }
  const bad = () => {
    setBadCount(badCount + 1)
    setTotal(total+1)
  } 

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button onClick={ good } name='Good' />
      <Button onClick={ meh } name='Meh' />  
      <Button onClick={ bad } name='Bad' />  
      <h2>Statistics</h2>
      <p>Good: {goodCount}</p>
      <p>Meh: {mehCount}</p>
      <p>Bad: {badCount}</p>
      <br />
      <p>Total: {total}</p>
      <p>Average: {(goodCount+mehCount*0+badCount*-1)/total}</p>
      <p>Positive: {goodCount/total} %</p>
    </div>
  )
}

const Button = ({onClick, name}) => <button onClick={onClick}>{name}</button>

export default App;
