var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);


function test() {
  if (mac) {
    // alert("MacOS");
	var isHrome = false;
	if (isSafari) { 
	    $("#zerna_animate").css('top', '200px');
	    $("#gift_animate").css('top', '1000px');
	    $("#monets_animate").css('top', '2500px');
	    $("#phone_animate").css('top', '3000px');
	    $("#check_animate").css('top', '3600px');
	    $("#divan_animate").css('top', '6050px');
	    $("#book_animate").css('top', '7250px');
	    $("#book2_animate").css('top', '8000px');
	    $("#ruka_animate").css('top', '8500px');
	    // alert("ne ok");
	}else {
		var isHrome = true;
		// alert("ok");
	}

  }else {
  	// alert("Windows");
  }
}

test();


// function get_ya_browser(){
//     var ua = navigator.userAgent;    
//     if (ua.search(/YaBrowser/) > 0) {
//     	return;
//     }
//     return 'Не Яндекс';
// }
 
// var browser = get_ya_browser();


if(device.desktop()) {


// Зерна кофе

$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".block_content3_text_img_items", 1, {x: "-600px", y: "550px"}, {x: "90px", y: "20px",  delay: 0, ease:   Power3. easeOut})
			// .fromTo ("#b3",1,{x: "200%"},{x: "100%", ease:    Power3. easeOut})
			// .fromTo ("#b2",1,{y: "0%"},{y: "50%", delay: 0.8, ease: Bounce. easeOut})
			// .fromTo ("#b4",1,{y: "-100%"},{y: "0%", delay: 0.8, ease: Bounce. easeOut});

	var scene = new ScrollMagic.Scene({
					triggerElement: "#zerna_animate",
					triggerHook: "onLeave",
					duration: "250%"
				})
				.setPin("#section22")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});

// Подарок
$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".section2 .section2_img", 1, {y: "-15px"}, {y: "-225px",  delay: 0, ease:   Power3. easeOut})

			if (mac) {
				var gduration = "140%";
			}else {
				var gduration = "180%";
			}

	var scene = new ScrollMagic.Scene({
					triggerElement: "#gift_animate",
					triggerHook: "onLeave",
					duration: gduration //110 предыдущий, 150% норм
				})
				.setPin("#section22")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});


// Монеты

	$(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// build tween
		var tween = TweenMax.to(".block_info_img img", 2, {scale:0.3,autoAlpha: 0, ease: Linear.easeNone});

		// build scene

			if (mac && !isSafari) {
				var mduration = "150%";
			}else {
				var mduration = "200%";
			}
			
		var scene = new ScrollMagic.Scene(
						{triggerElement: "#monets_animate", 
						duration: mduration, 
						// offset: 50
						})
						.setTween(tween)
						.setPin(".section33")
					  // .setClassToggle(".block_info_img img", "d-n")
						// .addIndicators()
						.addTo(controller);

	});


// Телефон

$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".block_info3 .block_info3_phone", 1, {y: "500px"}, {y: "-144px",  delay: 0, ease:   Power3. easeOut})


			if (mac) {
				if (!isSafari) {
					// Other Browser
					var tduration = "100%";
				}else {
					// Safari
					var tduration = "200%";
				}
			}else {
				// Windows browser
				var tduration = "100%";
			}
	var scene = new ScrollMagic.Scene({
					triggerElement: "#phone_animate",
					triggerHook: "onLeave",
					duration: tduration
				})
				.setPin("#section22")
				.setTween(wipeAnimation)
				// .addIndicators() // проверка 
				.addTo(controller);


	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".block_info3 .block_info2_text", 1, {y: "500px"}, {y: "-495px",  delay: 0, ease:   Power3. easeOut})

			if (mac) {
				if (!isSafari) {
					// Other Browser
					var ttduration = "100%";
				}else {
					// Safari
					var ttduration = "200%";
				}
			}else {
				// Windows browser
				var ttduration = "100%";
			}
	var scene = new ScrollMagic.Scene({
					triggerElement: "#phone_animate",
					triggerHook: "onLeave",
					duration: ttduration
				})
				.setPin("#section22")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);

});


// чек лист

$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".section4_blocks .section2_img", 1, {y: "250px"}, {y: "-100px",  delay: 0, ease:   Power3. easeOut})

	var scene = new ScrollMagic.Scene({
					triggerElement: "#check_animate",
					triggerHook: "onLeave",
					duration: "200%"
				})
				.setPin("#section22")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});

// Диван

$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".section5_block3_cont2_img", 1, {x: "700px"}, {x: "390px",  delay: 0, ease:   Power3. easeOut})


			if (mac) {
				var dduration = "120%";
			}else {
				var dduration = "350%";
			}
	var scene = new ScrollMagic.Scene({
					triggerElement: "#divan_animate",
					triggerHook: "onLeave",
					duration: dduration
				})
				.setPin("#sa")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});

// Первая книга

$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".section6_premium", 1, {y: "-100px"}, {y: "-330px",  delay: 0, ease:   Power3. easeOut})


			if (mac) {
				var bduration = "210%";
			}else {
				var bduration = "250%";
			}
	var scene = new ScrollMagic.Scene({
					triggerElement: "#book_animate",
					triggerHook: "onLeave",
					duration: bduration
				})
				.setPin("#book_animate2")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});

// Вторая книга

$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".section6_start", 1, {y: "-760px"}, {y: "-460px",  delay: 0, ease:   Power3. easeOut})


			if (mac) {
				var btduration = "200%";
			}else {
				var btduration = "300%";
			}
	var scene = new ScrollMagic.Scene({
					triggerElement: "#book2_animate",
					triggerHook: "onLeave",
					duration: btduration
				})
				.setPin("#book_animate2")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});

// Певая рука

$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".section7_left_hand", 1, {left: "-600px"}, {left: "0px",  delay: 0, ease:   Power3. easeOut})


			if (mac) {
				var lhduration = "250%";
			}else {
				var lhduration = "200%";
			}
	var scene = new ScrollMagic.Scene({
					triggerElement: "#ruka_animate",
					triggerHook: "onLeave",
					duration: lhduration
				})
				.setPin("#book_animate2")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});

// Вторая рука

$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".section7_right_hand", 1, {right: "-870px"}, {right: "0px",  delay: 0, ease:   Power3. easeOut})


			if (mac) {
				var rhduration = "150%";
			}else {
				var rhduration = "200%";
			}
	var scene = new ScrollMagic.Scene({
					triggerElement: "#ruka_animate",
					triggerHook: "onLeave",
					duration: rhduration
				})
				.setPin("#book_animate2")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});

};