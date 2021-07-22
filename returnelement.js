var readlineSync = require('readline-sync');
var length = readlineSync.question('Enter the length : ');
var arr= [];

for(var i=0;i<length;i++) 
arr[i] = readlineSync.question("Enter the element "+(i+1)+" : ");


function first(array, n=1) {
 return array.slice(0,n); //to return a part of the array (starting to nth position)
}

var pos = readlineSync.question("Enter the position till which the elements are to be displayed : ")
console.log("Result : "+first(arr,pos));