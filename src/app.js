import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import AddOption from './components/AddOption'
import Option from './components/Option'
import Action from './components/Action'
import Header from './components/Header'

// stateless functional components

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options: [],
      };
    }
  
    componentDidMount() {
      try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if (options) {
          this.setState(() => ({ options }));
          console.log("fetching data");
        }
      } catch (e) {}
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("saving data");
      }
    }
    componentWillUnmount() {
      console.log("comp did unmount");
    }
  
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
  
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option),
      }));
    }
  
    handlePick() {
      let pickNumber = Math.floor(Math.random() * this.state.options.length);
      let option = this.state.options[pickNumber];
      alert(`${option}`);
    }
  
    handleAddOption(option) {
      if (!option) {
        return "enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return " This option already exists";
      }
      this.setState((prevState) => ({
        options: prevState.options.concat([option]),
      }));
    }
  
    render() {
      const title = "Indecision App";
      const subTitle = "Put your life in hands of computer";
      return (
        <div>
          <Header subTitle={subTitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      );
    }
  }
  
  
  // convert action, option, options and header
  
 
  

  const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>remove all</button>
        {props.options.length === 0 && <p>Please add an option to get started. Thanks!</p>}
        {props.options.map((element) => (
          <Option
            key={element}
            optionText={element}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </div>
    );
  };
  
 
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