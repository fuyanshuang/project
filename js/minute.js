$(function(){


	/*$.ajax({
		url: "data/detail_data.json",
		type: "get",
		success: function(res){
			var html = "";
			for(var i = 0; i < res[0].li.length; i++){
				html = '<div class="mark_box"></div><img src="'+res[0].li[i].img+'" alt=""><div class="position_box"></div><div id="b_box"><div id="b_box_all"><img src="'+res[0].li[i].img+'" alt=""></div></div>';
				
			}

			$("#s_box").html(html);
		}
	})*/



	$(".minute_top_li").hover(function(){
		var src_img = $(this).find(".minute_top_li").find("img").src;
		$(this).css("borderColor", "#f60");
		
	},function(){
		$(this).css("borderColor", "#f0f0f0");
	})


	$(".minute_top_li").eq(0).hover(function(){
		$(this).parent(".minute_top_ul").siblings(".minute_a_img").find("img").attr("src", `//images.s.cn/images/goods/20160523/dfcc53b40599b525.jpg`);
	})
	$(".minute_top_li").eq(1).hover(function(){
		$(this).parent(".minute_top_ul").siblings(".minute_a_img").find("img").attr("src", `//images.s.cn/images/goods/20160523/be22c70c88db2a03.jpg`);
	})

	$(".minute_top_li").eq(2).hover(function(){
		$(this).parent(".minute_top_ul").siblings(".minute_a_img").find("img").attr("src", `///images.s.cn/images/goods/20160523/22b8a562cb76dee1.jpg`);
	})

	$(".minute_top_li").eq(3).hover(function(){
		$(this).parent(".minute_top_ul").siblings(".minute_a_img").find("img").attr("src", `//images.s.cn/images/goods/20160523/37b90a45d8e8e8cb.jpg`);
	})

	for(var i = 0; i < 4; i++){
		$(".minute_top_li").eq(i).click(function(){
			$(".minute_top_ul").find("li").find("i").removeClass();
			$(this).find("i").addClass("minute_top_i");

			$(".minute_top_ul").find("li").find("s").removeClass();
			$(this).find("s").addClass("minute_top_s");
		})
	}

	

	$(".minute_shop").click(function(){
		var id = this.id;
		var first = $.cookie("goods") == null ? true : false;

		if(first){
			$.cookie("goods", '[{id:' + id + ',num:1}]', {
				expires: 7
			});
		}else{
			var str = $.cookie("goods");
			var arr = eval(str);
			var same = false;

			for(var i in arr){
				if(arr[i].id == id){
					arr[i].num = arr[i].num + 1;
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr, {
						expires: 7
					});
					same = true;
					break;
				}
			}

			if(!same){
				var obj = {id: id, num: 1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {
					expires: 7
				});
			}
		}

		return false;
		
	})

	function sc_msg(){
		$.ajax({
			url: "data/minute_shop_data.json",
			type: "get",
			success: function(res){
				var sc_arr = eval($.cookie("goods"));
				var html = "";
				for(var i in sc_arr){
					html += '<li><div class="sc_goodsPic"><img src="'+res[sc_arr[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>安踏白+黑</p></div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsNum">商品数量:'+sc_arr[i].num+'</div></li>'
				}

				$(".s_shop_dis").html(html);
			}
		})
	}


})