// Fizz bus game
var fizzBuzzGame=[];

function FizzBuzz(number){
    if(number%5===0 && number%3===0){
        console.log(number+": Buzz");
        fizzBuzzGame.push("FizzBuzz")
    }
    else if(number%5===0){
        fizzBuzzGame.push("Buzz")
    }
    else if(number%3===0){
        fizzBuzzGame.push("Fizz")
    }
    else{
        fizzBuzzGame.push(number)
    }
}
for(i=1; i<101; i++){
    FizzBuzz(i);
}

console.log(fizzBuzzGame);
