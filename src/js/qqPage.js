require("../css/reset.css");
require("../css/qqPage.css");
require("jquery");
require("bootstrap");
require("bootstrap-loader");
require("swiper/dist/css/swiper.min.css");
var Swiper=require("swiper/dist/js/swiper.min.js");
var socket = io.connect();
socket.on("reload", function() {
	location.reload();
});
//banner轮播
var mySwiper = new Swiper('.banner', {
				autoplay: true,//可选选项，自动滑动
				direction:'horizontal', //滑块的滑动方向  默认值horizontal（水平） vertical （垂直）
				initialSlide:0,  //默认显示哪一块 索引值从0开始 也就是第一块的值是0
				speed:1000, //滑块自动滑动的开始到结束时间
				loop:true,  //反向循环
				autoplayDisableOnInteraction:true,   //用户操作后是否停止autoplay(自动播放) 默认是true 停止
				autoplayStopOnLast:false, //自动切换到最后一个slide的时候是否停止自动切换  默认值 false(不停止) true(停止)  如果设置了loop  那么无效
				slidesPerView:1,//设置可以同时显示的滑块的数量  可以是number(数) auto(自动根据swiper的宽度显示多少块)
				slidesPerGroup:1,//设置可以同时划过几个\n	
				pagination:'#pag1', //分页器
				paginationType:'bullets',//设置分页器样式  'bullets'圆点(默认样式) 'fraction' 分式  progress 进度条  custom 自定义
				paginationClickable:true,//分页器是否可以点击 默认false 不可以点击
				effect : 'fade',
				fade: {
				  crossFade: true,
				}
		})
//content1-r轮播
var mySwiper1 = new Swiper('.content1-r', {
				autoplay: 2000,//可选选项，自动滑动
				direction:'horizontal', //滑块的滑动方向  默认值horizontal（水平） vertical （垂直）
				initialSlide:0,  //默认显示哪一块 索引值从0开始 也就是第一块的值是0
				speed:1000, //滑块自动滑动的开始到结束时间
				loop:true,  //反向循环
				autoplayDisableOnInteraction:false,   //用户操作后是否停止autoplay(自动播放) 默认是true 停止
				autoplayStopOnLast:false, //自动切换到最后一个slide的时候是否停止自动切换  默认值 false(不停止) true(停止)  如果设置了loop  那么无效
				slidesPerView:1,//设置可以同时显示的滑块的数量  可以是number(数) auto(自动根据swiper的宽度显示多少块)
				slidesPerGroup:1,//设置可以同时划过几个\n	
				effect : 'fade',
				fade: {
				  crossFade: true,
				},
})
//content1动画
$(".hover1").hover(function(){
	$(".nav1-bg").css("background-position","0 0");
	$(".nav-border1").css("background-color","#6C6C6C");
	$(".border2").css("display","none");
	$(".border3").css("display","none");
	$(".r1").css("display","block");
},function(){
	$(".nav1-bg").css("background-position","-42px 0%");
	$(".nav-border1").css("background-color","#CCCCCC");
	$(".border2").css("display","block");
	$(".border3").css("display","block");
	$(".r1").css("display","none");
});
$(".hover2").hover(function(){
	$(".nav2-bg").css("background-position","-84px 0");
	$(".nav-border2").css("background-color","#6C6C6C");
	$(".border1").css("display","none");
	$(".border3").css("display","none");
	$(".r2").css("display","block");
},function(){
	$(".nav2-bg").css("background-position","-126px 0%");
	$(".nav-border2").css("background-color","#CCCCCC");
	$(".border1").css("display","block");
	$(".border3").css("display","block");
	$(".r2").css("display","none");
});
$(".hover3").hover(function(){
	$(".nav3-bg").css("background-position","-168px 0");
	$(".nav-border3").css("background-color","#6C6C6C");
	$(".border1").css("display","none");
	$(".border2").css("display","none");
	$(".r3").css("display","block");
},function(){
	$(".nav3-bg").css("background-position","-210px 0%");
	$(".nav-border3").css("background-color","#CCCCCC");
	$(".border1").css("display","block");
	$(".border2").css("display","block");
	$(".r3").css("display","none");
})

//浏览器打开默认执行一次 此方法不会造成浏览器过多的负担
$(function(){
	con1();
})
//定时器无限循环
var timer=setInterval(con1,9000);
function con1(){
	$(".border1").animate({
		width:"100%"
	},3000);
	$(".border1").animate({
		width:"0%"
	},0,function(){
		$(".border2").animate({
		width:"100%"
	},3000);
		$(".border2").animate({
			width:"0%"
		},0,function(){
			$(".border3").animate({
				width:"100%"
			},3000);
			$(".border3").animate({
				width:"0%"
			},0);
		});
	})
};
//content4-r轮播
var mySwiper2 = new Swiper('.content4-r', {
				autoplay: true,//可选选项，自动滑动
				direction:'horizontal', //滑块的滑动方向  默认值horizontal（水平） vertical （垂直）
				initialSlide:0,  //默认显示哪一块 索引值从0开始 也就是第一块的值是0
				speed:1000, //滑块自动滑动的开始到结束时间
				loop:true,  //反向循环
				autoplayDisableOnInteraction:false,   //用户操作后是否停止autoplay(自动播放) 默认是true 停止
				autoplayStopOnLast:false, //自动切换到最后一个slide的时候是否停止自动切换  默认值 false(不停止) true(停止)  如果设置了loop  那么无效
				slidesPerView:1,//设置可以同时显示的滑块的数量  可以是number(数) auto(自动根据swiper的宽度显示多少块)
				slidesPerGroup:1,//设置可以同时划过几个\n	
				effect : 'fade',
				fade: {
				  crossFade: true,
				}
		})

//content4动画
$(".hover4").hover(function(){
	$(".left-nav1-bg").css("background-position","0 40px");
	$(".left-nav-border1").css("background-color","#6C6C6C");
	$(".left-border2").css("display","none");
	$(".left-border3").css("display","none");
	mySwiper2.slideTo(1);
},function(){
	$(".left-nav1-bg").css("background-position","-42px 40px");
	$(".left-nav-border1").css("background-color","#CCCCCC");
	$(".left-border2").css("display","block");
	$(".left-border3").css("display","block");
});
$(".hover5").hover(function(){
	$(".left-nav2-bg").css("background-position","-84px 40px");
	$(".left-nav-border2").css("background-color","#6C6C6C");
	$(".left-border1").css("display","none");
	$(".left-border3").css("display","none");
	mySwiper2.slideTo(3);
},function(){
	$(".left-nav2-bg").css("background-position","-126px 40px");
	$(".left-nav-border2").css("background-color","#CCCCCC");
	$(".left-border1").css("display","block");
	$(".left-border3").css("display","block");
});
$(".hover6").hover(function(){
	$(".left-nav3-bg").css("background-position","-168px 40px");
	$(".left-nav-border3").css("background-color","#6C6C6C");
	$(".left-border1").css("display","none");
	$(".left-border2").css("display","none");
	mySwiper2.slideTo(5);
},function(){
	$(".left-nav3-bg").css("background-position","-210px 40px");
	$(".left-nav-border3").css("background-color","#CCCCCC");
	$(".left-border1").css("display","block");
	$(".left-border2").css("display","block");
})

//浏览器打开默认执行一次 此方法不会造成浏览器过多的负担
$(function(){
	con2();
})
//定时器无限循环
var timer=setInterval(con2,9000);
function con2(){
	$(".left-border1").animate({
		width:"100%"
	},3000);
	$(".left-border1").animate({
		width:"0%"
	},0,function(){
		$(".left-border2").animate({
		width:"100%"
	},3000);
		$(".left-border2").animate({
			width:"0%"
		},0,function(){
			$(".left-border3").animate({
				width:"100%"
			},3000);
			$(".left-border3").animate({
				width:"0%"
			},0);
		});
	})
};

//content5轮播
var mySwiper3 = new Swiper('.content5-bottom', {
				autoplay: true,//可选选项，自动滑动
				direction:'horizontal', //滑块的滑动方向  默认值horizontal（水平） vertical （垂直）
				initialSlide:0,  //默认显示哪一块 索引值从0开始 也就是第一块的值是0
				speed:2000, //滑块自动滑动的开始到结束时间
				loop:true,  //反向循环
				autoplayDisableOnInteraction:false,   //用户操作后是否停止autoplay(自动播放) 默认是true 停止
				noSwiping : true,
				noSwipingClass : 'stop-swiping',
				autoplayStopOnLast:false, //自动切换到最后一个slide的时候是否停止自动切换  默认值 false(不停止) true(停止)  如果设置了loop  那么无效
//				grabCursor:true,  //当鼠标覆盖到swiper上时,指针变成手掌形状  拖动时变成抓手  默认值是false
				slidesPerView:2.5,//设置可以同时显示的滑块的数量  可以是number(数) auto(自动根据swiper的宽度显示多少块)
				slidesPerGroup:2,//设置可以同时划过几个\n	
//				effect : 'cube',//轮播效果 网址：http://www.swiper.com.cn/api/Effects/2015/0308/193.html
})
//border定时改变长度
//浏览器打开默认执行一次 此方法不会造成浏览器过多的负担
$(function(){
	con3();
})
//定时器无限循环
var timer=setInterval(con3,15000);
function con3(){
	$(".b1").animate({
		width:"100%"
	},3000);
	$(".b1").animate({
		width:"0%"
	},0,function(){
		$(".b2").animate({
		width:"100%"
	},3000);
		$(".b2").animate({
			width:"0%"
		},0,function(){
			$(".b3").animate({
				width:"100%"
			},3000);
			$(".b3").animate({
				width:"0%"
			},0,function(){
				$(".b4").animate({
					width:"100%"
				},3000);
				$(".b4").animate({
					width:"0%"
				},0,function(){
					$(".b5").animate({
					width:"100%"
					},3000);
					$(".b5").animate({
						width:"0%"
					},0)
				});
			});
		});
	})
};
//获取滚动条位置
    function getScrollTop(){   
        var scrollTop=0;   
        if(document.documentElement&&document.documentElement.scrollTop){   
            scrollTop=document.documentElement.scrollTop;   
        }else if(document.body){   
            scrollTop=document.body.scrollTop;   
        }   
        return scrollTop;   
    }   
    document.onscroll = function(){  
        console.log(getScrollTop()) 
        if(getScrollTop()>=347){
    		$(".xiaZai").css("display","block");
  		}else{
  			$(".xiaZai").css("display","none");
  		}
    }
