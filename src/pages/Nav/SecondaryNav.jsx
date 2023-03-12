import React from "react"
import SecondaryNavItem from "./SecondaryNavItem"
import NavData from "../../data/NavData"
import { Link, animateScroll as scroll } from "react-scroll";

function SecondaryNav() {
    return (
        <NavWrapMobile>
                {NavData.map(icon => (
                    <Link
                        key={icon.id}
                        to={icon.idName}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <SecondaryNavItem>
                            <i 
                                className={`bx bxs-${icon.iconName}`}></i>
                            <span 
                                className="mt-2 text-base text-zinc-700 dark:text-zinc-200 capitalize">
                                {icon.name}
                            </span>
                        </SecondaryNavItem>
                    </Link>
                ))}
        </NavWrapMobile>
    )
}

const NavWrapMobile = ({children}) => {
    return (
      <nav 
          className ="sm:hidden fixed bottom-0 left-0 right-0
                      dark:bg-zinc-800 bg-zinc-100 
                      border-0 border-teal-400 shadow-md"
      >
          <ul 
              className="flex place-content-center gap-10 p-4 font-normal"
          >
          {children}
          </ul>
      </nav>
    )
}

export default SecondaryNav