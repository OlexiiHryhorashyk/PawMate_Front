import React from "react"

const Toolbar = ({children, activeToolbar}) => {
    return (
        <div className={`toolbar ${activeToolbar ? "toolbar-active" : ""}`}>
            {children}
        </div>
    )
}

export default Toolbar
