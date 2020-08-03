import React from "react"
import ThemeContext from "./ThemeContext"

function Header(props){
    return (
        <ThemeContext.Consumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h2>Theme Change App</h2>
                </header>
            )}
        </ThemeContext.Consumer>
    )
}

export default Header