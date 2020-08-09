import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class MovieProvider extends Component {
    state = {
        movieInput: "",
        movies:
            ["Transformers", "Seven Pounds", "Her"]
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          })
    }

    handleSubmit = () => {
        this.setState({
          movies: [this.state.movieInput, ...this.state.movies]
        })  
        alert(`${this.state.movieInput} Added!`)
      }

    render() {
        return (
            <Provider value={{movies: this.state.movies, handleSubmit: this.handleSubmit, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {MovieProvider, Consumer as MovieConsumer}