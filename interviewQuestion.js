var count = 0;
function whosPaying(num, data) {
  var string = num.toLowerCase();
    string = string.replace('.','')
    string = string.split(" ");
   for(let x in string){
       if(string[x] == data){
           count ++;
       }
   }
    console.log(count);
}

whosPaying("This Document is a document.", "document");
/*
Finding the 2nd largest value in an array.
*/

var array = [25,75,48,63,25,47];
var data = 0;

for(var i =0; i<array.length; i++){
   for(var x = i+1; x<array.length; x++){
      if(array[x]>array[i]){
         data = array[x];
         array[x] = array[i];
         array[i] = data;
      }
      
   }
}

console.log(array[1]);
