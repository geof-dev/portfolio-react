import React from 'react'

const ContactItemWrap = ({children}) => {
  return (
    <div 
        className ="p-8 even:border-l [&:nth-child(3)]:border-t 
                    last:border-t border-gray-300 dark:border-gray-600">
        {children}
    </div>
  )
}

export default ContactItemWrap