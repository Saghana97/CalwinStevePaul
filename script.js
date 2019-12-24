document.getElementById("element-1").onmouseover=function(){
    document.getElementById("floting-window1").style.display="block";
}
document.getElementById("element-1").onmouseleave=function(){

     document.getElementById("floting-window1").style.display="none   ";
}

document.getElementById("element-2").onmouseover=function(){
    document.getElementById("floting-window2").style.display="block";
}
document.getElementById("element-2").onmouseleave=function(){
     document.getElementById("floting-window2").style.display="none   ";
}

document.getElementById("element-3").onmouseover=function(){
    document.getElementById("floting-window3").style.display="block";
}
document.getElementById("element-3").onmouseleave=function(){
     document.getElementById("floting-window3").style.display="none   ";
}
function moveright(){
  document.getElementById("main-content-3-element-2-subelement-2-2").style.transform=" translateX(-640px)";
}
function moveleft(){
    document.getElementById("main-content-3-element-2-subelement-2-2").style.transform=" translateX(40px)";
}
var x= document.getElementById("input-scroll");
var y=0;

document.getElementById("main-content-5-btn-right").addEventListener("click",function(){
    y=-(parseInt(x.value)+85);
    if(y*-1<=340){
        console.log(y)
        document.getElementById("scroll").style.transform="translateX("+y+"vw)";
        x.value=-y;
    }
});
var a= document.getElementById("input-scroll");
var b=0;
document.getElementById("main-content-5-btn-left").addEventListener("click",function(){
    b=-(parseInt(a.value)-85);
    if(b<=0){
        console.log(b)
        document.getElementById("scroll").style.transform="translateX("+b+"vw)";
        a.value=-b;
    }

}); 
