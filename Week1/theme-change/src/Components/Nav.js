import React from "react"
import Button from "./Button"
import ThemeContext from "./ThemeContext"


function Nav(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <div>
                    <Button theme={theme === "light" ? "dark-theme" : "light-theme"}/>
                </div> 
            )}
            
        </ThemeContext.Consumer>
    )    
}

export default Nav