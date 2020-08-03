import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import ThemeContext from "./Components/ThemeContext"
import "./index.css"

ReactDOM.render(
    <ThemeContext.Provider value={"dark"}>
        <App />
    </ThemeContext.Provider>, 
    document.getElementById("root")
)
