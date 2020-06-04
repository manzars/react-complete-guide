import React, { Component } from 'react'

class ErrorBoundary extends Component {

    state = {
        errorMessage: '',
        hasError: false
    }

    componentDidCatch = (error, info) => {
        this.setState(
            { errorMessage: error, hasError: true }
        )
    }

    render() {
        if(this.state.hasError){
            return (
                <div>
                    <h1>Something Went Wrong</h1>
                </div>
            )
        }else{
            return <p>{this.props.children}</p>
        }
    }
}

export default ErrorBoundary
