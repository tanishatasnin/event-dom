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
// using by addEventListener 
// botton-gray 
               const grayButton=document.getElementById("button-gray");
               grayButton.addEventListener('click',makegray)
               function makegray()
{
               document.body.style.backgroundColor='gray';
}

// by inner funtion 
// button yellow 
const yellowButton=document.getElementById("button-yellow");
yellowButton.addEventListener('click',function makeyellow()
{
document.body.style.backgroundColor='yellow';
})

// direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
               document.body.style.backgroundColor = 'lightblue';
           })