var htmlWebpackPlugin=require("html-webpack-plugin");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var fs=require("fs");
var myUtil=require("./myUtil.js");
var myJsonStr=fs.readFileSync("./myJson.json");//读取文件
var myJson=JSON.parse(myJsonStr);//转成json格式
var flag=false;
if(myJson.createNames.length>0){
	flag=myUtil.createSrc(myJson);
}
if(flag){
	for(var i=0;i<myJson.createNames.length;i++){
		myJson.runNames.push(myJson.createNames[i]);
	}
	myJson.createNames=[];
	fs.writeFileSync("./myJson.json",JSON.stringify(myJson));
}
var entry=myUtil.getEntry(myJson.runNames);
var plugins=myUtil.getPlugins(myJson.runNames);
module.exports={
	//入口文件 
	entry:entry, //写成json是为了配合动态命名 index是入口引文件的名字
	//出口文件
	output:{
		path:__dirname+"/public/", //出口文件的出口目录
		filename:"js/[name].js",     //动态生成出口文件的名称 [name]
		publicPath:'http://localhost:3000'
	},
	module:{
		rules:[
			{ 
				test: /\.css$/,
				use:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader!postcss-loader"
//					postcss-loader 是处理兼容性的
//					ExtractTextPlugin 是提取css文件的
				})
			},
			{ test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader'},
			{test:/\.html$/,loader:'html-loader'},
			{
				test:require.resolve("jquery"),
				loader:"expose-loader?jQuery!expose-loader?$"
			}
		]
	},
	plugins:plugins
}