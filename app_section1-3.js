//-----

console.log(3<2<1);// when you run the above statment  it will return true and false. the logic is in the coercion and 
                    // operator associativity

function greet(name){
    console.log('hello ', name)
}

greet()

console.log(localStorage);

console.log(Symbol);




// function waitforThreeseconds() {
//     var ms = 3000 + new Date().getTime();
//     while(new Date < ms){}     
//     console.log('finished function')

// }


// function clickHandler() {
//     console.log('clicked!')
// }


// document.addEventListener('click',clickHandler)

// waitforThreeseconds();
// console.log('finished execution')


//--------------------------------------------------------------------------------------------
/*b()
console.log(a);
var a = 'hello world'

function b () {
 console.log('called b!')   
}*/


/*
the execution context and variable environments
function b(){
    var myVar
    console.log('b this',this.myVar)
    console.log('b window',window.myVar)
}

function a() {
    var myVar =2;
    console.log('a this',this.myVar)
    console.log('a window',window.myVar)
    console.log('aa',myVar);
    b();
}

var myVar = 1;
console.log(this.myVar);
console.log('window',window.myVar);
a();
*/


/*function b(){ // sits lexically at the global env
    console.log(myVar) // hence this myVar gets the value from global env and goes down the scope chain
                        // to find the myVar at the outer reference.
}

function a() {
    var myVar = 2;
    b();
}

//var myVar =1
a(); */

/*
function a() {
    function b(){ // sits lexically inside the function a
        console.log(myVar) 
    }
    //var myVar = 2; // if this get uncommented the output at the console would be 2
    b();
}

var myVar =3
a(); */