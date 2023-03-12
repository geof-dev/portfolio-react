import React from "react"

function NavItem({children}) {
    return (
        <li 
            className ="sm:block hidden rounded-full px-3 py-1
                        dark:hover:bg-zinc-600 
                        hover:bg-zinc-100 hover:text-teal-500">
            {children}
        </li>
    )
}

export default NavItem