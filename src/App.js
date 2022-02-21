import React, { useState } from 'react'
import './App.css'
import Parent from './Components/Parent'

function App() {
  const [total, setTotal] = useState(0)
  const add = () => {
    const newTotal = total + 1
    setTotal(newTotal)
    console.log(newTotal)
  }
  const reduce = () => {
    setTotal(total - 1)
  }
  let num = false
  if (total >= 0 && total <= 10) {
    num = true
  } else {
    num = false
  }
  return (
    <div className="App">
      <button onClick={add}>+</button>
      <button onClick={reduce}>-</button>
      <h1>total:{total}</h1>

      {total > 10 && <h1>total大於10</h1>}
      {num && <h1>total在0~10之間</h1>}
      {total < 0 && <h1>total小於0</h1>}
      <Parent text={'Hello'} name={'Eddy'} />
    </div>
  )
}

export default App
