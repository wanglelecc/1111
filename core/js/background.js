
// 页面与扩展通信
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	  var resutl = localStorage[request.prop];
      sendResponse({prop: resutl});
  });


// 阻断网络请求
chrome.webRequest.onBeforeRequest.addListener(
    function(details){
    	return {redirectUrl: "https://www.baidu.com/"};
    	//return {cancel: true};
        //return {redirectUrl: details.url.replace( "www.google.com.hk", "www.google.com")};
    },
    {
        urls: [
             //"<all_urls>"
             "*://buy.tmall.com/*",
             "*://buy.taobao.com/*",
             "*://*.alipay.com/*",
             "*://trade.jd.com/*",
             "*://cart.suning.com/*",
             "*://payment.suning.com/*",
             "*://g.gome.com.cn/*",
             "*://cart.yhd.com/*",
             "*://buy.yhd.com/*",
             "*://shopping.dangdang.com/*",
             "*://checkoutb.dangdang.com/*",
             "*://payment.dangdang.com/*"
        ]
    },
    [
        "blocking"
    ]
);

//alert("插件描述：\n要是你有个败家娘们在双11大肆买买买！总监我赐给你这个跪舔她或弄疯她的机会（禁用立即购买等败家按钮，并弹出你想对她说的话，可表白，可作死，随你SHE……）\n\n适用网站：\n天猫、淘宝、京东、苏宁、国美、当当、一号店（那姐们就上这几个）\n\n免责声明：\n这是总监我做给发小逗媳妇儿的，万一你因此离婚了，做鬼也别来找我……\n\nP.S. 破解方法：\n关闭或卸载本插件，很简单，不懂问度娘。\n\n\n\n【别谢我，你只要记得我叫发烧总监】");