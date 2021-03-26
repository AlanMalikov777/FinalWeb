// window.addListener("scroll",function(){
//   var header=dociment.querySelector("header");
//   header.classList.toggle("sticky",window.scrollY>0);
// })
var pattern=prompt("Welcome to METACAR!"+"\n"+"What mode you appreiciate!"+"\n"+"Choose only \"sunny\" or \"night\""+"\n");
var bool=false;
if(pattern=="night"){
  document.querySelector("body").style.background="#191970";
  document.querySelector("h1").style.color="#fff";
  document.querySelector("h5").style.color="#fff";
  document.querySelector(".f1").style.background="black";
  document.querySelector(".f1").style.color="#fff";
  document.querySelector(".f2").style.background="black";
  document.querySelector(".f2").style.color="#fff";
  document.querySelector("footer").style.background="black";
  bool=true;
}else{
  document.querySelector("body").style.background="#FFE4C4";
  document.querySelector("h1").style.color="#000";
  document.querySelector("h5").style.color="#000";
  document.querySelector(".f1").style.background="lightgrey";
  document.querySelector(".f1").style.color="#000";
  document.querySelector(".f2").style.background="lightgrey";
  document.querySelector(".f2").style.color="#000";
  document.querySelector("footer").style.background="lightgrey";
}
var night=document.querySelector("#night");

night.addEventListener('click',function(){
  if(bool==false){
    var sound=new Audio("sound.mp3.mp3");
    sound.play();
    bool=true;
    document.querySelector("body").style.background="#191970";
    document.querySelector("h1").style.color="#fff";
    document.querySelector("h5").style.color="#fff";
    document.querySelector(".f1").style.background="black";
    document.querySelector(".f1").style.color="#fff";
    document.querySelector(".f2").style.background="black";
    document.querySelector(".f2").style.color="#fff";
    document.querySelector("footer").style.background="black";
    alert("You changed to night");

  }else{
    var sound=new Audio("sound.mp3.mp3");
    sound.play();
    document.querySelector("body").style.background="#FFE4C4";
    document.querySelector("h1").style.color="#000";
    document.querySelector("h5").style.color="#000";
    alert("You changed to sunny");
    document.querySelector(".f1").style.background="lightgrey";
    document.querySelector(".f1").style.color="#000";
    document.querySelector(".f2").style.background="lightgrey";
    document.querySelector(".f2").style.color="#000";
    document.querySelector("footer").style.background="lightgrey";
  bool=false;
}})
