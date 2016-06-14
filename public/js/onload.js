window.onload=function ()
{
	//菜单栏效果↓
  var oDiv=document.getElementById('search');
	var aInput=oDiv.getElementsByTagName('input');
	var oIn=aInput[0];
	var oUl=document.getElementById('ul1');
	var aLi=oUl.getElementsByTagName('li');
	var oBg=aLi[aLi.length-1];
	var i=0;
	for(i=0;i<aLi.length-1;i++)
	{
		aLi[i].onmouseover=function ()
		{
			startMove(oBg, this.offsetLeft);
		};
	}
	oIn.onfocus=function ()
	{
		//alert("ok");
		startMove1(oIn, 116);
	};
	
	oIn.onblur=function ()
	{
		startMove1(oIn, 60);
	};
  //菜单栏效果结束↑
	
  //3D 标签↓
  var n=0;
  var oTag=null;
  
  oLable=document.getElementById('lable');
  oDiv1=document.getElementById('scroll');
  aA=oLable.getElementsByTagName('a');
  
  for(n=0;n<aA.length;n++)
  {
    oTag={};
    
    oTag.offsetWidth=aA[n].offsetWidth;
    oTag.offsetHeight=aA[n].offsetHeight;
    
    mcList.push(oTag);
  }
  
  sineCosine( 0,0,0 );
  
  positionAll();
  
  oLable.onmouseover=function ()
  {
    active=true;
  };
  
  oLable.onmouseout=function ()
  {
    active=false;
  };
  
  oLable.onmousemove=function (ev)
  {
    var oEvent=window.event || ev;
    
    mouseX=oEvent.clientX-(oDiv1.offsetLeft+oDiv1.offsetWidth/2);
    mouseY=oEvent.clientY-(oLable.offsetTop+oLable.offsetHeight+50);
   
    mouseX/=5;
    mouseY/=5;
    //alert(mouseY);
  };
  
  setInterval(update, 30);
  //3D 标签结束↑

  var oBtn = document.getElementById('btn');
  var oBtn1 = document.getElementById('btn1');
  var oDis = document.getElementById('scroll');
  var oMain = document.getElementById('main-col');
  var iSpeed1 = 0;
  var paddingLeft = 0;
  
  oBtn.onclick = function ()
  {
    // oDis.style.display = 'none';
    // oBtn1.style.display = 'block';
    $("#scroll").fadeOut("slow");
    $("#btn1").fadeIn("slow");
    
    //oMain.style.paddingLeft = 150+'px';
    clearInterval(oMain.timer);
  
    oMain.timer=setInterval(function (){
      iSpeed1+=10;
      iSpeed1*=0.7;
      paddingLeft+=iSpeed1;
      if(paddingLeft>150)
      {
        clearInterval(oMain.timer);
        oMain.style.paddingLeft=150+'px';
      }
      else
      {
        oMain.style.paddingLeft=paddingLeft+'px';
        //alert(paddingLeft);
      }
    }, 30);
    }

  oBtn1.onclick = function ()
  {
    $("#scroll").fadeIn("slow");
    $("#btn1").fadeOut("slow");
    
    clearInterval(oMain.timer);
  
    oMain.timer=setInterval(function (){
      iSpeed1-=10;
      iSpeed1*=0.7;
      paddingLeft+=iSpeed1;
      if(paddingLeft<0)
      {
        clearInterval(oMain.timer);
        oMain.style.paddingLeft=0+'px';
      }
      else
      {
        oMain.style.paddingLeft=paddingLeft+'px';
        //alert(paddingLeft);
      }
    }, 30);
  }
};
