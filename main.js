
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "pink";
    width_of_line = 2;

    var width=screen.width-70;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart");
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove");
    current_position_of_X=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_Y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last_position_of_X_and_Y");
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current_position_of_x_and_y_coordinates");
    console.log("X="+ current_position_of_X+ "Y="+current_position_of_Y);
    ctx.lineTo(current_position_of_X,current_position_of_Y);
    ctx.stroke();
    last_position_of_x=current_position_of_X;
    last_position_of_y=current_position_of_Y;
}
    