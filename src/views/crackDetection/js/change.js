// JavaScript Document

function windowHeight() {
    var de = document.documentElement;
    return self.innerHeight||(de && de.clientHeight)||document.body.clientHeight;
}
window.onload=window.onresize=function(){
	var wh=windowHeight();
	if(wh<=500)
	{document.getElementById("con").style.height=(500)+"px";
	}
	else{
	 document.getElementById("con").style.height =(wh)-25+"px";	
	}
	
	//输入框文字失去焦点
	var p=document.getElementById("p");
	var pow_tips=document.getElementById("pow_tips");
	//文本框默认不促焦点
	p.blur();
	
    //有描述文字文本值为空
	if(p.value.length > 0){
	   pow_tips.style.display="none";
	}
		
	//密码文本触发焦点描述消失，失去焦点描述出现
    p.onfocus=function(){
		   if(this.value==""){
		      pow_tips.style.display="none";
	       }
	}
    p.onblur=function(){
		   if(this.value.length == 0){
		      pow_tips.style.display="block";
		   }
	}
	
	//点击验证码描述，描述消失，文本触焦
    pow_tips.onclick=function(){
		   if(p.value==""){
			   pow_tips.style.display="none";p.focus();
		   }
	}
}



//用户名
$(document).ready(function () {
    var b = true;
	//var m = true;
    $("#username").click(
    function () {
        if (b == true) {
            $(this).val("");
            $(this).attr("class", "text");
            b = false;
        }
    });
    
    $("#username").blur(
    function () {
        if ($(this).val() == "") {
            $(this).val("请输入用户名");
            $(this).attr("class", "text");
            b = true;
        }
    });

});


//选择下拉框
	
$(document).ready(function() { 
	$(".login-box-mode").click(function(event) { 
	event.stopPropagation();
	$(this).find(".option").toggle(); 
	$(this).parent().siblings().find(".option").hide(); 
}); 
$(document).click(function(event) { 
	var eo = $(event.target); 
	if ($(".login-box-mode").is(":visible") && eo.attr("class") != "option" && 
	!eo.parent(".option").length) $('.option').hide(); 
}); 
/*赋值给文本框*/ 
$(".option li").click(function() { 
	var value = $(this).text(); 
	$(this).parent().siblings(".select_t").text(value) 
	.siblings(".select_value").val(value); 
//$(this).parent() 
});
}); 
$(".year li").hover(function(){
		$(this).toggleClass("hover");
		});


