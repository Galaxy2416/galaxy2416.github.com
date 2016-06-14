#About me
![](/img/pikalogo2.jpg)

<embed src="http://www.xiami.com/widget/0_377039/singlePlayer.swf" type="application/x-shockwave-flash" width="257" height="33" wmode="transparent"></embed>

天性懒惰，乐天知命，好逸勿劳，现踩点于中国上海。喜好动漫，篮球，历史文学，wireless，极度讨厌照相（人艰不拆）。三秒钟热度无敌，贪吃从无底线～梦想是**长生不老**。


*Connect me*
- email : gin@mail.dlut.edu.cn
- QQ    : 346940792

<style>
canvas{position:absolute;top:140px;left:75px;}
</style>

<canvas id="canvas" width="200" height="200"></canvas>
<canvas id="p_canvas" width="200" height="200"></canvas>

<script type="text/javascript">
//获取绘图对象
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

var p_canvas = document.getElementById('p_canvas');
var p_context = p_canvas.getContext('2d');

var height=200,width=200;
//画大圆 
context.beginPath();
context.strokeStyle="#009999";
context.arc(width/2,height/2,width/2-1,0,Math.PI*2,true);
context.stroke();
context.closePath();
//画中间点
context.beginPath();
context.fillStyle="#000";
context.arc(width/2,height/2,3,0,Math.PI*2,true);
context.fill();
context.closePath();

//画小刻度
var angle = 0,radius = width/2 - 4; 
for(var i=0;i<60;i++){
context.beginPath();
context.strokeStyle="#000";
//确认刻度的起始点
var x = width/2 + radius*Math.cos(angle),y = height/2 + radius*Math.sin(angle); 
context.moveTo(x,y);
//这里是用来将刻度的另一点指向中心点，并给予正确的角度
//PI是180度，正确的角度就是 angle+180度，正好相反方向
var temp_angle = Math.PI +angle; 
context.lineTo(x +3*Math.cos(temp_angle),y+3*Math.sin(temp_angle));
context.stroke();
context.closePath();
angle+=6/180*Math.PI;
}
//大刻度
angle = 0,radius = width/2 - 4; 
context.textBaseline = 'middle';
context.textAlign = 'center';
context.lineWidth = 2;
for(var i=0;i<12;i++){
var num = i+3>12? i+3-12:i+3 ; 
context.beginPath();
context.strokeStyle="#FFD700";
var x = width/2 + radius*Math.cos(angle),y = height/2 + radius*Math.sin(angle); 
context.moveTo(x,y);
var temp_angle = Math.PI +angle; 
context.lineTo(x +8*Math.cos(temp_angle),y+8*Math.sin(temp_angle));
context.stroke();
context.closePath();
//大刻度 文字
context.fillText(num,x+16*Math.cos(temp_angle),y+16*Math.sin(temp_angle));
angle+=30/180*Math.PI;
}

function Pointer(){
var p_type = [['#000',70,1],['#ccc',60,2],['red',50,3]];
function drwePointer(type,angle){
type = p_type[type];
angle = angle*Math.PI*2 - 90/180*Math.PI; 
var length= type[1];
p_context.beginPath();
p_context.lineWidth = type[2];
p_context.strokeStyle = type[0];
p_context.moveTo(width/2,height/2); 
p_context.lineTo(width/2 + length*Math.cos(angle),height/2 + length*Math.sin(angle)); 
p_context.stroke();
p_context.closePath();

}
setInterval(function (){
p_context.clearRect(0,0,height,width);
var time = new Date();
var h = time.getHours();
var m = time.getMinutes();
var s = time.getSeconds(); 
h = h>12?h-12:h;
h = h+m/60; 
h=h/12;
m=m/60;
s=s/60;
drwePointer(0,s);
drwePointer(1,m);
drwePointer(2,h); 
},500);
}
var p = new Pointer();
</script>
