import "./index.css"

import React, {createRef, useEffect}  from "react"


const Button = ({
                       children, ...props
                   }) => {
    const inputRef = createRef()

    useEffect(() => {
        inputRef.current.blur()
    }, [])

    return (
        <button
            type="button"
            className="t-button big-button"
            ref={inputRef}
            {...props}
        >
            {children || "button"}
        </button>
    )
}

export default Button
