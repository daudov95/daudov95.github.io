$(document).ready(function() {

/* мобильное меню */


	$('.mobile_menu').click(function(e){
		$(this).toggleClass('open');
		$('.mobile_menu_nav').toggleClass('active');

	});


/* Табы вопросов */

var text_tab = $(".tab_active").text();
$('.questions_blockinfo p').text(text_tab);

$('.questions a').click(function(e){
	e.preventDefault();
	var tab_id = $(this).attr('data-tab');


	// PC
	var text_tab = $("#" + tab_id + ' p').text();
	$('.questions_blockinfo p').text(text_tab);


	if($(".tab_active").attr('id') != tab_id) {
		$(".tab_active").removeClass('tab_active');

		$("#" + tab_id).toggleClass('tab_active');
	}

});



});


/* слайдер */
$(document).ready(function(){

// slide1
$('.slide').slick({
  	slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
	{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    }
  }
]
});

// slide2
$('.slider_news').slick({
  	slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
	{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    }
  }
]
});



});