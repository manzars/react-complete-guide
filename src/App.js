import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

//Functional based component with state using hooks.
// import React, { useState } from 'react';
// const app = () => {

//   const [personState, personStateChange] = useState({
//     Person: [
//       {
//         name: "manzar",
//         age: 21
//       },
//       {
//         name: "samar",
//         age: 22
//       },
//       {
//         name: "xyz",
//         age: 14
//       }
//     ]
//   })

//   const onClick = () =>{
//     personStateChange({Person: personState.Person.filter(person => {

//       if(person.name === "manzar"){
//         person.age = 55;
//       }
//       return person

//     })})
//   }

//   return (
//     <div className="App">
//       <button onClick = {onClick}>Hello</button>
//       <Person name = {personState.Person[0].name} age = {personState.Person[0].age}/>
//       <Person name = {personState.Person[1].name} age = {personState.Person[1].age}/>
//       <Person name = {personState.Person[2].name} age = {personState.Person[2].age}> Hello world</ Person>
//     </div>
//   );
// }
// export default app;



// class based component with state .
class App extends Component {

  state = {
    Person: [
      {
        name: "manzar",
        age: 21
      },
      {
        name: "samar",
        age: 22
      },
      {
        name: "xyz",
        age: 14
      }
    ]
  }

  onClick = (name) =>{
    console.log("Was click")
    this.setState({Person: this.state.Person.filter((person) =>{
      if(person.name === "manzar"){
        person.name = name;
      }
      return person
    }) })
  }

  nameChange = (event) => {
    this.setState({Person: this.state.Person.filter((person) =>{
      if(person.age === 21){
        person.name = event.target.value
      }
      return person
    }) })
  }

  btnStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '3px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  render() {
    return (
          <div className="App">
            <button style={this.btnStyle} onClick = {() => this.onClick("abc")}>Hello</button>
            <Person name = {this.state.Person[0].name} age = {this.state.Person[0].age}/>
            <Person nameChanged = {this.nameChange} name = {this.state.Person[1].name} age = {this.state.Person[1].age}/>
            <Person onHello = {this.onClick} name = {this.state.Person[2].name} age = {this.state.Person[2].age}> Hello world</ Person>
          </div>
        );
  }
}

export default App