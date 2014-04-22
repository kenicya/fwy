$(document).ready(function(){
	$("#tabsholder").tytabs({
							prefixtabs:"tab",
							prefixcontent:"content",
							 classcontent:"tabscontent",
							tabinit:"1",
							fadespeed:"fast"
							});
	$("#tabsholder2").tytabs({
							prefixtabs:"tabz",
							prefixcontent:"contentz",
							 classcontent:"l-content",
							 classtabs:"links",							
							tabinit:"1",						
							fadespeed:"normal"
							});


   
    // 幻灯片
    $('.flexslider').flexslider({
		directionNav: false,
		pauseOnAction: false
	});

	// 地区
	
	
	$('.control').mousemove(function(){
		$(this).find('.city').slideDown();//可以设置切换时间
		$(this).find('.sheng').addClass("active");

	});
	$('.control').mouseleave(function(){
		
	$(this).find('.city').slideUp("fast");
	$(this).find('.sheng').removeClass("active");
	}); 
	
 
});

function showBg(ct,content){
var bH=$("body").height();
var bW=$("body").width()+16;
var objWH=getObjWh(ct);
$("#fullbg").css({width:bW,height:bH,display:"block"});
var tbT=objWH.split("|")[0]+"px";
var tbL=objWH.split("|")[1]+"px";
$("#"+ct).css({top:tbT,left:tbL,display:"block"});
$(window).scroll(function(){resetBg()});
$(window).resize(function(){resetBg()});
}
function getObjWh(obj){
var st=document.documentElement.scrollTop;//滚动条距顶部的距离
var sl=document.documentElement.scrollLeft;//滚动条距左边的距离
var ch=document.documentElement.clientHeight;//屏幕的高度
var cw=document.documentElement.clientWidth;//屏幕的宽度
var objH=$("#"+obj).height();//浮动对象的高度
var objW=$("#"+obj).width();//浮动对象的宽度
var objT=Number(st)+(Number(ch)-Number(objH))/2;
var objL=Number(sl)+(Number(cw)-Number(objW))/2;
return objT+"|"+objL;
}
function resetBg(){
var fullbg=$("#fullbg").css("display");
if(fullbg=="block"){
var bH2=$("body").height();
var bW2=$("body").width()+16;
$("#fullbg").css({width:bW2,height:bH2});
var objV=getObjWh("dialog");
var tbT=objV.split("|")[0]+"px";
var tbL=objV.split("|")[1]+"px";
$("#dialog").css({top:tbT,left:tbL});
}
}

//关闭灰色JS遮罩层和操作窗口
function closeBg(){
$("#fullbg").css("display","none");
$("#dialog").css("display","none");
}
