
// my way aka way1

// let paraTag = undefined

// let disabledParagraph = false
// const toggleText = () =>{
    
//     if(disabledParagraph){
//         disabledParagraph = false
//         paraTag = undefined
//         rerenderApp()
//     } else if (!disabledParagraph){
//         disabledParagraph = true
//         paraTag = <p>Conditional text to display</p>

//         rerenderApp()
//     }
//      console.log('disabled paragraph value', disabledParagraph)
     
// }

// const appRoot = document.getElementById("app");


// const rerenderApp=()=>{
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleText}>toggle text</button>
// {paraTag} 
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// rerenderApp()

// const appRoot = document.getElementById("app");


// let visibility = false
// const toggleVisibility =()=>{
//     visibility = !visibility
//     rerenderApp()
// }
// const rerenderApp=()=>{
//     const jsx = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>{visibility ? 'hide details' : 'show details'}</button>
// {visibility && (
//     <p>this is some text, guy</p>
// )}
//         </div>
//     )

//     ReactDOM.render(jsx, appRoot)
// }

// rerenderApp()

//VisibilityToggle - render, constructor, handleToggleVisibility
// visibility - state = false . gets toggled



class VisibilityToggle extends React.Component{
 constructor(props){
     super(props)
     this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
     this.state ={
         visibility: false
     }
     
 }   

 handleToggleVisibility(){
this.setState((prevState)=>{
return{
    visibility: !prevState.visibility
}
})
console.log(this.state)
}

 render(){
    return (
       <div>
       <h1>Visibility Toggle</h1>
       <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details' : 'show details'}</button>
{this.state.visibility && (
   <p>this is some text, guy</p>
)}
       </div>
    )
}
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app') )