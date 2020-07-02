//prototypal inheritance.


console.log('prototypal inheritance')

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName : function () {
        return this.firstname + ' ' + this.lastname;
    }

}

var gupta  = {
    firstname: 'Bhupendra',
    lastname: 'Gupta'
}

//dont ever do this, for demo purposes only
gupta.__proto__ = person;
console.log(gupta.getFullName())
console.log(gupta.firstname) // here the 'Default' is not printed


var nikita = {
    firstname : 'Nikita'
}
nikita.__proto__ = gupta;
//nikita.__proto = person
console.log(nikita.getFullName());


//------------------------------------------------------
//everything has a prototype
var a = {}
var b = function () {}
var c = []
//check the above variables in console by doing a.__proto__, b.__proto__

//---------------------------------
//reflection and extend
gupta.__proto__ = person;


for (var prop in gupta) {
    console.log(prop+ ':' + gupta[prop]) // list all the members of the object, you will also see getFullName
}

for (var prop in gupta) {
    if(gupta.hasOwnProperty(prop)) {  
    console.log(prop+ ':' + gupta[prop]) // list all the members of the object and not its proto
}}


console.log(gupta.isPrototypeOf(person)); // returns false, why?


///function constructors and new keyword

function Person (firstname,lastname) {
    console.log(this)
    this.firstname = firstname
    this.lastname = lastname
    console.log('invoked')
}

var niku = new Person('Nikita', 'Gupta');
console.log('niku', niku)

var bhupi = new Person('Bhupendra','Gupta');
console.log('bhupi', bhupi)

Person.prototype.getFullName = function () {
    return this.firstname + ' '+ this.lastname
}

console.log(bhupi.getFullName());

/// built-in function constuctors
var a = new Number(4)
console.log(a.toFixed(2))

var name = new String('Bhupendra')
console.log(name.indexOf('u')+1)


String.prototype.isLengthGreaterthan = function (limit) {
        return this.length > limit;
} // adding a custom method to the prototype of String, and now this method would be available for all string primitives
console.log('Bhupendra'.isLengthGreaterthan(7)); 

