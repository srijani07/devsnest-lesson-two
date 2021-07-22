var readlineSync = require('readline-sync');
var length = readlineSync.question("Enter the length of the array : ");
var arr = [];

for(var i=0;i<length;i++) {
    arr[i] = readlineSync.question("Enter the element "+(i+1)+" : ");
}

var clone = arr.slice(0); //slicing is done from the start to the end of the array
console.log("The original array is : ",arr);
console.log("The cloned array is : ",clone);
