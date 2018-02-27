var htmlWebpackPlugin=require("html-webpack-plugin");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var fs=require("fs");
module.exports={
	getEntry:function(name){
		var jsonName={}
		for(var i=0;i<name.length;i++){
			jsonName[name[i]]="./src/js/"+name[i]+".js";
		}
		return jsonName
	},
	getPlugins:function(name){
		var getPlugins=[new ExtractTextPlugin("css/[name].css")];
		for(var i=0;i<name.length;i++){
			getPlugins.push(new htmlWebpackPlugin({
			//这个是根据哪个页面模板来打包文件
			template:"./src/html/"+name[i]+".html",//new 一个插件的事例，并传入模板路径
			//这个是生成的路径
			filename:"../views/message/"+name[i]+".html",
			//chunks代表当前页面的需要引入上述哪个依赖文件，我们直接将两个都引入
			chunks:[name[i]]
		}))
		}
		return getPlugins
	},
	createSrc:function(myJson){
		var createNames=myJson.createNames
		for(var i=0;i<createNames.length;i++){
		 	fs.writeFileSync("./src/html/"+createNames[i]+".html",myJson.innerHtml);
		 	fs.writeFileSync("./src/js/"+createNames[i]+".js",myJson.innerJs.replace("@",createNames[i]));
		 	fs.writeFileSync("./src/css/"+createNames[i]+".css",myJson.innerCss);
		 	
		}
		return true
	}
}
