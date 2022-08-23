import React from 'react'
import PropTypes from 'prop-types'
function Button({children, version, type, Disabled, click}) {
  return (
    <button className={version} type={type} disabled={Disabled} onClick={click}>
        {children}
    </button>
  )
}
Button.defaultProps = {
    version:'',
    type:'button',
    Disabled:false
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    Disabled: PropTypes.bool
}
export default Button

