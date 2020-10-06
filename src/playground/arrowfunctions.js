// CHALLENGE USE ARROW FUNCTIONS
// GETFIRSTNAME('MIKE SMITH')---> MIKW
// CREATE REGUALAR ARROW FUNCTION
// CREATE ARROW FUNCTION USING SHORTHAND SYNTAX

// const getFirstName =(name)=>{

// return  name.split(' ')[0]
// }

// const getName = name => name.split(' ')[0]

// console.log(getFirstName('steve warren'))
// console.log(getName('damien the black'))


// argument object no loner bound
// this no longer bound

const add = (a,b) =>{
    console.log()
return a + b
}

console.log(add(12,50))


const user ={
    name: 'darique',
    cities: ['new york', 'georgia'],
    printPlacesLived(){
        console.log(this.name)
        console.log(this.cities)
return this.cities.map(city=> this.name + ' has lived in ' + city)
       
    }
}

console.log(user.printPlacesLived())

// CHALLENGE AREA

const multiplier ={
   numbers: [1,2,3,4,5],
   multiplyby: 5,
   multiply(){
       return this.numbers.map(e => e * this.multiplyby)
   }  
   
    // numbers - array of numbers
    // multiplyby - single number
    // multiply - return a new arrya where all the numbers have been multiplied
}

console.log(multiplier.multiply())