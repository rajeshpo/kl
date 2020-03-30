
var random1=Math.floor(Math.random()*6+1);
var randomimage1="images/dice"+random1+".png";
var last=document.querySelectorAll("img")[0].setAttribute("src",randomimage1);


var random2=Math.floor(Math.random()*6+1);
var randomimage2="images/dice"+random2+".png";
var lastq1=document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(random1>random2)
{
   document.querySelector("h1").innerHTML="!!Player 1 wins!!";
}
if(random1<random2)
{
 document.querySelector("h1").innerHTML="!!Player 2 wins!!";
}
