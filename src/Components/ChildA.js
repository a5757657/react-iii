function ChildA(props) {
  console.log(props);
  return (
    <>
      <h2>ChildA</h2>
      <p>{props.pData}</p>
    </>
  )
}

export default ChildA