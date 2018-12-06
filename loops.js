
  function forLoop(){
    for (let i = 0; i < 25; i++){
      console.log (`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
    }
  }


  var number = 10;
  function whileLoop(number){
    while (number > 0) {
      console.log(number);
      number--;
    }
    return 'done';
  }



  var i = 0;
  function doWhileLoop(array){
    do{
      function incrementVariable() {
        i = i + 1;
      } while(array.length > 0 && incrementVariable());
      array.splice(i);
    }
