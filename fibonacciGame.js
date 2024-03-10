var numList = [];

function fibonacciGame(num){
    if(numList.length>=2){
        var lastIndex = numList.length-1;
        var beforelastIndex = numList.length-2;
        var newNumber = numList[lastIndex]+numList[beforelastIndex];
        numList.push(newNumber);
    }
    else{
       numList.push(num); 
        
    }
}

for(i =0; i<6; i++){
    fibonacciGame(i);
}

console.log(numList);
