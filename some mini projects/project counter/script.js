const count =document.getElementById('count');
const dec =document.getElementById('btn1');
const res =document.getElementById('btn2');
const inc =document.getElementById('btn3');

const btns=document.querySelectorAll('.btn')



//const btns=document.getElementById('btns')

// if we want to access multiple element then use querySelectorAll  
//by this we can access by index

//console.log(count);
/*dec.addEventListener('click',counter);
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
    
  }*/

//console.log(btns[0])
btns.forEach(function (e,i){
  console.log(e.classList)
  e.addEventListener('click' ,function(){
    if(i==0){
      count.innerText--;
    }else if(i==2){
      count.innerHTML++;
    }else{
      count.innerHTML=0;
    }
  })
})

