import React from 'react'

const ContactWrap = ({children}) => {
  return (
    <div 
        className="grid grid-cols-2 grid-rows-2 mt-8"
    >
        {children}
    </div>
  )
}

export default ContactWrap