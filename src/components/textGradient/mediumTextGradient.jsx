import React from 'react'

const mediumTextGradient = ({children}) => {
  return (
    <div 
        className="font-medium text-transparent bg-clip-text 
        bg-gradient-to-r from-teal-500 to-cyan-500">
         {children} 
    </div>
  )
}

export default mediumTextGradient