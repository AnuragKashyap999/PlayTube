import React from 'react'

function Button({type='submit', value='submit' ,className='' ,...props} ) {
  return (
    <div>
      <input type={type} value={value} className={`btn ${className}`} {...props}/>
    </div>
  )
}

export default Button
