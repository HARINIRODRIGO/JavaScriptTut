// Adding 10 numbers to the array
var numbers = []; 
var count = 0;
function numbersFunc() {
  count++;
  numbers.push(count);
}
for (i=0; i<10; i++)
{
numbersFunc();
}
console.log(numbers);  
  
