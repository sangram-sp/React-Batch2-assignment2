import React from 'react'

function Button({label, color}) {

    const buttonStyle = {
        backgroundColor: color,
        color: 'white',
        padding: '10px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '0px'
    }

  return (
    <button style={buttonStyle}>{label}</button>
  )
}

export default Button;