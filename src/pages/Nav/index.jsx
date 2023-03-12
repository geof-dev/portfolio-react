import React, {useRef} from "react"
import NavData from "../../data/NavData"
import NavItem from "./NavItem"
import H1 from "../../components/H1/H1";
import { Link, animateScroll as scroll } from "react-scroll";
import Flag from 'react-flagkit';
import { useTranslation } from 'react-i18next';

function Nav(props) {
    const { t, i18n } = useTranslation();
    return (
        <NavWrap>
            <H1>GB</H1>
            <NavListWrap>
                <NavList>
                    {NavData.map(navItem => (
                        <Link
                            key={navItem.id}
                            to={navItem.idName}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <NavItem>
                                {navItem.name}
                            </NavItem>
                        </Link>
                        
                    ))}
                </NavList>  
                <div className="flex">
						<button className="px-2 py-2 rounded-lg dark:hover:bg-zinc-600 hover:bg-gray-200"
							onClick={() => { i18n.changeLanguage("en"); }}
						><Flag country="GB" />
						</button>
                        <button className="px-2 py-2 rounded-lg dark:hover:bg-zinc-600 hover:bg-gray-200"
							onClick={() => { i18n.changeLanguage("fr"); }}
						><Flag country="FR" />
						</button>
						<button className="px-2 py-2 rounded-lg dark:hover:bg-zinc-600 hover:bg-gray-200"
							onClick={() => { i18n.changeLanguage("ee"); }}
						><Flag country="EE" />
						</button>
                </div>
                <img 
                    className ="w-6 h-6 self-center cursor-pointer" 
                    onClick={props.toggleDarkMode} 
                    src={props.darkMode ?           
                    "./assets/sun.svg" : 
                    "./assets/moon.svg"} 
                />
            </NavListWrap>
        </NavWrap>
    )
}

const NavWrap = ({children}) => {
    return (
        <nav 
            className ="sm:fixed top-0 left-0 right-0
                        flex place-content-between
                        lg:px-16 sm:px-10 px-4 sm:py-5 py-4
                        sm:dark:bg-zinc-800 sm:shadow-sm sm:bg-zinc-100"
        >
            {children}
        </nav>
)}

const NavListWrap = ({children}) => {
    return (
        <div 
            className ="flex lg:gap-16 gap-8"
        >
            {children}
        </div>
)}

const NavList = ({children}) => {
    return (
        <ul 
            className ="flex lg:gap-16 gap-8 text-lg font-normal"
        > 
            {children}  
        </ul>
)}

export default Nav