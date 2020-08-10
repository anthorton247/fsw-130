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
                description: prevState.uglyDesc
            }
            return {
                uglyThings: [newUgly, ...this.state.uglyThings]
            }
        })  
    }

    handleComment = () => {
        this.setState({
                uglyThings: {comments: this.state.uglyThings.comments.push(this.state.uglyComment)}
          })  
    }


    render() {
        return (
            <Provider value= {{uglyThings: this.state.uglyThings, uglyTitle: this.state.uglyTitle,
            uglyImgUrl: this.state.uglyImgUrl,
            uglyDesc: this.state.uglyDesc, uglyComment: this.state.uglyComment, handleSubmit: this.handleSubmit, handleChange: this.handleChange, handleComment: this.handleComment}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyProvider, Consumer as UglyConsumer}