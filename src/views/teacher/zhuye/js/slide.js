// JavaScript Document

function windowHeight() {
    var de = document.documentElement;
    return self.innerHeight||(de && de.clientHeight)||document.body.clientHeight;
}
function stopFunc(e){   
    e.stopPropagation?e.stopPropagation():e.cancelBubble = true;       
}

$(function(){
		switchs();
		$('.contact').jScrollPane();//滚动条
		aa();//获取焦点
		bb();
		tab();
		$("#vcon").niceScroll();
		$(".t-con").niceScroll();
		$("#t-con").niceScroll();



  });

window.onload=window.onresize=function(){
	var wh=windowHeight();
	var ww=$(window).width();
	var head=$("#head").height();
	var app_top=$(".app-top").height();
	var t_head=$(".t-head").height();
	var add_btn=$(".add-btn").height();
	var qietab=$(".qietab").height();
	$(".side-bar").css("height",wh-head-1+"px");
	$(".left-bar").css("height",wh-head-1+"px");
	$(".f-menu-bar").css("height",wh-head-1+"px");
	$("#vcon").css("height",wh-head-70+"px");
	$(".jspContainer").css("height",wh-94+"px");
	$(".background img").css("width",ww+"px");
	$(".background img").css("height",wh-2+"px");
	$(".apply").css("height",wh-52+"px");
	$("#t-con").css("height",wh-182-app_top-t_head-add_btn+"px");
	$(".t-con").css("height",wh-182-app_top-t_head-qietab+"px");
	$(".t-con1").css("height",wh-182-app_top-t_head-qietab+"px");
	$("#insert").css("height",wh-head+"px");
	$(".insert").niceScroll();
};

function switchs(){
	 var $ul = $('.contact ul');
	 $ul.find('li').click(function(){
		$(this).addClass('xz');
		$(this).find('ul').show();
		$(this).siblings().find('ul').hide();
		$(this).siblings().removeClass('xz');	
   	 });
	/*$ul.find('.edtior').click(function(){
		$(this).parents('li').find('ul').show();
		$(this).parents('li').siblings().find('ul').hide();	
   	});*/
	
	//侧边栏隐藏
	 $('#notice').click(function(e){
	 	$('#side-bar').show();
	 });
     $("#side-bar").hide();        
	 $('body').click(function(evt) {
		 if($(evt.target).parents("#side-bar").length==0 &&
			evt.target.id != "notice" && evt.target.id != "side-bar") {
			  $('#side-bar').hide();
		  }
	  });
	  $('#arrange').click(function(e){
	 	$('#left-bar').show();
	  });
	   $("#left-bar").hide();        
	   $('body').click(function(evt) {
		   if($(evt.target).parents("#left-bar").length==0 &&
			  evt.target.id != "arrange" && evt.target.id != "left-bar") {
				$('#left-bar').hide();
			}
		});
		
		/*$('#year').click(function(){
	 		$(this).find('ul').show();
	  	});*/
		
		//大模块轮换
		$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
		},function(){
		$("#btn_prev,#btn_next").fadeOut()
		})
		var $dragBln = false;
		$(".main_image").touchSlider({
			flexible : true,
			speed : 200,
			btn_prev : $("#btn_prev"),
			btn_next : $("#btn_next"),
			paging : $(".flicking_con a"),
			counter : function (e) {
				$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
			}
		});
		$(".main_image").bind("mousedown", function() {
			$dragBln = false;
		})
		$(".main_image").bind("dragstart", function() {
			$dragBln = true;
		})
		$(".main_image a").click(function() {
			if($dragBln) {
				return false;
			}
		})
		//自动播放
		/*timer = setInterval(function() { $("#btn_next").click();}, 5000);
		$(".main_visual").hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(function() { $("#btn_next").click();}, 5000);
		})
		$(".main_image").bind("touchstart", function() {
			clearInterval(timer);
		}).bind("touchend", function() {
			timer = setInterval(function() { $("#btn_next").click();}, 5000);
		})*/
		
		//浮动层
		$('#float').click(function(e){
	 		$('#f-menu-bar').animate({right: 0+'px'},'slow');
			$('#aa').animate({left:-267+'px'},'slow');
	  	});       
	   	$('body').click(function(evt) {
		   if($(evt.target).parents("#f-menu-bar").length==0 &&
			  evt.target.id != "float" && evt.target.id != "f-menu-bar") {
				$('#f-menu-bar').animate({right: -260+'px'},'slow');
				$('#aa').animate({left:0+'px'},'slow');
			}
		});
		
	var aLi = $('.mode .square li');
	var aImg =  $('.mode .square li .img');
	var aSpan = $('.mode .square li span');
	aLi.each(function(index){
		$(this).hover(function(){
			aSpan.eq(index).stop();
			aImg.eq(index).stop();
			//左右翻转
			/*aImg.eq(index).css({zIndex:1}).animate({
				left:74,
				width:0
			},40,'',function(){
				$(this).hide();
				aSpan.eq(index).show().css({zIndex:2}).animate({
					left:0,
					width:148
				},40)
			});*/
			
			//向下滑动
			aSpan.eq(index).css({zIndex:2,height:158}).stop(true, true).slideDown(100);
		});
		$(this).mouseleave(function(){
			aSpan.eq(index).stop();
			aImg.eq(index).stop();
			//左右翻转
			/*aSpan.eq(index).css({zIndex:1}).animate({
				left:74,
				width:0
			},40,'',function(){
				$(this).hide();
				aImg.eq(index).show().css({zIndex:2}).animate({
					left:0,
					width:148
				},40)
			});*/
			aSpan.eq(index).css({zIndex:2,height:158}).stop(true, true).slideUp(100);
		});
	});
		
		
};

//获取焦点	
function aa() {
    var b = true;
	//var m = true;
    $("textarea").click(
    function () {
        if (b == true) {
            $(this).val("");
            $(this).attr("class", "textarea");
            b = false;
        }
    });
    
    $(".textarea").blur(
    function () {
        if ($(this).val() == "") {
            $(this).val("请输入您的信息");
            $(this).attr("class", "textarea");
            b = true;
        }
    });
};

//hover
function bb(){
	$('#name').hover(function(){
        $('#twodm').show();
    }, function(){
        $('#twodm').hide();
    });
	
	$('#cloud').hover(function(){
        $('.same').show();
    }, function(){
        $('.same').hide();
    });
	
	$('#t-con').hover(function(){
        $('#ascrail2001 div').show();
    }, function(){
        $('#ascrail2001 div').hide();
    });
	
	//开关按钮
	$('#off').click(function(){
        $(this).toggleClass('open');
    });
	$('#open').toggle(function() {
        $("#open").addClass('off').removeClass('open');;
      },function() {
      $('#open').removeClass('off').addClass('open');
      }
    );
	
	//背景切换
	
	$('#green').click(function(){
        $('.background img').attr("src",'../images/bg1.jpg');
    });
	$('#pink').click(function(){
         $('.background img').attr("src",'../images/bg2.jpg');
    });
	$('#blue').click(function(){
         $('.background img').attr("src",'../images/bg3.jpg');
    });
	
	var $qh = $('.vcon ul');
	 /*$ul.find("li").each(function(){
			$(this).find("ul").show();
		});*/
	$qh.find('li').click(function(){
		$(this).addClass('xuanz');
		$(this).siblings().removeClass('xuanz');	
   	});
	
	
};

//折叠方法
$(function(){
	//菜单隐藏展开
	var tabs_i=0
	//$('.biao').eq(0).addClass('v02');
	//奇偶数行颜色不同
	$(".biao:odd").addClass("hui");
	$('.biaoli').eq(0).show();
	$('.biao').click(function(){
		var _self = $(this);
		var j = $('.biao').index(_self);
		if( tabs_i == j ) return false; tabs_i = j;
		$('.biao').each(function(e){
			if(e==tabs_i){
				$(this,_self).removeClass('v01');
			}else{
				$(this).addClass('v01');
			}
		});
		$('.biaoli').hide().eq(tabs_i).show();
		
	});
});


function tab(){
	//tab切换
	var tabs_i=0
	$('.tab .title').click(function(){
		var _self = $(this);
		var j = $('.tab .title').index(_self);
		if( tabs_i == j ) return false; tabs_i = j;
		$('.tab .title').each(function(e){
			if(e==tabs_i){
				$(this,_self).addClass('vtitle');
			}else{
				$(this).removeClass('vtitle');
			}
		});
		$('.vcon').hide().eq(tabs_i).show();
	});
	
	var tabs_a=0;
	var wh=windowHeight();
	var ww=$(window).width();
	var head=$("#head").height();
	var app_top=$(".app-top").height();
	var t_head=$(".t-head").height();
	var add_btn=$(".add-btn").height();
	var qietab=$(".qietab").height();
	$('.t-con').eq(0).show();
	$('.app-con .qiehuan').click(function(){
		var _self = $(this);
		var b = $('.app-con .qiehuan').index(_self);
		if( tabs_a == b ) return false; tabs_a = b;
		$('.app-con .qiehuan').each(function(e){
			if(e==tabs_a){
				$(this,_self).addClass('qiegreen');
			}else{
				$(this).removeClass('qiegreen');
			}
		});
		$('.t-con').hide().eq(tabs_a).show();
		//$("#t-con").height($(window).height()-$('.qietab').height()-$('.t-head').height()-4);
	});
};

//下拉
$(document).ready(function() { 
	$(".dep").click(function(event) { 
	event.stopPropagation();
	$(this).find(".option").toggle(); 
	$(this).parent().siblings().find(".option").hide(); 
    }); 
	$(".dep li").hover(function(){
		$(this).toggleClass("hover");
		});
	$(document).click(function(event) { 
		var eo = $(event.target); 
		if ($(".dep").is(":visible") && eo.attr("class") != "option" && 
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


//图片轮换开始
var gopaly = null;
var zn = $("#slides .scroimg").length;
var lw = 221;
var i = 0;
var autoplay = null,
    cplay = null;
for (var k = 1; k < zn; k++) {
    $("#pagination").append("<span onclick='gopaly(" + k + ")' onfocus='this.blur();'> </span>");
    $("#slides img").eq(k).attr("src", $("#slides img").eq(k).attr("lazy"));
    $("#slides img").eq(k).removeAttr("lazy");
}

function scro(dir) {
    if (dir !== i) {
        lw -= 95;
        if (lw <= 3) {
            lw = 0;
        };
        var v = (dir == 'n') ? 1 : (dir == 'p') ? -1 : (dir > i) ? 1 : -1;
        var j = (dir == 'n') ? ((i == zn - 1) ? 0 : 1 + i) : (dir == 'p') ? ((i == 0) ? zn - 1 : i - 1) : dir;
        $("#slides .scroimg").eq(i).css("left", (lw - 221) * v);
        $("#slides .scroimg").eq(j).css("left", lw * v);
        $("#slides .scrotext").eq(i).css("bottom", lw - 221);
        $("#slides .scrotext").eq(j).css("bottom", -lw);
        $("#pagination span").eq(i).removeAttr("class")
        $("#pagination span").eq(j).attr("class", "current");
        if (lw == 0) {
            i = j;
            lw = 221;
            clearInterval(autoplay);
            cplay = setTimeout(()=>{gopaly('n')}, 5000);
        }
    }
}

gopaly = function(dir) {
    if (lw == 221) {
        clearTimeout(cplay);
        clearInterval(autoplay);
        if (dir == "n") {
            autoplay = setInterval(()=>{scro('n')}, 17)
        } else if (dir == "p") {
            autoplay = setInterval(()=>{scro('n')}, 17)
        } else {
            autoplay = setInterval(()=>{scro(dir)}, 17)
        }
    }
};
cplay = setTimeout(()=>{gopaly('n')}, 5000);
$("#prev").click(function () {
    gopaly("p");
});
$("#next").click(function () {
    gopaly("n");
});

function check(a, b) {
    $('#' + a + ' p').removeAttr("class");
    $('#' + a + ' p').eq(b).attr("class", "check");
    $('#' + a + ' ul').css("display", "none");
    $('#' + a + ' ul').eq(b).css("display", "block");
    if ($('#' + a + ' ul:eq(' + b + ') img:eq(0)').attr("lazy")) {
        for (var i = 0; i < 8; i++) {
            $('#' + a + ' ul:eq(' + b + ') img:eq(' + i + ')').attr("src", $('#' + a + ' ul:eq(' + b + ') img:eq(' + i + ')').attr("lazy"))
            $('#' + a + ' ul:eq(' + b + ') img:eq(' + i + ')').removeAttr("lazy");
        }
    }
};
$("#slides").mouseover(function () {
    if (lw % 221 == 0 || lw == 0) {
        clearTimeout(cplay);
        clearInterval(autoplay);
    }
});
$("#slides").mouseout(function () {
    if (lw % 221 == 0 || lw == 0) {
        cplay = setTimeout(()=>{gopaly('n')}, 5000);
    }
})
