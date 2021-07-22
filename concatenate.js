var readlineSync = require('readline-sync');
var length = readlineSync.question("Enter the length of the array : ");
var arr= [];

for(var i=0;i<length;i++) 
arr[i] = readlineSync.question("Enter the element "+(i+1)+" : ");

function joinElements(array,conn) {
    return array.join(conn);
}
var connector = readlineSync.question("Enter the connector : ")
console.log(joinElements(arr,connector));