var randomnumber1=Math.random();
var randomnumber=Math.floor(randomnumber1*6)+1;
if(randomnumber==1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(randomnumber==2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(randomnumber==3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(randomnumber==4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(randomnumber==5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else{
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
var randomnumber2=Math.random();
var randomnumber3=Math.floor(randomnumber2*6)+1;
if(randomnumber3==1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(randomnumber3==2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(randomnumber3==3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomnumber3==4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(randomnumber3==5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
if(randomnumber < randomnumber3){
  document.querySelector("h1").innerHTML="Player2 wins‍🔥";
}
else if(randomnumber > randomnumber3){
  document.querySelector("h1").innerHTML="Player1 wins❤️‍";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
