$(function(){
	
	$(".t_menu").find("li").find("a").hover(function(){
		$(this).css("text-decoration", "underline").css("color", "red");
	},
	function(){
		$(this).css("text-decoration", "none").css("color", "#666");
		$(".t_resgin").find("a").css("color", "#f60");
		$(".t_login").find("a").css("color", "#f60");
	})

	$(".second").hover(function(){
		$(this).find("ul").css("display", "block");
		$(this).find(".hd").css("display", "block");
	},
	function(){
		$(this).find("ul").css("display", "none");
		$(this).find(".hd").css("display", "none");
	})


	$(".nav_cat_dd").hover(function(){
		$(this).find(".triangle").css("display", "block");
		$(this).css("background", "#a90000");	
		$(this).find(".three_level_menu").css("display", "block");
	},
	function(){
		$(this).find(".triangle").css("display", "none");
		$(this).css("backgroundColor", "#1e1908");
		$(this).find(".three_level_menu").css("display", "none");	
	})

	$(".nav_cat_a").hover(function(){
		$(this).stop().animate({
			left: 7
		}, 300)
		
	},
	function(){
		$(this).stop().animate({
			left: 0
		}, 300)
	})


	$(".nav_cat").hover(function(){
		$(this).find(".nav_cat_dl").css("display", "block");
	},function(){
		$(this).find(".nav_cat_dl").css("display", "none");
	})

	$(".nav_cat_a").find("a").hover(function(){
		$(this).css("text-decoration", "underline");
	},function(){
		$(this).css("text-decoration", "none");
	})

	$(".div_men_img").hover(function(){
		$(this).css("border-color", "#ccc");
		$(this).find("img").css("left", "1px").css("top", "1px");
	},function(){
		$(this).css("border-color", "#fff");
		$(this).find("img").css("left", "0").css("top", "0");
	})

	$(".s_box_li").eq(2).hover(function(){
		$(this).siblings(".nav_first").find(".div_first_men").css("display", "block");
	},function(){
		$(this).siblings(".nav_first").find(".div_first_men").css("display", "none");
	})

	$(".s_box_li").eq(3).hover(function(){
		$(this).siblings(".nav_first").find(".div_woman").css("display", "block");
	},function(){
		$(this).siblings(".nav_first").find(".div_woman").css("display", "none");
	})

	$(".s_box_li").eq(4).hover(function(){
		$(this).siblings(".nav_first").find(".div_child").css("display", "block");
	},function(){
		$(this).siblings(".nav_first").find(".div_child").css("display", "none");
	})

	var arr = [".div_first_men", ".div_woman", ".div_child"];
	for(var i = 0; i < arr.length; i++){
		$(arr[i]).hover(function(){
			$(this).css("display", "block");
		},function(){
			$(this).css("display", "none");
		})
	}

	$(".three_level_al").hover(function(){
		$(this).stop().animate({
			left: 7
		}, 300)
	},function(){
		$(this).stop().animate({
			left: 0
		}, 300)
	})

	$(".the_last_li").hover(function(){
		$(this).find("img").css("display", "block");
	},function(){
		$(this).find("img").css("display", "none");
	})

	for(var i = 0; i < 3; i++){
		if(i < 2){
			$(".nav_r").find("a").eq(i).hover(function(){
				$(this).css("color", "#fc0").css("text-decoration", "underline");
			},function(){
				$(this).css("color", "#f6e9ea").css("text-decoration", "none");
			})
		}else{
			$(".nav_r").find("a").eq(i).hover(function(){
				$(this).css("text-decoration", "underline");
			},function(){
				$(this).css("text-decoration", "none");
			})
		}
	}


	/*
		轮播图
	 */
	
	var aBtns = $(".focus").find("ol").find("li");
	var oUl = $(".focus").find("ul");
	var aLis = oUl.find("li");

	var iNow = 0;
	var timer = null;

	aBtns.mouseover(function(){
		iNow = $(this).index();
		imgMove();
		clearInterval(timer);
	})

	var aImgs = $(".scroll_cons").find("li").find("img");
	function imgMove(){
		aBtns.removeClass("active").eq(iNow).addClass("active");
		aImgs.removeClass("first_img").eq(iNow).addClass("first_img");
		
	}

	function timerInner(){
		iNow++;
		iNow = iNow % 3;
		imgMove();
	}

	timer = setInterval(timerInner, 3000);

	aImgs.hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 3000);
	})

	
	$(".theme_li").hover(function(){
		var oI = $(this).find("i");
		oI.stop().animate({
			opacity: 1
		}, 100).css("box-shadow", "inset 0 0 0 4px #c00");
		// setInter(oI);
		
	}, function(){
		var oI = $(this).find("i");
		oI.stop().animate({
			opacity: 0
		}, 100);
	})


    /*var timerTimeout = null;
	function setInter(obj){
		// clearInterval(timerInter);
		timerInter = setInterval(function(){
			obj.css("border-color", "#c00");
		}, 200)
	}*/
	
	$(".asso_li_r").find("a").hover(function(){
		$(this).css("color", "#c80000");
	},function(){
		$(this).css("color", "#575757");
	})

	$(".asso_ul_l").find("li").hover(function(){
		$(this).css("opacity", "1");
	},function(){
		$(this).css("opacity", "0.6");
	})

	$(".fool_right").find("img").hover(function(){
		$(this).stop().animate({
			left: 0
		}, 300)
	},function(){
		$(this).stop().animate({
			left: 8
		}, 300)
	})

	var aFoolRs = $(".fool").find(".fool_right");
	for(var j = 0; j < 10; j++){
		for(var i = 0; i < 6; i++){
			var aDds = aFoolRs.eq(j).find("dd");
			if(i == 2 || i == 5){
				aDds.eq(i).css({
					"border-right": "none",
					"width": "198px"
				});
			}
			if(i > 2){
				aDds.eq(i).css({
					"border-bottom": "none",
					"height": "181px"
				});
			}
		}
	}

	var aFootLis = $(".foot_brand_ul").find("li");
	for(var i = 0; i < 20; i++){
		if(i == 9 || i == 19){
			aFootLis.eq(i).css({
				"border-right": "none",
				"width": "117px"
			});
		}
		if(i > 9){
			aFootLis.eq(i).css("border-bottom", "none");
		}
	}

	/*var timerFoot = null;
	function footRoll(objFoot){
		var _this = this;
		clearInterval(timerFoot);
		timerFoot = setInterval(function(){
			objFoot.style.top = objFoot.offsetHeitht + 5 + "px";
		}, 1000);
	}

	var oUlFoot = $(".roll_ul");
	footRoll(oUlFoot);*/
	var oUlFoot = $(".roll_ul");
	var aliFoots = oUlFoot.find("li");

	var iFnow = 0;
	var timerFoot = null;

	function footRoll(){
		oUlFoot.animate({
			top: -30 * iFnow
		}, 800, function(){
			if(iFnow == 3){
				iFnow = 0;
				oUlFoot.css("top", 0);
			}
		})
	}

	function timerFootInner(){
		iFnow++;
		footRoll();
	}

	timerFoot = setInterval(timerFootInner, 3000);
	
	$(".roll_ul").hover(function(){
		clearInterval(timerFoot);
	}, function(){
		timerFoot = setInterval(timerFootInner, 3000);
	})

})