var readlineSync = require('readline-sync');
var length = readlineSync.question("Enter the length of the array : ");
var arr = [];

var max = 1; //the maximum frequency
var m=0; //for checking the frequency of every unique element
var item;

for(var i=0;i<length;i++) 
arr[i] = readlineSync.question("Enter the element "+(i+1)+" : ");

function highestFrequency(array) {
for(var i=0;i<array.length;i++) {
 for(var j=i;j<array.length;j++) {
     if(array[i] === array[j])  //when a repeating element is found
     m++;
     if(max<m) {
         max=m; //max updated if the frequency of any other element is greater
         item=array[i];
 }

}
m=0;
}
console.log(item+" has the highest frequency of "+max);
}

highestFrequency(arr);