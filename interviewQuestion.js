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
