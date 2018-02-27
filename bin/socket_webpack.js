var url=require("url");
module.exports={
	init:function(server){
		var webpack=require("webpack");
		var webpackConfig=require("../webpack.config.js");
		var io=require("socket.io").listen(server);//项目启动所走的代码
		var compiler=webpack(webpackConfig,function(error,stat){
			console.log(stat.toString({
				colors:true
			}))
			compiler.watch({},function(error,stat){
				console.info("代码更新成功！");
				io.sockets.emit("reload");
			})
		})
		var userList=[];//声明一个用户列表数组
		var userIp=[];
		io.on("connection",function(socket){
			console.info("第一次握手成功了");
			var requestUrl=socket.handshake.headers.referer;//获得整个url的
			var pathName=url.parse(requestUrl).pathname;
			if(pathName=="/messageAction/messagePage"){
				var addr=socket.request.connection.remoteAddress;//获得当前客户端的ip
				var ip=addr.split(":")[addr.split(":").length-1];
				var user={};
				user.id=socket.id;//添加当前登录者的socket的id
				user.ip=ip;////添加当前登录者的ip
				if(userIp.indexOf(ip)<0){//查找是否存在userIp
					userIp.push(ip);//indexOf()索引=-1说明没有找到，向userIp添加Ip
					userList.push(user);//向userList添加user
				}else{
					var index=userIp.indexOf(ip);//反之找到了相同的Ip
					userList.splice(index,1,user);//则向userList删除重复的Ip,并用user替换
				}
				//用于新人登陆
				io.sockets.emit("addUser",{userList:userList});
					//给所有人发送
				socket.on("myBtn2All",function(result){
					io.sockets.emit("msg2All",{"userName":result.name,"content":result.content});
				});
				//给其他人发送
				socket.on("myBtn2other",function(result){
					socket.broadcast.emit("msg2other",{"userName":result.name,"content":result.content});
				});
					//给一个人发送
				socket.on("myBtn2one",function(result){
					io.sockets.sockets[result.socketId].emit("msg2one",{"userName":result.name,"content":result.content});//给指定的客户端发送
				});
			}
		})
	}
}
