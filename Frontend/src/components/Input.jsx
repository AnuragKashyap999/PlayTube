import React from 'react'

function Input({label,type='text',className='',placeholder='text here',...props}) {
    const id = label?.toLowerCase().replace(' ','-');
  return (
    <div>
        {label && <label htmlFor={id}>{label} : </label>}
        <input id={id} type={type} placeholder={placeholder} className={`input ${className}`} {...props}/>
    </div>
  )
}

export default Input
