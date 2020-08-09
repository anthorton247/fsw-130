import React from "react"
import {ThemeConsumer} from "./ThemeContext"

function Footer(props) {
    return (
        <ThemeConsumer>
            {context => (
                <footer>
                    <h2 className={`${context.theme}-theme`}>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </footer>
            )}
        </ThemeConsumer>
    )
}

export default Footer