import "./Person.css"
import Radium from 'radium'
import React, { Component } from 'react'
import Aux from './../../../containers/hoc/Aux'
import PropTypes from 'prop-types'
import authContext from "../../../containers/contex/auth-contex"

//*NOTE: If we are adding @media query than we need to wrap entire application in <StyleRoot> in App.js

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }
    // to use contex any where not just <authContex>
    static contextType = authContext
    

    componentDidMount() {
        this.inputElementRef.current.focus()
        // after initialized contextType use contex to retrive contex data
        console.log(this.context)
        //console.log(this.inputElementRef.current.focus)
    }

    render() {

        const styl = {
            '@media (min-width: 500px)': {
              width: '400px',
            }
        }

        return (
            <Aux>  
                <div className = "Person" style={styl}>
                <authContext.Consumer>
                {(context) =>  context.authenticated ? <p>is Authenticated</p> : <p>is Not Authenticated</p>}
                </authContext.Consumer>
                    <p onClick = {() => this.props.onHello(this.props.name)}> I'm a {this.props.name} and my age is {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input ref = {this.inputElementRef} type="text" onChange={this.props.nameChanged} value = {this.props.name}/>
                </div>
                
            </Aux>
        )
    }
}
// setting props type so that developer can see ehat type of prop they are receiving
Person.propTypes = {
    onHello: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    nameChanged: PropTypes.func,
}
export default Radium(Person)
 