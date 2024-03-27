// JavaScript Document
var outer=document.getElementById("outer");
    var oInner=document.getElementById("inner");
    var oLis=oInner.getElementsByTagName("li");
    var oleft=document.getElementById("left");
    var oright=document.getElementById("right");
    var step=0;
    var timer=null;
    function buttur(ele,obj){
    	window.clearTimeout(ele.timer);
    	var end=null;
    	for(direc in obj){
    		var direc1=direc.toLowerCase();
    		var strOffset="offset"+direc1.substr(0,1).toUpperCase()+direc1.substring(1).toLowerCase();
    		var target=obj[direc];
    		var nSpeed=(target-ele[strOffset])/5;
    		nSpeed=nSpeed>=0?Math.ceil(nSpeed):Math.floor(nSpeed);
    		ele.style[direc1]=ele[strOffset]+nSpeed+"px";
    		end+=nSpeed;
    	}
    	if(end)
    		if(typeof fnCallback=="function"){
    			fnCallback.call(ele);
    		}else{
            ele.timer=window.setTimeout(function(){buttur(ele,obj)},30);
    		}
    }
    var divs=document.createElement("div");
    divs.setAttribute("id","nav");
    for(var i=0; i<oLis.length;i++){
        var oa=document.createElement("em");
        //oa.innerHTML=i+1;
        divs.appendChild(oa);
    }
    outer.appendChild(divs);
    var btn=document.getElementById("nav").getElementsByTagName("em");
    for(var i=0; i<btn.length; i++){
        btn[i].indx=i;
        btn[0].className="ehover";
        btn[i].onclick=function(){
            //window.clearTimeout(timer);
            for(var i=0; i<btn.length; i++){
                btn[i].className="";
                btn[this.indx].className="ehover";
            }
            buttur(oInner,{left:-oLis[0].offsetWidth*this.indx}); 
        }    
    }
    function autoMove(){
     	step++;
    	if(step<btn.length){
             for(var i=0; i<btn.length; i++){
                btn[i].className="";
                btn[step].className="ehover";
                buttur(oInner,{left:step*-800});
            }           
    	 }else{ 
                step=btn.length-7;        
         }
     	timer=window.setTimeout(autoMove,3000);
    }
    //autoMove(); 
    
     
  // oInner.onmouseover=function(){window.clearTimeout(timer);}
  // oInner.onmouseout=function(){timer=window.setTimeout(autoMove,3000);}
  // oleft.onmouseover=function(){window.clearTimeout(timer);}
  // oleft.onmouseout=function(){timer=window.setTimeout(autoMove,3000);}
   //oright.onmouseover=function(){window.clearTimeout(timer);}
   //oright.onmouseout=function(){timer=window.setTimeout(autoMove,3000);}