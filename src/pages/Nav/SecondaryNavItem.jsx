import React from "react"

function SecondaryNavItem({children}) {
    return (
        <li 
            className="flex flex-col items-center gap-1 text-2xl py-0 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-teal-500 to-cyan-500"
        >         
            {children}
        </li>
    )
}

export default SecondaryNavItem