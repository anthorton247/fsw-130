import React from "react"
import Button from "./Button"
import {ThemeConsumer} from "./ThemeContext"


function Nav(props) {
    return (
        <ThemeConsumer>
            {context => (
                <div>
                    <Button style={context.theme === "light" ? "dark-theme" : "light-theme"}/>
                </div> 
            )}
            
        </ThemeConsumer>
    )    
}

export default Nav