import React from "react"

function TitleSection({children}) {
    return (
        <h2 
            className="lg:text-5xl text-4xl font-normal leading-loose 
                        lg:mb-12 mb-6 flex gap-1 place-items-center">
            {children}
        </h2>
    )
}

export default TitleSection