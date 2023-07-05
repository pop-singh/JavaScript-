
//console.log(a)
// var a =6;

// var sum=function()
// { 
//  //   var b=8;
// console.log("hello");    
// }
// sum();
//console.log(b);
// function  outer()
// {
//     console.log(' outer function')
//     function inner(){
//         console.log(' inner function ')
//     }
//     return inner;
// }
// outer()();

// let inner=outer();
// inner();
// console.log(c);
// let arr=[1,2,3,4,'hello','gla',true,false];
// 


// for (let i = 0; i < arr.length; i++) {
//     if(typeof(arr[i])=='number')
//     {
//         num.push(arr[i]);
//     }
//     if(typeof(arr[i])=='boolean')
//     {
//         bool.push(arr[i])
//     }
//     if(typeof(arr[i])=='string')
//     {
//         str.push(arr[i]);
//     }
    
// }

// console.log(num,bool,str);
// array.forEach(element => {
    
// });
// function getString(item)
// {
//     return typeof item ==='string'
// }
// function getNumber 
let arr=[1,2,3,4,5,6,7];
arr.forEach((ele,index,arr)=>{
    console.log(ele);
    return ele;
})
let filter=arr.filter((ele)=>{
    return ele>2
})
console.log(filter)
let sum = arr.reduce((a,b)=>{
    return a+b
})
console.log(sum);