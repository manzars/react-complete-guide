import Person from './Person/Person'
import React, { Component } from 'react'

export class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log("Hello")
    //     return state
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Hi")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("hola")
        // use this to save data to use after update
        return {message: "Snapshot"}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot)
    }

    render() {
        return (
            this.props.Person.map((person, index) => {
                return (
                <Person
                    key = {person.id}
                    nameChanged = {(event) => this.props.nameChange(event, person.id)}
                    onHello = {this.props.deletePerson}
                    name = {person.name}
                    age = {person.age}
                    auth = {this.props.auth}
                />
                )
              })
        )
    }
}

export default Persons
