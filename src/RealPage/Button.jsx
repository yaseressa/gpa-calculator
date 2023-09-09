import React from 'react'
import PropTypes from 'prop-types'
function Button({isDisabled ,children}) {
  return (
    <button isDisabled=></button>
  )
}
Button.propTypes = {
    isDisabled: PropTypes.string
}
Button.defaultProps = {
    isDisabled: true
}

export default Button