class IndecisionApp extends React.Component{
  render(){
    return (
      <div>
      <Header/>
      <Action/>
      <Options/>
      <AddOption/>

      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>put your life in the hands of a coumputer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>what should i don?</button>
      </div>
    );
  }
}
// options class-> options componenet here-> render under action
// add acction componenet -> addoption compenent here-> render under options
class Options extends React.Component {
  render() {
    return (
      <div>
        options compenent Header
        <Option/>
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return (
      <div>
      <p>option componenet goes here</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>addOption component here</p>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));
