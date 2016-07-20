
var config = {
	"rstatic" : 0,
	"message" : "剁手！！！你个败家娘们！败家前先问问你家大爷同意不？！",
	"message_append" : "\r\r\r\r"
};





var RUtil = {
	// 获取配置信息的方法
	"getConfig" : function(){
		for(var k in config){
			var _val = localStorage[k];
			if(_val){
				config[k] = _val;
			}
		}

		return config;
	},

	"setConfig" : function(k,v){
		localStorage[k] = v;
	},

	"g" : function($str){
		return document.querySelector($str);
	}
};

var EventUtil = {
	addHandler: function(element, type, hander){
		if (element.addEventListener){
			element.addEventListener(type,hander,false);
		} else if( element.attachEvent ){
			element.attachEvent("on"+type,hander);
		} else {
			element["on"+type] = hander;
		}
	},

	removeHandler: function(){
		if (element.removeEventListener){
			element.removeEventListener(type,hander,false);
		} else if( element.detachEvent ){
			element.detachEvent("on"+type,hander);
		} else {
			element["on"+type] = null;
		}
	}
};
