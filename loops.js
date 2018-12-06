
function forLoop(array){
  for (let i = 1; i < 25; i++){
    console.log(`I am ${i} strange loop${i === 1? " " : "s"}.`);
  } return array;
}


var number = 10;
function whileLoop(number){
  while (number > 0) {
    console.log(number);
    number--;
  }
  return 'done';
}



var myArray = ["a","b","c"]
var i = 0;
function doWhileLoop(array){
  do{
    array.splice (i);
  } while(array.length > 0){
      function incrementVariable() {
      i = i + 1;}
    } return array;
 }
