import { useEffect, useRef } from 'react'
import $ from 'jquery'

function JQueryTestRef(props) {
  const titleRef = useRef(null)
  const buttonRef = useRef(null)
  // didMount
  useEffect(() => {
    // jquery code
    console.log($('#title').text())
    $(buttonRef.current).on('click', () =>
      alert('Hello ' + $(titleRef.current).text())
    )
  }, [])

  return (
    <>
      <h1 ref={titleRef}>React ref</h1>
      <button ref={buttonRef}>Click me</button>
    </>
  )
}

export default JQueryTestRef
