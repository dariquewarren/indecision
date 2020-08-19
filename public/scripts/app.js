'use strict';

// CHALLENGE USE ARROW FUNCTIONS
// GETFIRSTNAME('MIKE SMITH')---> MIKW
// CREATE REGUALAR ARROW FUNCTION
// CREATE ARROW FUNCTION USING SHORTHAND SYNTAX

var getFirstName = function getFirstName(name) {

  return name.split(' ')[0];
};

var getName = function getName(name) {
  return name.split(' ')[0];
};

console.log(getFirstName('darique warren'));
console.log(getName('damien black'));
