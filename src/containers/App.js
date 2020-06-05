import React, {Component} from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons'
import Radium, { StyleRoot } from 'radium';
import Cockpit from '../Components/Cockpit/Cockpit'
import authContext from './contex/auth-contex'

// to add feature of css like hover and al use radium 
// and use under where we define style and wrap our component class/function with it



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
        age: 21,
        id: 1
      },
      {
        name: "samar",
        age: 22,
        id: 2
      },
      {
        name: "xyz",
        age: 14,
        id: 3
      }
    ],
    toBeShown: false,
    changeCounter: 0,
    isAuthenticated: false
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

  nameChange = (event, id) => {

    this.setState({Person: this.state.Person.map((person) => {

      if(person.id === id){
        person.name = event.target.value
      }
      return person

    }), changeCounter: this.state.changeCounter + 1})

  }

  loginHandler = () => {
    this.setState({isAuthenticated: true})
    console.log(this.state.isAuthenticated)
  }


  toggleElements = () => {
    
    this.setState(
      { toBeShown: !this.state.toBeShown }
    )
    console.log(this.state.toBeShown)
  }

  deletePerson = (name) => {
    console.log(name)
    this.setState({
      Person: this.state.Person.filter((person) => person.name !== name)
    })
  }

  render() {

    let person = null
    if(this.state.toBeShown){
      person = (
      <div>
          <Persons
            Person = {this.state.Person}
            nameChange={this.nameChange}
            deletePerson={this.deletePerson}
            auth = {this.state.isAuthenticated}
          />
        </div>
      )
    }
    
    // if(Math.random() > 0.7){
    //   throw new Error("Ahh here we go again")
    // }
    
    return (
      <StyleRoot>
        <div className="App">
          <authContext.Provider value = {{authenticated: this.state.isAuthenticated, login: this.loginHandler}}>
            <Cockpit 
              title = {this.props.title}
              Persons = {this.state.Person}
              toggleElements = { this.toggleElements }
              person = {person}
              toBeShown = {this.state.toBeShown}
              login = {this.loginHandler}
            />  
          </authContext.Provider>     
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App)

// method to return a value inside render but not preferable
// preferable method is to create a variable and store dat to to be shown after render
// render() {
//   return (
//         <div className="App">
//           <h1>I'm a React APP</h1>
//           <p>Hello this demo project</p>
//           <button style={this.btnStyle} onClick = {this.toggleElements}>Hello</button>
//           { this.state.toBeShown ?
//             <div>
//               <Person name = {this.state.Person[0].name} age = {this.state.Person[0].age}/>
//               <Person nameChanged = {this.nameChange} name = {this.state.Person[1].name} age = {this.state.Person[1].age}/>
//               <Person onHello = {this.onClick} name = {this.state.Person[2].name} age = {this.state.Person[2].age}> Hello world</ Person>
//             </div> : null
//           }        
//           </div>
//       );
// }