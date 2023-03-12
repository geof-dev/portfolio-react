import React from "react"

function TagList({children}) {
    return (
        <ul className="text-base flex gap-3 opacity-60">
            {children}
        </ul>
    )
}

export default TagList