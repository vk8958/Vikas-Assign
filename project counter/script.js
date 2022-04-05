const count =document.getElementById('count');
const dec =document.getElementById('btn1');
const res =document.getElementById('btn2');
const inc =document.getElementById('btn3');





console.log(count);
dec.addEventListener('click',counter);
res.addEventListener('click',reset);
inc.addEventListener('click',increase);

function counter(){
    
    count.innerText--;;
   
  }

  function reset(){
    
    count.innerText=0;;
  
  }

  function increase(){
    
    count.innerText++;;
    
  }