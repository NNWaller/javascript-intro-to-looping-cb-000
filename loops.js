
function forLoop(){
  for (let i = 0; i < 25; i++){
    console.log (`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
  }
}


function whileLoop(n){
  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}


var i = 0;
function doWhileLoop(array){
  do{
    function incrementVariable() {
      i = i + 1;
    } while(array.length > 0 && incrementVariable());
} return (array);
