var mouseEvent = "empty";
var lastPosittionX , lastPosittionY ;
var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 70;
canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
color = "black";
WidthOfLine  = 3;
if(width < 992){
    document.getElementById("canvas1").width = new_width;
    document.getElementById("canvas1").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    color = document.getElementById("INPUT11").value;
    WidthOfLine = document.getElementById("WidthOfLine").value;
    lastPosittionX = e.touches[0].clientX-canvas.offsetLeft;
    lastPosittionY = e.touches[0].clientY-canvas.offsetLeft;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){ 
    current_mouse_x = e.touches[0].clientX-canvas.offsetLeft;
    current_mouse_y = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = WidthOfLine;
console.log("x=" + lastPosittionX + "y=" + lastPosittionY );
ctx.moveTo(lastPosittionX , lastPosittionY);
console.log("x=" + current_mouse_x + "y=" + current_mouse_y );
ctx.lineTo(current_mouse_x , current_mouse_y);
ctx.stroke();
lastPosittionX = current_mouse_x;
lastPosittionY = current_mouse_y;
}
function CLEAR(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}