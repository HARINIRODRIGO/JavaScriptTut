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
    alert("You're a good match");
  } else if(results>=65){
    alert("You're a good match");
  } else{
    alert("You're a good match");
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
