
let count = 0;
const addOne = ()=>{
count++
renderCounterApp()
}
const minusOne =()=>{
  count--
  renderCounterApp()}
const reset = ()=>{
  count = 0
  renderCounterApp()
}

  
// challenge
// make button"-1"
// setup -1 button and log -1 "minus One"
// make reset button "reset" - setup reset function -log "reset"





const renderCounterApp = ()=>{
  const template2 = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
  )
    ReactDOM.render(template2, appRoot);
  

}

renderCounterApp()