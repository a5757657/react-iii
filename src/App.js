import React, { useState } from 'react'
import CCLifecycle from './Components/CCLifecycle'
import FCLifecycle from './Components/FCLifecycle'

function App() {
  const [alive, setAlive] = useState(true)
  const [totalAlive, setTotalAlive] = useState(true)
  return (
    <>
      {/* {alive && <CCLifecycle />}
      <button
        onClick={() => {
          setAlive(!alive)
        }}
      >
        {alive ? '消失' : '出現'}
      </button> */}
      {totalAlive && <FCLifecycle />}
      <button
        onClick={() => {
          setTotalAlive(!totalAlive)
        }}
      >
        {totalAlive ? '消失' : '出現'}
      </button>
    </>
  )
}

export default App
