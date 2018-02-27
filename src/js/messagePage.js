require("../css/messagePage.css");
require("jquery");
require("bootstrap");
require("bootstrap-loader");
var socket = io.connect();
socket.on("reload", function() {
	location.reload();
});
function bofang(){
	var audio=document.getElementById("bgMusic");
	console.info(1111);
	if(audio.currentTime==null){
		audio.play();
//audio.pause();暂停
	}else{
		audio.currentTime=0;
		audio.play();
	}
}
//发送给所有人
$("#myBtn2All").on("click",function(){
	var name=$("#name").val();
	var content=$("#content").val();
	socket.emit("myBtn2All",{"name":name,"content":content});
})
//接收所有人
socket.on("msg2All",function(result){
	$("#neirong").append("<div>"+result.userName+":"+result.content+"</div>");
	bofang()
})
//发送给其他人
$("#myBtn2other").on("click",function(){
	var name=$("#name").val();
	var content=$("#content").val();
	socket.emit("myBtn2other",{"name":name,"content":content});
})
//接收给其他人
socket.on("msg2other",function(result){
	$("#neirong").append("<div>"+result.userName+":"+result.content+"</div>");
	bofang()
});
//新人登陆接受
socket.on("addUser",function(result){
	$(".dropdown-menu").html("");
	for(var i=0;i<result.userList.length;i++){
		$(".dropdown-menu").append("<li><a href='javascript:void(0)' data-id="+result.userList[i].id+">"+result.userList[i].ip+"</a></li>");
	}
	//给下拉绑定方法
	$(".dropdown-menu li a").click(function(){
//		var zhi=$("#xiaLa").contents().filter(function(){
//			return this.nodeType==3;
//		})[0].nodeValue;
//      把内容换了
		document.getElementById("xiaLa").childNodes[0].nodeValue=$(this).html();
		var socketId=this.dataset.id;
		$("#socketId").val(socketId);
	})
});
//发送给一个人
$("#myBtn2one").on("click",function(){
	var name=$("#name").val();
	var content=$("#content").val();
	var socketId=$("#socketId").val();
	socket.emit("myBtn2one",{"name":name,"content":content,"socketId":socketId});
});
//接收给一个人
socket.on("msg2one",function(result){
	$("#neirong").append("<div>"+result.userName+":"+result.content+"</div>");
	bofang()
});
