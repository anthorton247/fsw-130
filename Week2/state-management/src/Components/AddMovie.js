import React from "react"
import {MovieConsumer} from "./MovieProvider"

function AddMovie(props) {
    return (
        <MovieConsumer>
            {context => (
                <form>
                    <input 
                         type= "text"
                         value= {context.movieInput}
                         placeholder= "Movie Title"
                         name= "movieInput"
                         onChange= {context.handleChange}
                    />
                    <input 
                        type= "button"
                        value= "Add Movie"
                        onClick= {context.handleSubmit}
                    />
                </form>
            )}
        </MovieConsumer>
    )
}

export default AddMovie