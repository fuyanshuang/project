$(function(){
	$.ajax({
		url: "data/detail_data.json",
		type: "GET",
		success: function(res){
			var html = "";
			for(var i = 0; i < res[0].li.length; i++){
				html += '<li class="detail_li"><a href="minute.html"><img src="'+res[0].li[i].img+'" alt=""></a><div class="detail_p_div"><p>'+res[0].li[i].p1+'<s>'+res[0].li[i].s+'</s></p><p>'+res[0].li[i].p2+'</p><span>'+res[0].li[i].span+'</span></div><i>'+res[0].li[i].i+'</i></li>';
			}
			$(".detail_ul").html(html);
		}
	})

	
	
	$(".detail_ul").on("mouseover", "li", function(){
		$(this).find("a").css("borderColor", "#ccc");
		$(this).find("i").css("display", "block").stop().animate({
			bottom: -24
		}, 400)
		$(this).find(".detail_p_div").css("backgroundColor", "#f0f0f0");
	})
	$(".detail_ul").on("mouseout", "li", function(){
		$(this).find("a").css("borderColor", "#fff");
		$(this).find("i").stop().animate({
			bottom: -16
		}, 400).css("display", "none")
		$(this).find(".detail_p_div").css("backgroundColor", "#fff");
	})

	
	

})

