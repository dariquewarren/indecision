
import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
// stateless functional components




  
 
  // setup form with text input and submit button
  // wire up onSubmit
  // handleAddOption -> fetch value typed. if value then alert
  
  
  // const User = (props)=>{
  //   return (
  //     <div>
  //     <p>Name: {props.name}</p>
  //     <p>Age:{props.age} </p>
  
  //     </div>
  //   )
  // }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
  









// import './utils.js'
//  import subtract, {square, add} from './utils.js'

// console.log('i am iron man')
// console.log(square(5))
// console.log(add(5,5))
// console.log(subtract(100,81))

// import isSenior, {isAdult, canDrink} from './person.js'
// console.log(isAdult(18), 'isadult')
// console.log(canDrink(18))
// console.log(isSenior(65), 'issenior')

// create person.js
// named exports--isadult. true if adult, false if not. canDrink if 21 or older true, els false
// import isadult and can drink here(app.js)
//print the result of bothe to console