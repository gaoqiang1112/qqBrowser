function messageAction(){
	this.messagePage=function(req,res){
		res.render("message/messagePage");
	}
	this.indexPage=function(req,res){
		res.render("message/indexPage");
	}
	this.aboutUsPage=function(req,res){
		res.render("message/aboutUsPage");
	}
	this.EnglishPage=function(req,res){
		res.render("message/EnglishPage");
	}
	this.tszPage=function(req,res){
		res.render("message/360Page");
	}
	this.qqPage=function(req,res){
		res.render("message/qqPage");
	}
}
module.exports=new messageAction();