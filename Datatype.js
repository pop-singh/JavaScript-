

// In programs, we work with data. The lowest level of data that can not be broken down further into simpler data types are called primitives.
//  There are 7 primitives in JS
// String
// Number
// Boolean
// undefined
// null
// Symbol
// BigInt

// string

var name="gla"
var nam1='mathura'
let something = 'a'; // this is a string
let anything = 'abc'; // this is also a string
console.log(nam1+" "+name)

//Number

var Number=45 
var  a=25.5

Boolean
var isTrue=false
var isFalse=true
var n;
console.log(n)//undefined
n=undefined;
console.log(n)
let m=null
console.log(m)//null 
//Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.

var symbol1 = Symbol('symbol');

//typeof of primitive types :
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol

//Non-primitive types

// Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.
// Object - Used to store collection of data.
// Collection of data in key-value pairs

var obj1 = {
   x:  43,
   y:  "Hello world!",
   z: function(){
      return this.x;
   }
}
      
// Collection of data as an ordered list
     
var array1 = [5, "Hello", true, 4.1]; 




