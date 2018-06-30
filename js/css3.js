$(function(){
	$('.demo1').scroller();
	$('.indide-a').css({"width":"225px","height":"225","margin-left":"-37.5px","margin-top":"-37.5px","z-index":"10"});
	
	$('.indide-a').css("border","5px solid #e8b154");
	
	$(".inside a").click(function(){
		$('.indide-a').css("border","5px solid #555453");
	});
	$(".indide-a").click(function(){
		$('.indide-a').css("border","5px solid #e8b154");
	});
	$(".indide-a").hover(function(){
		$('.indide-a').css("border","5px solid #e8b154");
	});
	
	$(".one-tit1 .one-titUl li").hover(function(){
		$(this).addClass("animated shake");
	},function(){
		$(this).removeClass("animated shake");
	});
	
	$(".one-img3").hover(function(){
		$(this).addClass("animated rubberBand");
	},function(){
		$(this).removeClass("animated rubberBand");
	});
	
	$(".two-bgimg div").hover(function(){
		$twoanim = $(this).attr("twoAni");
		$("." + $twoanim).removeClass("fadeInLeft fadeInRight")
		$("." + $twoanim).addClass("tada");
	},function(){
		$("." + $twoanim).removeClass("tada");
	});
	
	$(".three-tit .three-ul li").hover(function(){
		$(this).addClass("animated bounce");
	},function(){
		$(this).removeClass("animated bounce");
	});
	
	$(".four-tit .four-ul li").hover(function(){
		$(this).addClass("animated rubberBand");
	},function(){
		$(this).removeClass("animated rubberBand");
	});
	
	$(".four-bgimg .four-divbox1 div").hover(function(){
		$animate = $(this).attr("anim");
		$("." + $animate).removeClass("bounceInLeft bounceInUp fadeInUp flash bounceInRight");
		$("." + $animate).addClass("pulse");
	},function(){
		$("." + $animate).removeClass("pulse");
	});
	
	$(".six-bgimg div span").hover(function(){
		$sixAins = $(this).attr("sixain");
		$("." + $sixAins).removeClass("bounceInLeft");
		$("." + $sixAins).addClass("tada");
	},function(){
		$("." + $sixAins).removeClass("tada");
	});
	
	$(".six-img3").hover(function(){
		$(this).removeClass("pulse");
		$(this).addClass("flash");
	},function(){
		$(this).removeClass("flash");
	});
	
	$(".div-xf a span").hover(function (){
		$(this).addClass("animated bounce");
	},function(){
		$(this).removeClass("animated bounce");
	});
	
	$(".three-pic img").click(function(){
		$(".three-divZ img").remove();
		$(".three-divZ").addClass("animated bounceInDown").show();
		$Mimg = $(this).attr("src");
		console.info($Mimg);
		$(".three-divZ").append("<img class='imgpk animated bounceInDown' src='images/three-1.jpg'/>");
		$(".three-divZ img").attr("src", $Mimg);
	});
	
	$(".three-divZ").click(function(){
		$(".three-divZ").removeClass("animated bounceInDown").hide();
		$(".three-divZ img").remove();
	});
	
	
	var imgl = $("div.pic img").size();
	var deg = 360 / imgl;
	var roY = 0;
	var rox = -10;
	var xn = 0,
		yn = 0;
	var play = null;

	$("div.pic img").each(function(i) {
		$(this).css({
			"transform": "rotateY(" + i * deg + "deg) translateZ(350px)"
		});
		$(this).attr('ondragstart', 'return false');
	});
	$(document).mousedown(function(ev) {

		var x_ = ev.clientX;
		var y_ = ev.clientY;
		clearInterval(play);
		$(this).bind("mousemove", function(ev) {

			var x = ev.clientX;
			var y = ev.clientY;

			xn = x - x_;
			yn = y - y_;
			varyn = y - y_;
			roY += xn * 0.1;
			rox -= yn * 0.1;

			$('div.pic').css({
				transform: 'perspective(800px) rotateX(' + rox + 'deg) rotateY(' + roY + 'deg)'
			})

			x_ = ev.clientX;
			y_ = ev.clientY;
		});
	}).mouseup(function() {
		$(this).unbind("mousemove");
		var play = setInterval(function() {
			xn *= 0.95;
			yn *= 0.95;
			if(Math.abs(xn) < 1 && Math.abs(yn) < 1) clearInterval(play);

			roY += xn * 0.2;
			rox -= yn * 0.1;
			$('div.pic').css({
				transform: 'perspective(800px) rotateX(' + rox + 'deg) rotateY(' + roY + 'deg)'
			})
		}, 30)
	});
	
});
