// count - setup defaulprop value to 0


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
try{
  const json = localStorage.getItem('count')
const countData = JSON.parse(json)

if(!isNan(countData)){
  this.setState(()=>{
    return ({
      count: countData
    })
  })


}
}catch(e){

}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
     
      localStorage.setItem('count', this.state.count)
    }
    
    
  }
  handleAddOne() {
this.setState((prevState)=>{
  return {
    count: prevState.count + 1
  }
})  }

  handleMinusOne() {
this.setState((prevState)=>{
  return {
    count: prevState.count - 1
  }
})  
}

  handleReset() {
this.setState(()=>{
  return {
    count:0
  }
})  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}


// create three methods handleaddon, handlemiusone, handlereset
// use console.log to print handler name
// wire up on click for all thre buttons & bind in the constructor function

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addOne = ()=>{
// count++
// renderCounterApp()
// }
// const minusOne =()=>{
//   count--
//   renderCounterApp()}
// const reset = ()=>{
//   count = 0
//   renderCounterApp()
// }

// // challenge
// // make button"-1"
// // setup -1 button and log -1 "minus One"
// // make reset button "reset" - setup reset function -log "reset"

// const renderCounterApp = ()=>{
//   const template2 = (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//     </div>
//   )
//     ReactDOM.render(template2, appRoot);

// }

// renderCounterApp()
