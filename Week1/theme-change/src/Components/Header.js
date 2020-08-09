import React from "react"
import {ThemeConsumer} from "./ThemeContext"

function Header(props){
    return (
        <ThemeConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>Theme Change App</h2>
                </header>
            )}
        </ThemeConsumer>
    )
}

export default Header