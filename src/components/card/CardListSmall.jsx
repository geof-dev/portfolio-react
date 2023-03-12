import React from "react"

function CardListSmall({children}) {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">  
            {children}
        </div>
    )
}

export default CardListSmall