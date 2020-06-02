import React from 'react';
import "./Person.css"

const Person = (props) => {
    return (
        <div className = "Person">
            <p onClick = {() => props.onHello("holla")}> I'm a {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged}/>
        </div>
    )
}

export default Person
 