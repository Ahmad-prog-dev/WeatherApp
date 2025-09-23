import React from 'react'

const Button = (prop) => {
  return (
    <button onClick={prop.onClick} style={{backgroundColor:'lightgray', marginTop:'-10px'}}>{prop.value}</button>
  )
}

export default Button