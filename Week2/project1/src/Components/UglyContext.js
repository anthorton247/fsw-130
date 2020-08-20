import React, { Component } from "react"
const {Provider, Consumer} = React.createContext()

class UglyProvider extends Component {
    state = {
        uglyThings: [
            {
                title: "Ugly Example 1",
                imgUrl: "https://pmcdeadline2.files.wordpress.com/2020/07/ap_20197657421693.jpg?w=681&h=383&crop=1",
                description: "Need I explain more?",
                comments: []
            }],
        uglyTitle: "",
        uglyImgUrl: "",
        uglyDesc: "",
        uglyComment: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          })
    }

    handleSubmit = () => {
        this.setState(prevState => {
            const newUgly = {
                title: prevState.uglyTitle,
                imgUrl: prevState.uglyImgUrl,
                description: prevState.uglyDesc,
                comments: []
            }
            return {
                uglyThings: [newUgly, ...this.state.uglyThings]
            }
        })  
    }

    handleComment = (id) => {
        for(let i = 0; i < this.state.uglyThings.length; i++){
            if(this.state.uglyThings[i].title === id){
                this.setState(prevState => {
                    const newComment = prevState.uglyComment
                    prevState.uglyThings[i].comments.push(newComment)
                })
            }     
        }
        console.log(this.state.uglyComment)
    }

    handleDelete = (index, id) => {
        for(let i = 0; i < this.state.uglyThings.length; i++){
            if(this.state.uglyThings[i].title === id){
                this.setState(prevState => {
                    return(
                        prevState.uglyThings[i].comments.splice(index, 1)
                    )
                })
            }     
        }
    }

    deleteUgly = (index, id) => {
        for(let i = 0; i < this.state.uglyThings.length; i++){
            if(this.state.uglyThings[i].title === id){
                this.setState(prevState => {
                    return(
                        prevState.uglyThings.splice(index, 1)
                    )
                })
            }     
        }
    }
        


    render() {
        console.log(this.state.uglyThings)
        return (
            <Provider value= {{uglyThings: this.state.uglyThings, uglyTitle: this.state.uglyTitle,
            uglyImgUrl: this.state.uglyImgUrl,
            uglyDesc: this.state.uglyDesc, uglyComment: this.state.uglyComment, handleSubmit: this.handleSubmit, handleChange: this.handleChange, handleComment: this.handleComment, handleDelete: this.handleDelete, deleteUgly: this.deleteUgly}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyProvider, Consumer as UglyConsumer}