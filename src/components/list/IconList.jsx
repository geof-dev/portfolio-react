import React from "react"
import IconData from "../../data/IconData"

export default function Icon() {
    return (
        <div className="items-center gap-5 sm:flex hidden">
            {IconData.map(icon => (
                <a 
                    key={icon.id}
                    href={`${icon.iconLink}`} 
                    target="_blank">
                    <button
                        className="flex flex-col items-center rounded-full
                                    hover:bg-zinc-100
                                    dark:hover:bg-zinc-700
                                    p-1.5 lg:h-14 lg:w-14 h-14 w-14"
                    >
                        <i className={`text-2xl bx bxl-${icon.iconName} p-1.5
                             text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500`}></i>
                    </button>
                </a>
            ))}
        </div>
    )
}
