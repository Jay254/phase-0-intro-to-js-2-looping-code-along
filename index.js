// Code your solutions in this file
// for (let age =30; age <40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }
function writeCards(arr, event){
    let newArr = [];
     for(let i = 0; i<arr.length; i++){
         newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
     }
     return newArr;
}

function countDown(int){
   let i = 0;
   while(i<=int){
    console.log(int);
    int--;

   }
}