import React from "react"

function CardListLarge({children}) {
    return (
        <div className="flex flex-col gap-10">
            {children}
        </div>
    )
}

export default CardListLarge