import React from 'react'

const H3 = ({children}) => {
  return (
    <h3 className="flex place-content-between text-xl font-medium leading-loose">
        {children}
    </h3>
  )
}

export default H3