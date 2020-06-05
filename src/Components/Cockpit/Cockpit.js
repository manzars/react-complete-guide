import React, {useContext} from 'react'
// import React, {useRef, useEffect} from 'react'
import Radium from 'radium'
import authContext from '../../containers/contex/auth-contex'

function Cockpit(props) {

  // use this type of ref to click button
  // const toggleBtnRef = useRef(null)
  
  // useEffect( () => {

  //   toggleBtnRef.current.click()

  // }, [])


  // useEffect(() => {
  //   console.log('sdeEffect')
  //   setTimeout(() => {
  //     alert("Data saved to cloud")
  //   }, 1000)
  // }, [])
  // to make useEffect onle run at first dom load use empty list []

  // in function based component use hook 'useContext' and use like below
  const context = useContext(authContext)
  console.log(context)

  const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
  }

  const btnStyle2 = {
    backgroundColor: 'blue',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    
  }

  if(props.toBeShown){
      btnStyle.backgroundColor = "red"
      btnStyle[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
      }
  }

  //Dynamically adding classs to component
  const classes = []
  if(props.Persons.length <=2){
    classes.push('red')
  }
  if(props.Persons.length <=1){
    classes.push('bold')
  }

  return (
      <div>
          <h1>{props.title}</h1>
          <p className = {classes.join(' ')}>Hello this demo project</p>
          <button 
            // ref = {toggleBtnRef}
            style={btnStyle}
            onClick = {props.toggleElements}>
              Toggle Person
          </button>
          <authContext.Consumer>
          {(context) => {
            return (<button onClick = {context.login} style={btnStyle2}>
              login
            </button>)
          }}
            
          </authContext.Consumer>
          { props.person }   
      </div>
  )
}
export default Radium(Cockpit)