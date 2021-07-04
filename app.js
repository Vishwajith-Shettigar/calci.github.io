

let screen= document.querySelector('.screen');






function one(){
   
   screen.innerHTML=screen.innerHTML+ document.getElementById('one').innerText ;


  
}




 function two(){
     

    screen.innerHTML= screen.innerHTML+ document.getElementById('two').innerText;

}


function three(){
    screen.innerHTML=screen.innerHTML+document.getElementById('three').innerText;

}

function four(){

    screen.innerHTML=screen.innerHTML+document.getElementById('four').innerText;

}

function five(){
    screen.innerHTML=screen.innerHTML+document.getElementById('five').innerText;
}

function six(){
    screen.innerHTML=screen.innerHTML+document.getElementById('six').innerText;
}

function seven(){
    screen.innerHTML=screen.innerHTML+document.getElementById('seven').innerText;
}

function eight(){
    screen.innerHTML=screen.innerHTML+document.getElementById('eight').innerText;
}

function nine(){
    screen.innerHTML=screen.innerHTML+document.getElementById('nine').innerText;
}

function zero(){
    screen.innerHTML=screen.innerHTML+document.getElementById('zero').innerText;
}

function minus(){
    

    screen.innerHTML=screen.innerHTML+document.getElementById('minus').innerText;

}


function plus(){
   
    screen.innerHTML= screen.innerHTML+ document.getElementById('plus').innerText;

    
}


function devide(){
    screen.innerHTML=screen.innerHTML+document.getElementById('devide').innerText;

}

function point(){
    screen.innerHTML=screen.innerHTML+document.getElementById('point').innerText;
}

function multiply()
{
    multtext='*';
screen.innerHTML=screen.innerHTML+multtext;

}

// function root(){

// roottext=document.getElementById('root');
// roottext.innerText="squrt()";

//     screen.innerHTML=screen.innerHTML+roottext.innerText;
// }



function equal(){



    screenValue= screen.value;
    console.log(screenValue);
screen.innerHTML=  eval(screenValue)
}

function AC()
{
   
    
    
        screen.innerHTML='';
    
  
}




