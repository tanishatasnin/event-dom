function makeRed()
{
               document.body.style.backgroundColor='red';
}

// blue-button 

const blueButton=document.getElementById("button-blue");
// set only the name of function 
// dont use () 
blueButton.onclick=makeBlue;
// function for button blue 
function makeBlue()
{
               document.body.style.backgroundColor='blue';
}

//handle event using anonymous function 
               // button-green 
               const greenButton=document.getElementById("button-green");
               // anonymous function 
               greenButton.onclick=function ()
               {
                              document.body.style.backgroundColor='green';
               }