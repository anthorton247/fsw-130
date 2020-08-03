import React from "react"
import PropTypes from "prop-types"
import ThemeContext from "./ThemeContext"

function Button(props) {
    function handleClick(){
        console.log(ThemeContext)
    } 
    return (
        <button className={props.theme} onClick={handleClick}>Switch Theme</button>
    )    
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light-theme", "dark-theme"])
}

Button.defaultProps = {
    theme: "light-theme"
}

export default Button