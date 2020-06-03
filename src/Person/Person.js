import React from 'react';
import "./Person.css"
import Radium from 'radium'

//*NOTE: If we are adding @media query than we need to wrap entire application in <StyleRoot> in App.js

const Person = (props) => {

    const styl = {
        '@media (min-width: 500px)': {
          width: '400px'
        }
    }

    return (
        <div className = "Person" style={styl}>
            <p onClick = {() => props.onHello(props.name)}> I'm a {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value = {props.name}/>
        </div>
    )
}

export default Radium(Person)
 