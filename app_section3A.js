var objectLiteral = {
    firstname:'Bhupendra'
    , lastname: 'Gupta'
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = ' {"firstname":"Bhupendra", "lastname": "Gupta" }'

console.log(JSON.parse(jsonValue))



//==================================================
/*var person = {
    firstname:'Bhupendra',
    lastname:'Gupta'
} //Object literal
person.country  = 'India'
console.log(person)


function greet (person){
    console.log('Hi', person.firstname)
}

greet(person);

greet({firstname:'Nikita', lastname:'Gupta'}); //using the object literal and pass an object as an argument

var greetings = 'hello'
var greetings = 'hola'

console.log(greetings)*/

//=========================================================//
// var person = new Object();
// person["firstname"] = 'Bhupendra'
// person["lastname"] = "Gupta"
// var firstNameProperty = 'firstname'
// console.log(person);
// console.log(person[firstNameProperty]);     
// console.log(person.firstNameProperty); // dot notation does not work with the variable

// person.address = new Object();
// person.address.street = 'Sector - 19'
// person.address.city = 'Faridabad'
// person.address.state = 'Haryana'
// person.address.country = 'India'

// console.log(person);
// console.log(person.address.city)
// console.log(person["address"]["state"])