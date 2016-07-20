var options = RUtil.getConfig();

// 获取 localStorage 数据
function getItem(item,callback){
  chrome.runtime.sendMessage({prop:item},function(response){
	callback(item,response.prop);
  });
}
 
function getVal(key,val){
	if(val){
		options[key] = val;
	}
}
 
getItem("message",getVal);
getItem("rstatic",getVal);


// 弹出提示公共事件
var tips = function(event){
	alert(options.message + '' +options.message_append);
	return false;
};


var buy = {
	"jdItem" : function(){
		var node = RUtil.g("#InitCartUrl");
		if(node){
			node.setAttribute('href','javascript:;');
			EventUtil.addHandler(node, "click", tips);
		}

		var qiang = RUtil.g("#choose-btn-qiang");
		if(qiang){
			qiang.setAttribute('id','jd-choose-btn-qiang');
		}

		
		var cart = RUtil.g(".btn-area");
		if(cart){
			cart.innerHTML = '<span href="javascript:;" class="jd-submit-btn" data-set="eee">去结算<b></b></span>';
			EventUtil.addHandler(cart, "click", tips);
		}

		var orderSubmit = RUtil.g("#order-submit");
		if(orderSubmit){
			EventUtil.addHandler(orderSubmit, "click", tips);
		}

		window.onload = function(){
			var qiang = RUtil.g("#jd-choose-btn-qiang");
			if(qiang){
				qiang.setAttribute('href','javascript:;');
				qiang.style.display = 'block';
				qiang.classList.remove("btn-disable");
				qiang.innerHTML = '立即抢购';
				EventUtil.addHandler(qiang, "click", tips);
			}
		};

		
	},

	"tmallItem" : function(){
		var node = RUtil.g(".tb-btn-buy");
		if(node){
			node.innerHTML = '<a id="TM-J_LinkBuy" href="javascript:;" rel="nofollow"  data-addFastBuy="true"  title="点击此按钮，到下一步确认购买信息。">立即购买</a>';
			EventUtil.addHandler(node, "click", tips);
		}

		var basket = RUtil.g(".tb-btn-basket");
		if(basket){
			basket.innerHTML = '<a id="TM-J_LinkBasket" href="javascript:;" rel="nofollow" ><i></i>加入购物车<span class="ensureText">确认</span></a>';
			EventUtil.addHandler(basket, "click", tips);
		}
	},

	"taobaoItem" : function(){
		var node = RUtil.g(".tb-btn-buy");
		if(node){
			node.innerHTML = '<a id="TM-J_LinkBuy" href="javascript:;" rel="nofollow"  data-addFastBuy="true"  title="点击此按钮，到下一步确认购买信息。">立即购买</a>';
			EventUtil.addHandler(node, "click", tips);
		}

		var basket = RUtil.g(".tb-btn-add");
		if(basket){
			basket.innerHTML = '<a id="TM-J_LinkBasket" href="javascript:;" rel="nofollow" title="加入购物车"  class="TB_J_LinkAdd" >加入购物车</a>';
			EventUtil.addHandler(basket, "click", tips);
		}
		window.onload = function(){
			var jiesuan = RUtil.g(".btn-area");
			jiesuan.innerHTML = '<a href="javascript:void(0)" id="TM_J_Go" class="submit-btn" ><span>结&nbsp;算</span><b></b></a>';
			EventUtil.addHandler(jiesuan, "click", tips);
			//alert(jiesuan.innerHTML);
		};
	},

	"suningItem" : function(){
		var node = RUtil.g('.mainbtns');
		if(node){
			var html = '';
			html += '<a id="sBuyNowAddCart" class="btn-buynow" href="javascript:;" style="display: block;"><span>立即购买</span></a>';
			html += '<a id="sAddCart" class="btn-addcart" href="javascript:;"><span>加入购物车</span></a>';
			html += '<a id="sInerestBox" class="btn-collect" href="javascript:;"><span>收藏</span></a>';
			node.innerHTML = html;
			EventUtil.addHandler(node, "click", tips);
		}
	},

	"gomeItem" : function(){
		var node = RUtil.g('.temp-wrap1');
		if(node){
			var html = '';
			html += '<a href="javascript:;" class="addCart" id="gAddCart">加入购物车</a>';
			html += '<a href="javascript:;" id="gEasyShopping" title="快速购物可一键下单，快速购物，快速成单">快速购</a>';
			html += '<a href="javascript:;" class="stages" id="gPay_fenQi" style="display: inline;">分期付款</a>';
			node.innerHTML = html;
			EventUtil.addHandler(node, "click", tips);
		}
	},

	"yhdItem" : function(){
		var node = RUtil.g('#BtnArea');
		if(node){
			var html = '<a href="javascript:;" class="buy_btn6" rel="yAddCart" id="yAddCart" style=""><span>加入购物车</span></a>';
			node.innerHTML = html;
			EventUtil.addHandler(node, "click", tips);
		}
	},

	"dangdangItem" : function(){
		var node = RUtil.g(".buy_box_btn");
		if(node){
			var html = '';
			html += '<span id="viscosity_btn"><a href="javascript:void(0)" class="btn btn_buy" id="dd_part_buy_button" name="cart_buy"><i class="cart"></i>加入购物车</a></span>';
			html += '<a href="javascript:void(0)" class="btn_buy_now" id="dd_collect">收藏商品</a>';
			html += '<a href="javascript:void(0)" class="btn_buy_now" id="dd_buy_now_button">一键购买</a>';
			node.innerHTML = html;
			EventUtil.addHandler(node, "click", tips);
		}


		
	}

};




// 初始化URL ------------------------------------------------------------------------------------------------
if( options.rstatic == '0' ){
	var url = window.location.href;

	// http://item.jd.com/1064223.html
	var reg_jd = /^http:\/\/[\w]+.jd.com\/[\w-./?%&#=0-9]*$/;
	var reg_taobao = /^https:\/\/[\w]+.taobao.com\/[\w-./?%&#=0-9]*$/;
	var reg_tmall = /^https:\/\/[\w.]+tmall.com\/[\w-./?%&#=0-9]*$/;
	var reg_suning = /^http:\/\/product.suning.com\/[\w-./?%&#=0-9]*$/;
	var reg_guomei = /^http:\/\/item.gome.com.cn\/[\w-./?%&#=0-9]*$/;
	var reg_yhd = /^http:\/\/item.yhd.com\/[\w-./?%&#=0-9\^]*$/;
	var regV_dangdang = /^http:\/\/[\w0-9]+.dangdang.com\/[\w-./?%&#=0-9]*$/;

	// 判断是那个商城,直接转向
	if( reg_jd.test(url) ){	// 京东 http://item.jd.com/
		buy.jdItem();
	}else if( reg_taobao.test(url) ){ // 淘宝
		buy.taobaoItem();
	}else if( reg_tmall.test(url) ){ // 天猫
		buy.tmallItem();
	}else if( reg_suning.test(url) ){ // 苏宁
		buy.suningItem();
	}else if( reg_guomei.test(url) ){ // 国美
		buy.gomeItem();
	}else if( reg_yhd.test(url) ){	// 一号店
		buy.yhdItem();
	}else if( regV_dangdang.test(url) ){ // 当当
		buy.dangdangItem();
	}
}
