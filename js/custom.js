var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);


if (isSafari) { 
  $('head').append('<link rel="stylesheet" type="text/css" href="css/safari.css">');
}

  // alert("ширина: " + $( window ).width() + " высота: " + $( window ).height());

jQuery(document).ready(function($) {

	// Мобильное меню

	$('.mobile_btn').click(function(){
		$(".mobile_menu_links").toggleClass("mobile_menu_active");
		$("html").toggleClass("o-h");
	});

	$('.nav__item a').click(function(){
		$(".mobile_menu_links").toggleClass("mobile_menu_active");
		$("html").toggleClass("o-h");
	});

	// Сплывающее окно и галерея

  $('.popup1, .popup2, .play_popup').magnificPopup({
      type: 'inline',
     	midClick: true
  });

  
	$('#open-popup').magnificPopup({
    items: [
      {
        src: 'img/icons/photo.png'
      },
      {
        src: 'img/icons/photo.png'
      },
      {
        src: 'img/icons/photo.png'
      },
      {
        src: 'img/icons/photo.png'
      },
      {
        src: 'img/icons/photo.png'
      }
    ],
    gallery: {
    	tCounter: '%curr% из %total%',
  	 	arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir% my_class"></button>', // markup of an arrow button
      enabled: true
    },
    type: 'image'
});

});	

// Плавная прокрутка якорь

$(document).ready(function(){
    $(".text_btn, .top_nav_links a, .nav__item a").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            // top = $(id).offset().top + 180;
            // top = $(id).offset().top - 100;
            top = $(id).offset().top - 2150;

        //анимируем переход на расстояние - top за 1500 мс
        if(id != "#start_popup" & id != "#premium_popup") {
        	$('body,html').animate({scrollTop: top}, 1500);
        }
    });
});



// переключение кнопки
$(document).ready(function(){
	$(".section5_btn").click(function(){
		$(".section5_btn_active").removeClass('section5_btn_active');
		$(".section5_btn").addClass('section5_btn_active');

		// тексты курса 1 неделя
		// #1
		$btn1_h31 = "01";
		$btn1_h1 = "Обзор площадки <br> Российский <br> Аукционный Дом";
		$btn1_p1 = "Практическое задание: "+ '<br>' + "Найдите раздел по продаже <br>имущества по банкротству";
		// #2
		$btn1_h32 = "02";
		$btn1_h2 = "Расширенные <br>параметры поиска";
		$btn1_p2 = "Практическое задание: <br>Практика по работе <br>с фильтром поиска";
		// #3
		$btn1_h33 = "03";
		$btn1_h3 = "Полный <br>пошаговый <br>поиск объектов";
		$btn1_p3 = "Практическое задание: <br>Найдите наш объект <br>из урока одним <br>из предложенных способом";
		// #4
		$btn1_h34 = "04";
		$btn1_h4 = "Читаем <br>информацию <br>о торгах и лотах";
		$btn1_p4 = "Практическое задание: <br>Соберите информацию <br>по нашему объекту";
		// #5
		$btn1_h35 = "05";
		$btn1_h5 = "Определяем <br>выгодную цену <br>за объект";
		$btn1_p5 = "Практическое задание: <br>Определите интересную <br>цену для объекта";

				// Меняем текст
		
		$(".section5_item1 h3").html($btn1_h31);
		$(".section5_item1 span").html($btn1_h1);
		$(".section5_item1 p").html($btn1_p1);

		$(".section5_item2 h3").html($btn1_h32);
		$(".section5_item2 span").html($btn1_h2);
		$(".section5_item2 p").html($btn1_p2);

		$(".section5_item3 h3").html($btn1_h33);
		$(".section5_item3 span").html($btn1_h3);
		$(".section5_item3 p").html($btn1_p3);

		$(".section5_item4 h3").html($btn1_h34);
		$(".section5_item4 span").html($btn1_h4);
		$(".section5_item4 p").html($btn1_p4);

		$(".section5_item5 h3").html($btn1_h35);
		$(".section5_item5 span").html($btn1_h5);
		$(".section5_item5 p").html($btn1_p5);
	});

	$(".section5_btn2").click(function(){
		$(".section5_btn_active").removeClass('section5_btn_active');
		$(".section5_btn2").addClass('section5_btn_active');

		// тексты курса 2 неделя
		// #1
		$btn2_h31 = "06";
		$btn2_h1 = "Стратегия 10 квартир";
		$btn2_p1 = "Задание: Вопросы по материалу";
		// #2
		$btn2_h32 = "07";
		$btn2_h2 = "Подготовка базы квартир";
		$btn2_p2 = "Практическое задание: Найдите 10 квартир со снижением цены";
		// #3
		$btn2_h33 = "08";
		$btn2_h3 = "График выгодных цен по квартирам";
		$btn2_p3 = "Практическое задание: Выписываем даты выгодных цен по квартирам";
		// #4
		$btn2_h34 = "09";
		$btn2_h4 = "Напоминание о начале торгов по квартирам";
		$btn2_p4 = "Практическое задание: Сделать напоминания о торгах по квартирам";
		// #5
		$btn2_h35 = "10";
		$btn2_h5 = "Отслеживание результатов и цепочки";
		$btn2_p5 = "Практическое задание: Замена квартир, которые мы не купили";

		// Меняем текст

		$(".section5_item1 h3").html($btn2_h31);
		$(".section5_item1 span").text($btn2_h1);
		$(".section5_item1 p").text($btn2_p1);

		$(".section5_item2 h3").html($btn2_h32);
		$(".section5_item2 span").text($btn2_h2);
		$(".section5_item2 p").text($btn2_p2);

		$(".section5_item3 h3").html($btn2_h33);
		$(".section5_item3 span").text($btn2_h3);
		$(".section5_item3 p").text($btn2_p3);

		$(".section5_item4 h3").html($btn2_h34);
		$(".section5_item4 span").text($btn2_h4);
		$(".section5_item4 p").text($btn2_p4);

		$(".section5_item5 h3").html($btn2_h35);
		$(".section5_item5 span").text($btn2_h5);
		$(".section5_item5 p").text($btn2_p5);

	});
});

