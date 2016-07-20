
var submit = RUtil.g('#doSubmit');
var form = RUtil.g('.myForm');
submit.onclick = function(event){
	RUtil.setConfig('rstatic',form.rstatic.value); 
	RUtil.setConfig('message',form.message.value); 
	alert('保存成功!');
};

// 初始化页面表单值
var option = RUtil.getConfig();
form.rstatic.value = option.rstatic;
form.message.value = option.message;