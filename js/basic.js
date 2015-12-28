
$(function(){
	/*图片标题显示的js控制*/
	$(".keji_img_1,.keji_img_2,.keji_read_1,.keji_read_2").mouseenter(function(){
		$(this).find(".mask_tit").stop();
		$(this).find(".mask_tit").slideDown();
	})
	$(".keji_img_1,.keji_img_2,.keji_read_1,.keji_read_2").mouseleave(function(){
		$(this).find(".mask_tit").stop();
		$(this).find(".mask_tit").slideUp();
	})

	/*幻灯图代码显示js控制*/
	var count = $(".channel_hot").size();
		$(".banner_point li").click(function(){
			$(".banner_point li").removeClass("point_active");
			$(this).addClass("point_active");
			var x=$(".point_active").index();
			$(".channel_hot").css("display","none");
			$(".channel_hot").eq(x).css("display","block");
		})
	/*内容页选项卡切换js*/
	  $(".content_sec_tab li").click(function(){
	    $(".content_sec_tab li").removeClass("con_active");
	    $(this).addClass("con_active");
	    var y=$(this).index();
	    $(".content_sec_details").css("display","none");
	    $(".content_sec_details").eq(y).css("display","block");
	  })

})
