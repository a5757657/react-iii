import React from 'react'

function Child(props) {
  console.log(props)
  return (
    <>
      {props.text}, {props.name}
    </>
  )
}

Child.defaultProps = {
  name: 'Pony',
  text: '沒有',
}

export default Child
