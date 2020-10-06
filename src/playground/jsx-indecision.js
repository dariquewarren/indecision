console.log("app.js is running");

// JSX- JVASCRIPT XML
// create app object title/subtitle
// use title and subtitle in the template
// render template

// only render subtitle and p tag if subtitle exists - logical & operator
// render new p tag - if oprions. length > 0 "here are your options" "no options"

let app = {
  title: "Indecision App",
  subtitle: "Created by Darique Warren",
  options: [],
};



const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = "";
    reRenderApp();
     }
};

const removeAll = ()=>{
  app.options=[];
reRenderApp()
}

const onMakeDecision = ()=>{
  const randomNum = Math.floor((Math.random() * app.options.length)) 
  const selectedOption = app.options[randomNum]
  alert(selectedOption)
}
// createremove all button above list
//on click wipe array and rerender


const appRoot = document.getElementById("app");

const reRenderApp = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "no options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should i do?</button>
      <button onClick={removeAll}>Remove All</button>
      
      <ol>
        {
          app.options.map((option)=>{
            return <li key={option}>Options: {option}</li>
          })          
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

reRenderApp();
