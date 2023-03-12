import React from "react"
import Home from "./pages/Home/index"
import Nav from "./pages/Nav/index"
import Contact from "./pages/Contact/index"
import SecondaryNav from "./pages/Nav/SecondaryNav"
import Portfolio from "./pages/Portfolio/index"

export default function App() {

    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return (
        <div 
            className={`flex flex-col place-content-center mx-auto py-2 lg:px-40 px-4
                        ${darkMode ? "dark" : ""}`}
        >
                <Nav 
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode} 
                />
                <Home />
                <SecondaryNav/>
                <Portfolio />
                <Contact />
        </div>
    )
}