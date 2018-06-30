$(function () {
	$(document).ready(function () {
		$('#fullpage').fullpage({
			//		sectionsColor: ['orange', '#5c7ff1', 'green', '#cccccc', '#5c7ff1','green'], 
			//控制每个section的背景颜色
			controlArrow: true, //是否隐藏左右滑块的箭头(默认为true)
			verticalCentered: true, //内容是否垂直居中(默认为true)
			css3: true, //是否使用 CSS3 transforms 滚动(默认为false)
			resize: false, //字体是否随着窗口缩放而缩放(默认为false)
			scrolllingSpeed: 700, //滚动速度，单位为毫秒(默认为700)
			anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
			//定义锚链接(值不能和页面中任意的id或name相同，尤其是在ie下，定义时不需要加#)
			lockAnchors: false, //是否锁定锚链接，默认为false。设置weitrue时，锚链接anchors属性也没有效果。
			loopBottom: false, //滚动到最底部后是否滚回顶部(默认为false)
			loopTop: false, //滚动到最顶部后是否滚底部
			loopHorizontal: true, //左右滑块是否循环滑动
			autoScrolling: true, // 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
			scrollBar: false, //是否显示滚动条，为true是一滚动就是一整屏
			fixedElements: ".logo", //固定元素
			menu: ".menu",
			keyboardScrolling: true, //是否使用键盘方向键导航(默认为true)
			keyboardScrolling: true, //页面是否循环滚动（默认为false）
			navigation: true, //是否显示项目导航（默认为false）
			navigationTooltips: ['首页', '产品模块', '产品案例', '商务合作', "关于我们", "联系我们"],
			//项目导航的 tip
			navigationColor: '#fff', //项目导航的颜色
			slidesNavigation: true,

			afterRender: function () {
				setTimeout(function () {
					$(".menu").addClass("animated bounceInDown").css("opacity", "1");
				}, 1000);
				setTimeout(function () {
					$(".one-img12").addClass("animated bounceIn").css("opacity", "1");
				}, 800);
				setTimeout(function () {
					$(".one-img13").addClass("animated bounceInLeft").css("opacity", "1");
				}, 2000);
				setTimeout(function () {
					$(".one-img13").addClass("flipInY");
				}, 5500);
				setTimeout(function () {
					$(".one-img14").addClass("animated bounceInRight").css("opacity", "1");
				}, 3000);
				setTimeout(function () {
					$(".one-tit1").addClass("animated bounceInUp").css("opacity", "1");
				}, 4000);
			},
			afterSlideLoad: function (anchorLink, index, slideIndex, direction) {
				if (slideIndex == '0') {
					$('.qiuqiu').find('img').removeClass('flip animated show')
					$('.two-title-nav').find('img').removeClass('fadeInDown animated show')
					setTimeout(function () {
						$($('.qiuqiu')[0]).children('img').addClass('flip animated show')
						$($('.two-title-nav')[0]).children('img').addClass('fadeInDown animated show')
					}, 100);
				}
				if (slideIndex == '1') {
					$('.qiuqiu').find('img').removeClass('flip animated show')
					$('.two-title-nav').find('img').removeClass('fadeInDown animated show')

					setTimeout(function () {
						$($('.qiuqiu')[1]).children('img').addClass('flip animated show')
						$($('.two-title-nav')[1]).children('img').addClass('fadeInDown animated show')
					}, 100);
				}
				if (slideIndex == '2') {
					$('.qiuqiu').find('img').removeClass('flip animated show')
					$('.two-title-nav').find('img').removeClass('fadeInDown animated show')
					setTimeout(function () {
						$($('.qiuqiu')[2]).children('img').addClass('flip animated show')
						$($('.two-title-nav')[2]).children('img').addClass('fadeInDown animated show')
					}, 100);
				}
				if (slideIndex == '3') {
					$('.qiuqiu').find('img').removeClass('flip animated show')
					$('.two-title-nav').find('img').removeClass('fadeInDown animated show')
					setTimeout(function () {
						$($('.qiuqiu')[3]).children('img').addClass('flip animated show')
						$($('.two-title-nav')[3]).children('img').addClass('fadeInDown animated show')
					}, 100);
				}
			},
			onSlideLeave: function (index, direction, slideIndex, direction) {
				//第一小屏
				$(".one-img12").removeClass("animated bounceIn").css("opacity", "0");
				$(".one-img13").removeClass("animated bounceInLeft flipInY").css("opacity", "0");
				$(".one-img14").removeClass("animated bounceInRight").css("opacity", "0");
				$(".one-tit1").removeClass("animated bounceInUp").css("opacity", "0");
				//第二小屏
				$(".ong-img2").removeClass("animated bounceInLeft").css("opacity", "0");
				$(".one-img3").removeClass("animated flash").css("opacity", "0");
				$(".img-bg1").removeClass("animated fadeInRight").css("opacity", "0");
				//第三小屏
				$(".three-img1").removeClass("animated fadeInRight").css("opacity", "0");
				$(".three-img2").removeClass("animated lightSpeedIn").css("opacity", "0");
				$(".three-tit").removeClass("animated rotateInUpLeft").css("opacity", "0");
				//第四小屏
				$(".one-img15").removeClass("animated bounceInDown").css("opacity", "0");
				$(".one-img16").removeClass("animated flipInY").css("opacity", "0");
				$(".four-tit").removeClass("animated fadeInUp").css("opacity", "0");

			},
			afterLoad: function (anchorLink, index) {
				if (index == '1') {
					slide1();
					//第一屏
					setTimeout(function () {
						$(".one-img12").addClass("animated bounceIn").css("opacity", "1");
					}, 800);
					setTimeout(function () {
						$(".one-img13").addClass("animated bounceInLeft").css("opacity", "1");
					}, 2000);
					setTimeout(function () {
						$(".one-img13").addClass("flipInY");
					}, 5500);
					setTimeout(function () {
						$(".one-img14").addClass("animated bounceInRight").css("opacity", "1");
					}, 3000);
					setTimeout(function () {
						$(".one-tit1").addClass("animated bounceInUp").css("opacity", "1");
					}, 4000);
					//第二屏
					setTimeout(function () {
						$(".ong-img2").addClass("animated bounceInLeft").css("opacity", "1");
					}, 800);
					setTimeout(function () {
						$(".one-img3").addClass("animated flash").css("opacity", "1");
					}, 3300);
					setTimeout(function () {
						$(".img-bg1").addClass("animated fadeInRight").css("opacity", "1");
					}, 2300);
					//第三屏
					setTimeout(function () {
						$(".three-img1").addClass("animated fadeInRight").css("opacity", "1");
					}, 1000);
					setTimeout(function () {
						$(".three-img2").addClass("animated lightSpeedIn").css("opacity", "1");
					}, 2500);
					setTimeout(function () {
						$(".three-tit").addClass("animated rotateInUpLeft").css("opacity", "1");
					}, 2000);
					//第四屏
					setTimeout(function () {
						$(".one-img15").addClass("animated bounceInDown").css("opacity", "1");
					}, 1000);
					setTimeout(function () {
						$(".one-img16").addClass("animated flipInY").css("opacity", "1");
					}, 2000);
					setTimeout(function () {
						$(".four-tit").addClass("animated fadeInUp").css("opacity", "1");
					}, 3500);
				}
				if (index == '2') {
					slide2();
					setTimeout(function () {
						$(".two-divB").addClass("animated rotateIn").css("opacity", "1");
					}, 100);

					setTimeout(function () {
						$(".two-soprtImg").addClass("animated fadeInLeft").css("opacity", "1");
					}, 1000);
					setTimeout(function () {
						$(".two-img21").addClass("animated fadeInRight").css("opacity", "1");
					}, 1600);
					setTimeout(function () {
						$(".two-soprtTxt").addClass("animated bounceInRight").css("opacity", "1");
					}, 2200);

					setTimeout(function () {
						$(".two-liveImg").addClass("animated fadeInRight").css("opacity", "1");
					}, 1000);
					setTimeout(function () {
						$(".two-img22").addClass("animated fadeInLeft").css("opacity", "1");
					}, 1600);
					setTimeout(function () {
						$(".two-liveTxt").addClass("animated bounceInLeft").css("opacity", "1");
					}, 2200);

					setTimeout(function () {
						$(".two-gameImg").addClass("animated fadeInLeft").css("opacity", "1");
					}, 1000);
					setTimeout(function () {
						$(".two-img23").addClass("animated fadeInRight").css("opacity", "1");
					}, 1600);
					setTimeout(function () {
						$(".two-gameTxt").addClass("animated bounceInRight").css("opacity", "1");
					}, 2200);

					setTimeout(function () {
						$(".two-lottImg").addClass("animated fadeInRight").css("opacity", "1");
					}, 1000);
					setTimeout(function () {
						$(".two-img24").addClass("animated fadeInLeft").css("opacity", "1");
					}, 1600);
					setTimeout(function () {
						$(".two-lottTxt").addClass("animated bounceInLeft").css("opacity", "1");
					}, 2200);
				}
				if (index == '3') {
					slide3();
					setTimeout(function () {
						$(".three-img25").addClass("animated bounceInDown").css("opacity", "1");
					}, 400);


					setTimeout(function () {
						$(".three-pic").animate({
							top: '0px',
							opacity: '1'
						}, 'slow');
					}, 800);

				}
				if (index == '4') {
					slide4();
					if ($(".four-bgimg").hasClass("active")) {
						$(".showNav-click").addClass("showNav");
						var slideShow = $(".four-bgimg"),
							ul = slideShow.find(".four-divboxs .four-divbox"),
							showNumber = slideShow.find(".showNav span"),
							oneWidth = slideShow.find(".four-divboxs .four-divbox").eq(0).show();
						var timer = null;
						var iNow = 0;
						showNumber.on("click", function () {
							$(this).addClass("active-nav").siblings().removeClass("active-nav");
							var index = $(this).index();
							slideShow.find(".four-divboxs .four-divbox").eq(index).addClass("actBoc").show().siblings(".four-divbox").hide().removeClass("actBoc");
						});
						timer = setInterval(function () {
							iNow++;
							if (iNow > showNumber.length - 1) {
								iNow = 0;
							}
							showNumber.eq(iNow).trigger("click");
						}, 6000);

					}
					setTimeout(function () {
						$(".four-divboxs").show();
					}, 1000);
					setTimeout(function () {
						$(".four-imgtit").addClass("animated flipInX").css("opacity", "1");
					}, 1000);

					setTimeout(function () {
						$(".four-img1").addClass("animated bounceInLeft").css("opacity", "1");
					}, 1000);
					setTimeout(function () {
						$(".four-img2,.four-img3").addClass("animated bounceInUp").css("opacity", "1");
					}, 500);
					setTimeout(function () {
						$(".four-img4").addClass("animated bounceInRight").css("opacity", "1");
					}, 1000);

					setTimeout(function () {
						$(".four-img5").addClass("animated fadeInUp").css("opacity", "1");
					}, 1200);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(0).addClass("animated bounceInLeft").css("opacity", "1");
						$(".four-divbox2").find("div").eq(0).addClass("animated bounceInLeft").css("opacity", "1");
						$(".four-divbox3").find("div").eq(0).addClass("animated bounceInLeft").css("opacity", "1");
					}, 1300);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(1).addClass("animated bounceInLeft").css("opacity", "1");
						$(".four-divbox2").find("div").eq(1).addClass("animated bounceInLeft").css("opacity", "1");
						$(".four-divbox3").find("div").eq(1).addClass("animated bounceInLeft").css("opacity", "1");
					}, 1300);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(2).addClass("animated fadeInUp").css("opacity", "1");
						$(".four-divbox2").find("div").eq(2).addClass("animated fadeInUp").css("opacity", "1");
						$(".four-divbox3").find("div").eq(2).addClass("animated fadeInUp").css("opacity", "1");
					}, 2300);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(3).addClass("animated fadeInUp").css("opacity", "1");
						$(".four-divbox2").find("div").eq(3).addClass("animated fadeInUp").css("opacity", "1");
						$(".four-divbox3").find("div").eq(3).addClass("animated fadeInUp").css("opacity", "1");
					}, 2300);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(4).addClass("animated bounceIn").css("opacity", "1");
						$(".four-divbox2").find("div").eq(4).addClass("animated bounceIn").css("opacity", "1");
						$(".four-divbox3").find("div").eq(4).addClass("animated bounceIn").css("opacity", "1");
					}, 2300);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(5).addClass("animated fadeInUp").css("opacity", "1");
						$(".four-divbox2").find("div").eq(5).addClass("animated fadeInUp").css("opacity", "1");
						$(".four-divbox3").find("div").eq(5).addClass("animated fadeInUp").css("opacity", "1");
					}, 2300);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(6).addClass("animated fadeInUp").css("opacity", "1");
						$(".four-divbox2").find("div").eq(6).addClass("animated fadeInUp").css("opacity", "1");
						$(".four-divbox3").find("div").eq(6).addClass("animated fadeInUp").css("opacity", "1");
					}, 2300);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(7).addClass("animated bounceInRight").css("opacity", "1");
						$(".four-divbox2").find("div").eq(7).addClass("animated bounceInRight").css("opacity", "1");
						$(".four-divbox3").find("div").eq(7).addClass("animated bounceInRight").css("opacity", "1");
					}, 1300);

					setTimeout(function () {
						$(".four-divbox1").find("div").eq(8).addClass("animated bounceInRight").css("opacity", "1");
						$(".four-divbox2").find("div").eq(8).addClass("animated bounceInRight").css("opacity", "1");
						$(".four-divbox3").find("div").eq(8).addClass("animated bounceInRight").css("opacity", "1");
					}, 1300);

					setTimeout(function () {
						$(".showNav").addClass("animated bounceInUp").css("opacity", "1");
					}, 1000);

					setTimeout(function () {
						$(".four-img6").css("opacity", "1");
					}, 2500);
					setInterval(function () {
						$(".four-img6").addClass("animated swing");
					}, 2500);
					setInterval(function () {
						$(".four-img6").removeClass("animated swing");
					}, 6000);
				}
				if (index == '5') {
					slide5();
					$(".showNav-click").removeClass("showNav");
					setTimeout(function () {
						$(".five-imgtit").addClass("animated pulse").css("opacity", "1");
					}, 700);

					setTimeout(function () {
						$(".demo1").addClass("animated fadeInUp").css("opacity", "1");
					}, 1000);

					setTimeout(function () {
						$(".five-txt").addClass("animated bounceInUp").css("opacity", "1");
					}, 800);
				}
				if (index == '6') {
					slide6();
				}
			},
			onLeave: function (index, direction) {
				if (index == '1') {
					unslide1();
					//第二屏
					$(".two-divB").removeClass("animated rotateIn").css("opacity", "0");
					$(".two-soprtImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img21").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-soprtTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-liveImg").removeClass("animated fadeInRight").css("opacity", "0 ");
					$(".two-img22").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-liveTxt").removeClass("animated bounceInLeft").css("opacity", "0");

					$(".two-gameImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img23").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-gameTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-lottImg").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-img24").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-lottTxt").removeClass("animated bounceInLeft").css("opacity", "0");

					//第三屏
					$(".three-img25").removeClass("animated bounceInDown").css("opacity", "0");
					$(".three-pic").animate({
						top: '1000px',
						opacity: '0'
					});
					$(".three-divZ").css("display", "none");
					$(".three-divZ img").remove();

					//第四屏
					$(".four-imgtit").removeClass("animated flipInX").css("opacity", "0");
					$(".four-img1").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-img2,.four-img3").removeClass("animated bounceInUp").css("opacity", "0");
					$(".four-img4").removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-img5").removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox2").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox3").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox1").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox2").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox3").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox1").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox2").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox3").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox1").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox2").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox3").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox1").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox2").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox3").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".showNav").removeClass("animated bounceInUp").css("opacity", "0");
					$(".four-img6").css("opacity", "0");
					$(".four-img6").removeClass("animated swing");
					$(".four-img6").removeClass("animated swing");

					//第五屏
					$(".five-imgtit").removeClass("animated pulse").css("opacity", "0");
					$(".demo1").removeClass("animated fadeInUp").css("opacity", "0");
					$(".five-txt").removeClass("animated bounceInUp").css("opacity", "0");

					//第六屏
					$(".six-imgtit").removeClass("animated bounceInDown").css("opacity", "0");
					$(".six-wx").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-sk").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-qq").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-newspng").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-www").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-p,.six-p1,.six-p2").removeClass("animated fadeInRight").css("opacity", "0");
					$(".six-img2").removeClass("animated rotateInUpLeft").css("opacity", "0");
					$(".six-img3").removeClass("animated pulse").css("opacity", "0");
				}
				if (index == '2') {
					unslide2();
				}

				if (index == '3') {
					unslide3();
					//第一小屏
					$(".one-img12").removeClass("animated bounceIn").css("opacity", "0");
					$(".one-img13").removeClass("animated bounceInLeft flipInY").css("opacity", "0");
					$(".one-img14").removeClass("animated bounceInRight").css("opacity", "0");
					$(".one-tit1").removeClass("animated bounceInUp").css("opacity", "0");
					//第二小屏
					$(".ong-img2").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".one-img3").removeClass("animated flash").css("opacity", "0");
					$(".img-bg1").removeClass("animated fadeInRight").css("opacity", "0");
					//第三小屏
					$(".three-img1").removeClass("animated fadeInRight").css("opacity", "0");
					$(".three-img2").removeClass("animated lightSpeedIn").css("opacity", "0");
					$(".three-tit").removeClass("animated rotateInUpLeft").css("opacity", "0");
					//第四小屏
					$(".one-img15").removeClass("animated bounceInDown").css("opacity", "0");
					$(".one-img16").removeClass("animated flipInY").css("opacity", "0");
					$(".four-tit").removeClass("animated fadeInUp").css("opacity", "0");

					//第二屏
					$(".two-divB").removeClass("animated rotateIn").css("opacity", "0");
					$(".two-soprtImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img21").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-soprtTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-liveImg").removeClass("animated fadeInRight").css("opacity", "0 ");
					$(".two-img22").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-liveTxt").removeClass("animated bounceInLeft").css("opacity", "0");

					$(".two-gameImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img23").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-gameTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-lottImg").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-img24").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-lottTxt").removeClass("animated bounceInLeft").css("opacity", "0");

					//第四屏
					$(".four-imgtit").removeClass("animated flipInX").css("opacity", "0");
					$(".four-img1").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-img2,.four-img3").removeClass("animated bounceInUp").css("opacity", "0");
					$(".four-img4").removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-img5").removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox2").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox3").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox1").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox2").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox3").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox1").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox2").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox3").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox1").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox2").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox3").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox1").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox2").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox3").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".showNav").removeClass("animated bounceInUp").css("opacity", "0");
					$(".four-img6").css("opacity", "0");
					$(".four-img6").removeClass("animated swing");
					$(".four-img6").removeClass("animated swing");


					//第五屏
					$(".five-imgtit").removeClass("animated pulse").css("opacity", "0");
					$(".demo1").removeClass("animated fadeInUp").css("opacity", "0");
					$(".five-txt").removeClass("animated bounceInUp").css("opacity", "0");

					//第六屏
					$(".six-imgtit").removeClass("animated bounceInDown").css("opacity", "0");
					$(".six-wx").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-sk").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-qq").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-newspng").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-www").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-p,.six-p1,.six-p2").removeClass("animated fadeInRight").css("opacity", "0");
					$(".six-img2").removeClass("animated rotateInUpLeft").css("opacity", "0");
					$(".six-img3").removeClass("animated pulse").css("opacity", "0");
				}

				if (index == '4') {
					unslide4();
					//第一小屏
					$(".one-img12").removeClass("animated bounceIn").css("opacity", "0");
					$(".one-img13").removeClass("animated bounceInLeft flipInY").css("opacity", "0");
					$(".one-img14").removeClass("animated bounceInRight").css("opacity", "0");
					$(".one-tit1").removeClass("animated bounceInUp").css("opacity", "0");
					//第二小屏
					$(".ong-img2").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".one-img3").removeClass("animated flash").css("opacity", "0");
					$(".img-bg1").removeClass("animated fadeInRight").css("opacity", "0");
					//第三小屏
					$(".three-img1").removeClass("animated fadeInRight").css("opacity", "0");
					$(".three-img2").removeClass("animated lightSpeedIn").css("opacity", "0");
					$(".three-tit").removeClass("animated rotateInUpLeft").css("opacity", "0");
					//第四小屏
					$(".one-img15").removeClass("animated bounceInDown").css("opacity", "0");
					$(".one-img16").removeClass("animated flipInY").css("opacity", "0");
					$(".four-tit").removeClass("animated fadeInUp").css("opacity", "0");

					//第二屏
					$(".two-divB").removeClass("animated rotateIn").css("opacity", "0");
					$(".two-soprtImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img21").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-soprtTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-liveImg").removeClass("animated fadeInRight").css("opacity", "0 ");
					$(".two-img22").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-liveTxt").removeClass("animated bounceInLeft").css("opacity", "0");

					$(".two-gameImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img23").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-gameTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-lottImg").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-img24").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-lottTxt").removeClass("animated bounceInLeft").css("opacity", "0");



					//第三屏
					$(".three-img25").removeClass("animated bounceInDown").css("opacity", "0");
					$(".three-pic").animate({
						top: '1000px',
						opacity: '0'
					});
					$(".three-divZ").css("display", "none");
					$(".three-divZ img").remove();

					//第五屏
					$(".five-imgtit").removeClass("animated pulse").css("opacity", "0");
					$(".demo1").removeClass("animated fadeInUp").css("opacity", "0");
					$(".five-txt").removeClass("animated bounceInUp").css("opacity", "0");

					//第六屏
					$(".six-imgtit").removeClass("animated bounceInDown").css("opacity", "0");
					$(".six-wx").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-sk").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-qq").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-newspng").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-www").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-p,.six-p1,.six-p2").removeClass("animated fadeInRight").css("opacity", "0");
					$(".six-img2").removeClass("animated rotateInUpLeft").css("opacity", "0");
					$(".six-img3").removeClass("animated pulse").css("opacity", "0");
				}

				if (index == '5') {
					unslide5();
					//第一小屏
					$(".one-img12").removeClass("animated bounceIn").css("opacity", "0");
					$(".one-img13").removeClass("animated bounceInLeft flipInY").css("opacity", "0");
					$(".one-img14").removeClass("animated bounceInRight").css("opacity", "0");
					$(".one-tit1").removeClass("animated bounceInUp").css("opacity", "0");
					//第二小屏
					$(".ong-img2").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".one-img3").removeClass("animated flash").css("opacity", "0");
					$(".img-bg1").removeClass("animated fadeInRight").css("opacity", "0");
					//第三小屏
					$(".three-img1").removeClass("animated fadeInRight").css("opacity", "0");
					$(".three-img2").removeClass("animated lightSpeedIn").css("opacity", "0");
					$(".three-tit").removeClass("animated rotateInUpLeft").css("opacity", "0");
					//第四小屏
					$(".one-img15").removeClass("animated bounceInDown").css("opacity", "0");
					$(".one-img16").removeClass("animated flipInY").css("opacity", "0");
					$(".four-tit").removeClass("animated fadeInUp").css("opacity", "0");

					//第二屏
					$(".two-divB").removeClass("animated rotateIn").css("opacity", "0");
					$(".two-soprtImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img21").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-soprtTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-liveImg").removeClass("animated fadeInRight").css("opacity", "0 ");
					$(".two-img22").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-liveTxt").removeClass("animated bounceInLeft").css("opacity", "0");

					$(".two-gameImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img23").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-gameTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-lottImg").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-img24").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-lottTxt").removeClass("animated bounceInLeft").css("opacity", "0");


					//第三屏
					$(".three-img25").removeClass("animated bounceInDown").css("opacity", "0");
					$(".three-pic").animate({
						top: '1000px',
						opacity: '0'
					});
					$(".three-divZ").css("display", "none");
					$(".three-divZ img").remove();

					//第四屏

					$(".four-imgtit").removeClass("animated flipInX").css("opacity", "0");
					$(".four-img1").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-img2,.four-img3").removeClass("animated bounceInUp").css("opacity", "0");
					$(".four-img4").removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-img5").removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox2").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox3").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox1").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox2").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox3").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox1").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox2").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox3").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox1").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox2").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox3").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox1").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox2").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox3").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".showNav").removeClass("animated bounceInUp").css("opacity", "0");
					$(".four-img6").css("opacity", "0");
					$(".four-img6").removeClass("animated swing");
					$(".four-img6").removeClass("animated swing");

					//第六屏
					$(".six-imgtit").removeClass("animated bounceInDown").css("opacity", "0");
					$(".six-wx").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-sk").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-qq").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-newspng").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-www").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".six-p,.six-p1,.six-p2").removeClass("animated fadeInRight").css("opacity", "0");
					$(".six-img2").removeClass("animated rotateInUpLeft").css("opacity", "0");
					$(".six-img3").removeClass("animated pulse").css("opacity", "0");
				}

				if (index == '6') {
					unslide6();
					//第一小屏
					$(".one-img12").removeClass("animated bounceIn").css("opacity", "0");
					$(".one-img13").removeClass("animated bounceInLeft flipInY").css("opacity", "0");
					$(".one-img14").removeClass("animated bounceInRight").css("opacity", "0");
					$(".one-tit1").removeClass("animated bounceInUp").css("opacity", "0");
					//第二小屏
					$(".ong-img2").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".one-img3").removeClass("animated flash").css("opacity", "0");
					$(".img-bg1").removeClass("animated fadeInRight").css("opacity", "0");
					//第三小屏
					$(".three-img1").removeClass("animated fadeInRight").css("opacity", "0");
					$(".three-img2").removeClass("animated lightSpeedIn").css("opacity", "0");
					$(".three-tit").removeClass("animated rotateInUpLeft").css("opacity", "0");
					//第四小屏
					$(".one-img15").removeClass("animated bounceInDown").css("opacity", "0");
					$(".one-img16").removeClass("animated flipInY").css("opacity", "0");
					$(".four-tit").removeClass("animated fadeInUp").css("opacity", "0");

					//第二屏
					$(".two-divB").removeClass("animated rotateIn").css("opacity", "0");
					$(".two-soprtImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img21").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-soprtTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-liveImg").removeClass("animated fadeInRight").css("opacity", "0 ");
					$(".two-img22").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-liveTxt").removeClass("animated bounceInLeft").css("opacity", "0");

					$(".two-gameImg").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-img23").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-gameTxt").removeClass("animated bounceInRight").css("opacity", "0");

					$(".two-lottImg").removeClass("animated fadeInRight").css("opacity", "0");
					$(".two-img24").removeClass("animated fadeInLeft").css("opacity", "0");
					$(".two-lottTxt").removeClass("animated bounceInLeft").css("opacity", "0");


					//第三屏
					$(".three-img25").removeClass("animated bounceInDown").css("opacity", "0");
					$(".three-pic").animate({
						top: '1000px',
						opacity: '0'
					});
					$(".three-divZ").css("display", "none");
					$(".three-divZ img").remove();

					//第四屏
					$(".four-imgtit").removeClass("animated flipInX").css("opacity", "0");
					$(".four-img1").removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-img2,.four-img3").removeClass("animated bounceInUp").css("opacity", "0");
					$(".four-img4").removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-img5").removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox2").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox3").find("div").eq(0).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox1").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox2").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox3").find("div").eq(1).removeClass("animated bounceInLeft").css("opacity", "0");
					$(".four-divbox1").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(2).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(3).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox2").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox3").find("div").eq(4).removeClass("animated bounceIn").css("opacity", "0");
					$(".four-divbox1").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(5).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox2").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox3").find("div").eq(6).removeClass("animated fadeInUp").css("opacity", "0");
					$(".four-divbox1").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox2").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox3").find("div").eq(7).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox1").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox2").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".four-divbox3").find("div").eq(8).removeClass("animated bounceInRight").css("opacity", "0");
					$(".showNav").removeClass("animated bounceInUp").css("opacity", "0");
					$(".four-img6").css("opacity", "0");
					$(".four-img6").removeClass("animated swing");
					$(".four-img6").removeClass("animated swing");

					//第五屏
					$(".five-imgtit").removeClass("animated pulse").css("opacity", "0");
					$(".demo1").removeClass("animated fadeInUp").css("opacity", "0");
					$(".five-txt").removeClass("animated bounceInUp").css("opacity", "0");
				}
			}

		});

		setInterval(function () {
			$.fn.fullpage.moveSlideRight();
		}, 11000);

		// 第一屏
		$('.one_img img').mouseover(function () {
			$(this).addClass('animated pulse').siblings().removeClass('animated pulse')
		})
		// 第二屏
		$('.waibu').on("mouseover", "div", function () {
			$(this).addClass('animated tada').siblings().removeClass('animated tada bounceInLeft bounceInRight')
		})
		//四
		$('.qiuqiu img').hover(function () {
			$(this).addClass('animated tada').siblings().removeClass('animated tada bounceInLeft bounceInRight')
		})
		$('.two-title-nav img').hover(function () {
			$(this).addClass('animated pulse').siblings().removeClass('animated pulse')
		})
		Carousel.init($("#carousel"));
		$("#carousel").init();
	});
});

function unslide2() {
	var dom = $('.waibu');
	dom.removeClass('show')
	dom.find('.waibu1').removeClass('animated bounceInLeft')
	dom.find('.waibu2').removeClass('animated bounceInRight')
	dom.find('.waibu3').removeClass('animated bounceInLeft')
	dom.find('.waibu4').removeClass('animated bounceInRight')
}

function slide2() {
	var dom = $('.waibu');
	setTimeout(function () {
		dom.addClass('show')
		dom.find('.waibu1').addClass('animated bounceInLeft')
		dom.find('.waibu2').addClass('animated bounceInRight')
		dom.find('.waibu3').addClass('animated bounceInLeft')
		dom.find('.waibu4').addClass('animated bounceInRight')
	}, 500)
}

function unslide1() {
	$('.one-bgimg').removeClass('animated flipInX show')
}

function slide1() {
	$('.one-bgimg').addClass('animated flipInX show')
}

// 6屏
function unslide6() {
	var six = $('.six-bgimg'),
		six_title = six.find('.six_title'),
		con1 = six.find('.con1'),
		con2 = six.find('.con2'),
		bottom = six.find('.six-bottom');
	six_title.removeClass('animated bounceInUp show');
	con1.removeClass('animated bounce show');
	con2.removeClass('animated bounce show');
	bottom.removeClass('animated lightSpeedIn show');

}

function slide6() {
	var six = $('.six-bgimg'),
		six_title = six.find('.six_title'),
		con1 = six.find('.con1'),
		con2 = six.find('.con2'),
		bottom = six.find('.six-bottom');
	setTimeout(function () {
		six_title.addClass('animated bounceInUp show');
	}, 500)
	// bounce
	setTimeout(function () {
		con1.addClass('animated bounce show')
		con2.addClass('animated bounce show')
	}, 1300)

	// flipInY
	setTimeout(function () {
		bottom.addClass('animated lightSpeedIn show');
	}, 2000)

}

function unslide4() {
	$('.fourt').removeClass('animated fadeInUp show')
}

function slide4() {
	//flip
	$('.fourt').addClass('animated fadeInUp show')
}

function unslide5() {
	$('.title_info').find('.title').removeClass('animated fadeInUp show')
	$('.title_info').find('.women').removeClass('animated fadeInUpBig show')
	$('.title_info').find('.diannao').removeClass('animated fadeInUp show')
}

function slide5() {
	// fadeInUp
	$('.title_info').find('.title').addClass('animated fadeInUp show')
	setTimeout(function () {
		$('.title_info').find('.women').addClass('animated fadeInUpBig show')
	}, 300);
	setTimeout(function () {
		$('.title_info').find('.diannao').addClass('animated fadeInUp show')
	}, 1300);
}


function unslide3() {
	$('.poster-main').removeClass('animated fadeInUp show')
}

function slide3() {
	//flip
	$('.poster-main').addClass('animated fadeInUp show')
}