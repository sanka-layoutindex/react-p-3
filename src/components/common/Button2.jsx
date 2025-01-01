import React from 'react'

function Button2(props) {
  return (
    <div className="blue-button">
    <a href={props.to} title="Click to visit">
      {props.btnname}
    </a>
  </div>
  )
}

export default Button2