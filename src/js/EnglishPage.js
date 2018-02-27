require("../css/reset.css");
require("../css/indexPage.css");
require("jquery");
require("bootstrap");
require("bootstrap-loader");
require("swiper/dist/css/swiper.min.css");
var Swiper=require("swiper/dist/js/swiper.min.js");
var WOW=require("wow/wow.js");
require("wow/animate.css");
var socket = io.connect();
socket.on("reload", function() {
	location.reload();
});


var shu=false;
$(".three-gang").click(function(){
	if(shu==false){
		$(".gang1").css({"transform":"rotate(45deg)","background-color":"#FFFFFF"}).prev().css("display","none").siblings(".gang2").css("display","none").siblings(".gang4").css({"transform":"rotate(-45deg)","background-color":"#FFFFFF"});
		$(".navf").css({"transform":"scale(3) translate(-170px,-100px)","transition":"1s"});
		$(".nav_ul").css({"display":"block","transition":"2s"});
		$(".gang1").css("transition","0.2s");
		$(".gang4").css("transition","0.2s");
		shu=true;
	}else{
		$(".gang1").css({"transform":"rotate(0deg)","background-color":"#000000"}).prev().css("display","block").siblings(".gang2").css("display","block").siblings(".gang4").css({"transform":"rotate(0deg)","background-color":"#000000"});
		$(".navf").css({"transform":"scale(0) translate(-170px,-100px)","transition":"1s"});
		$(".nav_ul").css({"display":"none","transition":"2s"});
		$(".gang1").css("transition","0.2s");
		$(".gang4").css("transition","0.2s");
		shu=false;
	}
//				$(".gang1").css("transform","rotate(45deg)").prev().css("display","none").siblings(".gang2").css("display","none").siblings(".gang3").css("display","block");
//				$(".gang1").css("transform","rotate(45deg)").prev().css("display","none").siblings(".gang2").css("display","none").siblings(".gang4").css("transform","rotate(-45deg)");
});
var mySwiper = new Swiper('.banner', {
				autoplay: true,//可选选项，自动滑动
				direction:'horizontal', //滑块的滑动方向  默认值horizontal（水平） vertical （垂直）
				initialSlide:0,  //默认显示哪一块 索引值从0开始 也就是第一块的值是0
				speed:1000, //滑块自动滑动的开始到结束时间
				loop:true,  //反向循环
				autoplayDisableOnInteraction:true,   //用户操作后是否停止autoplay(自动播放) 默认是true 停止
				autoplayStopOnLast:false, //自动切换到最后一个slide的时候是否停止自动切换  默认值 false(不停止) true(停止)  如果设置了loop  那么无效
//				grabCursor:true,  //当鼠标覆盖到swiper上时,指针变成手掌形状  拖动时变成抓手  默认值是false
				slidesPerView:1,//设置可以同时显示的滑块的数量  可以是number(数) auto(自动根据swiper的宽度显示多少块)
				slidesPerGroup:1,//设置可以同时划过几个\n	
			});
			
var mySwiper = new Swiper('.shopping_lunbo', {
	autoplay: true,//可选选项，自动滑动
	direction:'horizontal', //滑块的滑动方向  默认值horizontal（水平） vertical （垂直）
	initialSlide:0,  //默认显示哪一块 索引值从0开始 也就是第一块的值是0
	speed:1000, //滑块自动滑动的开始到结束时间
	loop:true,  //反向循环
	autoplayDisableOnInteraction:true,   //用户操作后是否停止autoplay(自动播放) 默认是true 停止
	autoplayStopOnLast:false, //自动切换到最后一个slide的时候是否停止自动切换  默认值 false(不停止) true(停止)  如果设置了loop  那么无效
//				grabCursor:true,  //当鼠标覆盖到swiper上时,指针变成手掌形状  拖动时变成抓手  默认值是false
	slidesPerView:1,//设置可以同时显示的滑块的数量  可以是number(数) auto(自动根据swiper的宽度显示多少块)
	slidesPerGroup:1,//设置可以同时划过几个\n	
});
new WOW.WOW().init();
//百度地图
