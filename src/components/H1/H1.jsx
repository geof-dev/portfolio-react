import React from 'react'

const H1 = ({children}) => {
  return (
    <h1 
        className ="text-3xl font-medium 
                    text-transparent bg-clip-text 
                    bg-gradient-to-r from-teal-500 to-cyan-500"
    >
        {children}
    </h1>
  )
}

export default H1