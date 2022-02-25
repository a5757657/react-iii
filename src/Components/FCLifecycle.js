import React, { useState, useEffect } from 'react'

function FCLifecycle() {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    console.log('didMount')
  }, [])

  useEffect(() => {
    console.log('didMount + didUpdate')
  }, [total])

  useEffect(() => {
    return () => {
      console.log('willUnmount')
    }
  },[total])

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FCLifecycle
