'use strict';

console.log("app.js is running");

// JSX- JVASCRIPT XML
// create app object title/subtitle
// use title and subtitle in the template
// render template

// only render subtitle and p tag if subtitle exists - logical & operator
// render new p tag - if oprions. length > 0 "here are your options" "no options"

var app = {
  title: 'Indecision App',
  subtitle: 'Created by Darique Warren',
  options: ['one', 'two']

  // }
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'no options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'uno y'
    ),
    React.createElement(
      'li',
      null,
      'dos y tres'
    )
  )
);
var appRoot = document.getElementById("app");

var user = {
  userName: "Darique Warren",
  userAge: 32,
  userLocation: "harlem"
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.userName ? user.userName : 'ANON'
  ),
  user.userAge && user.userAge >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.userAge
  ),
  getLocation(user.userLocation)
);
ReactDOM.render(template, appRoot);
