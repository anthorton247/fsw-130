import React from "react"
import {UglyConsumer} from "./UglyContext"

function AddUgly() {
    return (
        <UglyConsumer>
            {context => (
                <form className= "formContain">
                    <input
                        type= "text"
                        value= {context.uglyTitle}
                        placeholder= "Name of ugly thing"
                        name= "uglyTitle"
                        onChange= {context.handleChange}
                    />
                    <input
                        type= "text"
                        value= {context.uglyImgUrl}
                        placeholder= "image URL"
                        name= "uglyImgUrl"
                        onChange= {context.handleChange}
                    />
                    <input
                        type= "text"
                        value= {context.uglyDesc}
                        placeholder= "description"
                        name= "uglyDesc"
                        onChange= {context.handleChange}
                    />
                    <input 
                        type= "button"
                        value= "Add Ugly"
                        onClick= {context.handleSubmit}
                    />
                </form>
            )}
        </UglyConsumer>
    )
}

export default AddUgly