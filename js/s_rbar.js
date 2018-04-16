$(function(){
	$(".s_rbar_icons_pop").hover(function(){
		$(this).find(".s_rbar_icons_tip").css("display", "block").stop().animate({
			right: 37
		}, 400)
		$(this).find(".s_rbar_icons_arr").css("display", "block").stop().animate({
			right: 29
		}, 400)
		$(this).css("backgroundColor", "#bd0000");
	},function(){
		$(this).find(".s_rbar_icons_tip").css("display", "none").stop().animate({
			right: 65
		}, 400)
		$(this).find(".s_rbar_icons_arr").css("display", "none").stop().animate({
			right: 57
		}, 400)
		$(this).css("backgroundColor", "#000");
	})


	
	$(".s_rbar_tabsBrand").hover(function(){
		$(this).addClass("s_on");
	},function(){
		$(this).removeClass("s_on");
	})

	$(".s_rbar_tabsTop").hover(function(){
		$(this).addClass("s_on");
	},function(){
		$(this).removeClass("s_on");
	})
	

	
	
	$(".s_rbar").siblings().click(function(){
		$(".s_rbar").stop().animate({
			right: -230
		}, 400)
	})

	$(".s_rbar_tabsTop").click(function(){
		$(this).css("backgroundColor", "#bd0000").parent(".s_rbar_left").parent(".s_rbar").stop().animate({
			right: 0
		}, 400)

		$(this).siblings(".s_rbar_tabsBrand").css("backgroundColor", "#000");
		$(this).parent(".s_rbar_left").siblings(".s_rbar_right").find(".s_top").css("display", "block");
		$(this).parent(".s_rbar_left").siblings(".s_rbar_right").find(".s_brand").css("display", "none");
		$(".s_shop_dis").css("display", "none");
		$(".s_order_dis").css("display", "none");
	})

	$(".s_rbar_tabsBrand").click(function(){
		$(this).css("backgroundColor", "#bd0000").parent(".s_rbar_left").parent(".s_rbar").stop().animate({
			right: 0
		}, 400)
		
		$(this).siblings(".s_rbar_tabsTop").css("backgroundColor", "#000");
		$(this).parent(".s_rbar_left").siblings(".s_rbar_right").find(".s_brand").css("display", "block");
		$(this).parent(".s_rbar_left").siblings(".s_rbar_right").find(".s_top").css("display", "none");
		$(".s_shop_dis").css("display", "none");
		$(".s_order_dis").css("display", "none");
		
	})

	

	$(".s_other_hd").find("a").hover(function(){
		$(this).css("backgroundColor", "#323232").stop().animate({
			opacity: 1
		}, 400)
	},function(){
		$(this).css("backgroundColor", "#4c4c4c").stop().animate({
			opacity: 0.7
		}, 400)
	})

	$(".s_shop").click(function(){
		$(".s_rbar").stop().animate({
			right: 0
		}, 400)
		$(".s_shop_dis").css("display", "block").css("backgroundColor", "#eee");
		$(".s_brand").css("display", "none");
		$(".s_top").css("display", "none");
		$(".s_order_dis").css("display", "none");
		sc_msg();
	})

	$(".s_myorder").click(function(){
		$(".s_rbar").stop().animate({
			right: 0
		}, 400);
		$(".s_order_dis").css("display", "block");
		$(".s_shop_dis").css("display", "none");
		$(".s_brand").css("display", "none");
		$(".s_top").css("display", "none");
	})

})