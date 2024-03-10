function getBalace(money){
  var bottles = money/1.5;
  console.log(bottles);
  return money%1.5;
}
var balance = getBalace(100);
console.log(balance); 

function loveScore(){
  var val = Math.random() *100; // between 0 to 0.99999
  val = Math.floor(val) + 1; // to get 0, 100 int values
  return val;
}
function evaluateLoveScore(){
  var results = loveScore();
  if(results>=75){
    alert("You guys are a good matching");
  } else if(results>=65){
    alert("Love Score: "+ result + "%");
  } else{
    alert("You guys are not matching");
}
}
evaluateLoveScore();

function leapYear(year){
    if(year%4 != 0){
        console.log("Not a Leap Year");
    } else if (year%100 != 0 ){
        console.log("Leap Year");
    }else if (year%400 == 0){
        console.log("Leap Year");
    } else{
        console.log("Not a Leap Year");
    }
}
leapYear(2024);

function game(){
    for(i=1;i<=100;i++){
        if(i%3==0 & i%5==0){
            console.log("FizzBuzz, num: " + i);
        }else if(i%3==0){
            console.log("Fizz, num: "+i);
        }else if(i%5==0){
            console.log("Buzz, num: "+i);
        }
    }
}
game();
