import PropTypes from 'prop-types'

function Child(props) {
  console.log(props)

  return (
    <>
      {props.name}, {props.text}
    </>
  )
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

Child.defaultProps = {
  name: 'Pony',
  text: '沒有',
}

export default Child
