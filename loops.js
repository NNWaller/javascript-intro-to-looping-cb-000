
function forLoop (){
  for (let i = 0; i < 25; i++){
    console.log (`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
  }
}


function whileLoop(number){
  while  (number > 0){
    console.log(--number);
  }
  return 'done';
}
