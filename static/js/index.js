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


   
    // �õ�Ƭ
    $('.flexslider').flexslider({
		directionNav: false,
		pauseOnAction: false
	});

	// ����
	
	
	$('.control').mousemove(function(){
		$(this).find('.city').slideDown();//���������л�ʱ��
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
var st=document.documentElement.scrollTop;//�������ඥ���ľ���
var sl=document.documentElement.scrollLeft;//����������ߵľ���
var ch=document.documentElement.clientHeight;//��Ļ�ĸ߶�
var cw=document.documentElement.clientWidth;//��Ļ�Ŀ��
var objH=$("#"+obj).height();//��������ĸ߶�
var objW=$("#"+obj).width();//��������Ŀ��
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

//�رջ�ɫJS���ֲ�Ͳ�������
function closeBg(){
$("#fullbg").css("display","none");
$("#dialog").css("display","none");
}
