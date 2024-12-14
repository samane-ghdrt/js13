/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:
let num1=Math.floor(Math.random()*15)+1;
let num2=Math.floor(Math.random()*15)+1;
let arr=[];
arr.push(num1);
arr.push(num2);
for (let i = 0; i < 8; i++) {
arr.push((arr[i]+arr[i+1])*2);
}
console.log(arr.join(','));

