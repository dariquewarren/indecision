console.log("app.js is running");

// JSX- JVASCRIPT XML
// create app object title/subtitle
// use title and subtitle in the template
// render template

// only render subtitle and p tag if subtitle exists - logical & operator
// render new p tag - if oprions. length > 0 "here are your options" "no options"

var app ={
    title: 'Indecision App',
    subtitle: 'Created by Darique Warren',
    options: ['one', 'two']
}
  
        
// }
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
    <ol>
    <li>uno y</li>
    <li>dos y tres</li>
    </ol>
  </div>
);
var appRoot = document.getElementById("app");

var user = {
    userName : "Darique Warren",
    userAge : 32,
 userLocation : "harlem",
}
function getLocation(location) {
if(location){
return <p>Location: {location}</p>
}
}


var template2 = (
  <div>
    <h1>{user.userName ? user.userName : 'ANON'}</h1>
{user.userAge && user.userAge >= 18 && <p>Age: {user.userAge}</p>}    
    {getLocation(user.userLocation)}
  </div>
);
ReactDOM.render(template, appRoot);
