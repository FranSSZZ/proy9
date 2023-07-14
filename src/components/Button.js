import React from 'react'

const Button = ({type, variant, className, id, onClick, children}) => {
  return (
    <button type= { type? type : "button"}> variant=(variant) className= {children} </button>;
  )
}

export default Button