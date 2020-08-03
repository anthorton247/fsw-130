import React from "react"
import ThemeContext from "./ThemeContext"

function Footer(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <footer>
                    <h2 className={`${theme}-theme`}>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </footer>
            )}
        </ThemeContext.Consumer>
    )
}

export default Footer