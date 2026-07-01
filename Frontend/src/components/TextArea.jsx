import React from 'react'

function TextArea({className='' , rows='5', placeholder='text', ...props}) {
  return (
    <div>
      <textarea className={`textarea ${className}`} placeholder={placeholder} {...props}></textarea>
    </div>
  )
}

export default TextArea
