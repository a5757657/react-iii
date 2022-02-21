import React from 'react'
import Child from './Child'

function parent() {
  return (
    <>
      <Child text={'Hello'} name={'Eddy'} />
      <Child />
    </>
  )
}

export default parent
