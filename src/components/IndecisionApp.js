import React from 'react';

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'

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

  export default IndecisionApp