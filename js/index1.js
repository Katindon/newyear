window.onload=function(){
	// 图片预加载
	var imgs = [
		'images/lib.png',
		'images/music_pointer.png',
		'images/music_disc.png',
		'images/p1_bg.jpg',
		'images/p1_lantern.png',
		'images/p1_imooc.png',
		'images/p2_bg.jpg',
		'images/p2_circle_outer.png',
		'images/p2_circle_middle.png',
		'images/p2_circle_inner.png',
		'images/p2_2018.png',
		'images/p3_logo.png',
		'images/p3_title2.png',
		'images/p3_couplet_second.png',
		'images/p3_couplet_first.png',
		'images/p3_blessing.png'
	];
	var index = 0,
	len = imgs.length,
	count = 0,
	$progress = $('.progress');

	$.each(imgs,function(i,src){
		var imgObj = new Image();
		$(imgObj).on('load error',function(){
			$progress.html(Math.round((count + 1) / len * 100) + '%');
			if(count >= len - 1){
				$('#loading').hide();
			}
			count++;
		});
		imgObj.src = src;
	});


	console.log("网页可见区域宽：" + document.body.clientWidth);
	console.log("网页可见区域高：" + document.body.clientHeight);
	console.log("网页可见区域宽（包括边线的宽）：" + document.body.offsetWidth);
	console.log("网页可见区域高（包括边线的高）：" + document.body.offsetHeight);
	console.log("网页正文全文宽：" + document.body.scrollWidth);
	console.log("网页正文全文高：" + document.body.scrollHeight);
	console.log("网页被卷去的高：" + document.body.scrollTop);
	console.log("网页被卷去的左：" + document.body.scrollLeft);
	console.log("网页正文部分上：" + window.screenTop);
	console.log("网页正文部分左：" + window.screenLeft);
	console.log("屏幕分辨率的高：" + window.screen.height);
	console.log("屏幕分辨率的宽：" + window.screen.width);
	console.log("屏幕可用工作区高度：" + window.screen.availHeight);
	console.log("屏幕可用工作区宽度：" + window.screen.availWidth);

	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	var p1_lantern = document.getElementsByClassName("p1_lantern")[0];

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	audio.addEventListener("ended" , function(event){
		music.setAttribute("class","");
	},false)

// 	music.onclick=function(){
// 		if(audio.paused){
// 			audio.play();
// 			this.setAttribute("class","play");
// 		// this.style.animationPlayState = "running";
// 		}else{
// 			audio.pause();
// 			this.setAttribute("class","");
// 		// this.style.animationPlayState = "paused";
// 	}
// };
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class", "");
		}
	},false);

	p1_lantern.addEventListener("touchstart",function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut")
			page3.setAttribute("class","page fadeIn")
		},5500)
	},false);

};
