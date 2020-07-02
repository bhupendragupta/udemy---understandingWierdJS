/*
First class functions:
    function in JS are objects
*/

function greet () {
    console.log('Hi')
}

greet.language = 'english' // adding a property to a function
console.log(greet); // prints the function
console.log(greet.language)

var annoynoumsGreet  = function () {
    console.log('Hi from the annoynoums function')
}

annoynoumsGreet();

function log(a){
    //console.log(a)
    a(); 
}

// log('hello')
// log(3)
// log({greetings:'hi'})

log(function(){ // passess a function as an argument to another function
    console.log('hi from log function')
})

//------------------------/
//this value of a function

function a() {
    console.log('a',this)
    this.newVariable = 'hello' //here a new variable is created in the global execution context and can 
                                //be accessed anywhere in the code. this is created by attaching the var
                                //to the 'this' keyword
}

a();

var b = function () {
    console.log('b',this)
    console.log(newVariable)
}

b();

var c = {
    name : "the c object"
    ,log: function (who ){
            self = this //you should from now use self instead of this.
            this.name= who
            console.log('hello ',who)
            console.log(this) // here this is the c object
            var setName = function(newName) {
                this.name = newName//here this is not the c object but the global window object, this is a bug in JS
                                    // to fix this you can create a variable called self and say self=this
                                    //and replace all the 'this' in C object with self
            }
            setName('Nikita')
            console.log(this)
    }

}

c.log('Bhupendra');

//--------------------------------------------------------------------------------//

// arrays = collections of anything

var arr = [
    1,
    false,
    {
        name:'Bhupendra',
        address:'India'
    },
    function (name) {
        var greeting = 'Hello   '
        console.log(greeting + name)

    },
    'hello'

]
console.log(arr)
arr[3](arr[2].name)// calling an array inside the function and passing an object of the same array to the function


//------------------------------

//'arguments' & spread

function greetAgain(firstName,lastName,language='en', ...more){  //...more is used with spread
    console.log(firstName)
    console.log(lastName)
    console.log(language)
    console.log(arguments) // special JS keyword to store function params/arguments
    console.log('more',more)
    console.log(more[0])
}

greetAgain('Bhupendra','Gupta','Hindi','India','Asia')

//---------------------------------------------------

//automatic semicolon insertion

function getPerson() {

    return  // you have to bring the opening {  here to make this work, this is where JS puts the automatic semicolon
    {
        firstName: 'Bhupendra'
    }
}
console.log(getPerson())


//---------------------------------------------
//IIFE()
//function statement
function newGreet(name) {
    console.log(name)
}
newGreet('Bhupendra - Function statement invocation')

//function expression
var newHello  = function (name){
    console.log(name)
}
newHello('Bhupendra - Function Expression Invocation')

//IIFE
var funcIIFE = function (name) {
    console.log(name)
}('Bhupendra - IIFE invocation')

//IIFE - 2
var veryNewHelloIIFE = function (name) {
    return 'Hello ' + name
}('Bhupendra - Another example of IIFE')
console.log(veryNewHelloIIFE);

//IIFE-3
(function (name){
    console.log( 'Hello ' + name)
}('Bhupendra - a third way and important example to understand IIFE, classic example'));

//------------------------------
//Closure

function buildFunction () {

    arr = []

    for (var i=0 ; i<3 ; i++){
        arr.push(
            function () {
                console.log(i)
            }
        )
    }
    return arr;
}

var fs = buildFunction();

//what do you expect to print in console when the each function in the arr is called
fs[0]();
fs[1]();
fs[2]();




function buildFunction2 () {

    arr = []

    for (var i=0 ; i<3 ; i++){
        let j=i
        arr.push(
            function () {
                console.log(j)
            }
        )
    }
    return arr;
}

var fs2 = buildFunction2();

//what do you expect to print in console when the each function in the arr is called
fs2[0]();
fs2[1]();
fs2[2]();

//--------------------------------------------------

//Closures and callbacks

function sayHiLater () {
    var greetHILater = 'HIfromLater'

    setTimeout(function(){              // this is the outside the JS engine event, so the event loop/queue would come
                                            // into picture, 
            console.log(greetHILater)
    },3000)
}

console.log('did this print on or befor setTimeout')

sayHiLater();


function tellMeWhenDone(callback){
    var a = 1;
    var b= 2;

    callback();
}

tellMeWhenDone(function () {
    console.log('i am done')
});

tellMeWhenDone(function (){
    console.log('done again..')
})

////////////////////

//bind() - binds the this variable
//call()
//apply()
var person = {
    firstname : 'Bhupendra',
    lastname : 'Gupta',
    getFullName:function() {
       return this.firstname + ' ' + this.lastname
    }
}

var logName = function (lang1,lang2) {
    console.log('Logged', this.getFullName())
    console.log('Arguments: ', lang1 + ' ' + lang2)
    console.log('---------')
}

var boundLogName = logName.bind(person); // bound a copy of logName to the person object by reference but does not call it

boundLogName('en');

logName.call(person,'en', 'es') // same as bind but instead of creating a copy it calls a functions
logName.apply(person,['en','es']) // same as call but takes function arguments as array

//function borrowing - needs similar property names
person2 = {
    firstname: 'Nikita',
    lastname : 'Gupta'
}
console.log('function boorrowing',person.getFullName.apply(person2));


// function currying

function multiply(a,b){
    return a*b
}

var multiplyBy2 = multiply.bind(this,2) // this sets the first paramter value to 2 by default

console.log('function currying',multiplyBy2(3));



var reconSummary = [
    {pricesReconSummary: {entity:'Prices', count: '2' , last_run : new Date()}},
    {positionsReconSummary:{entity:'Positions', count: '2' , last_run : new Date()}}
]

var data = reconSummary.map(recondagain => {
            var reconKey =  Object.keys(recondagain)
            return recondagain[reconKey[0]].entity

        }
)

console.log('data',data)
