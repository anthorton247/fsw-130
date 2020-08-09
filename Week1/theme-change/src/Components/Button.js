import React from "react"
import PropTypes from "prop-types"
import {ThemeConsumer} from "./ThemeContext"

function Button(props) {

    return (
        <ThemeConsumer>
            {context => (
                 <button className={props.style} onClick={context.toggleTheme}>Switch Theme</button>
            )}
        </ThemeConsumer>
    )    
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light-theme", "dark-theme"])
}

Button.defaultProps = {
    theme: "light-theme"
}

export default Button