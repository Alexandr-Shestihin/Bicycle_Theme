	$(document).ready(function(){
		$('.header__burger').click(function(event){
			$('.header__burger, .header__menu').toggleClass('active');
			$('.header').toggleClass('header-active');
			$('body').toggleClass('lock');
		})
		$('.header__link').click(function(event){
			$('.header__burger, .header__menu').removeClass('active');
			$('.header').removeClass('header-active');
			$('body').removeClass('lock');
		})
		$('.slider__body').slick({
			arrows: false,// включает отображение стрелок
			dots: true,//включает точки
			adaptiveHeight: true,
			slidesToShow: 1, // кол-во слайдов
			slidesToScroll: 1, // кол-во одновременно пролистывающихся слайдов
			speed: 2000,
			easing: 'linear', //тип анимации
			infinite: true,
			initialSlide: 0,//номер начального слайда
			autoplay: true,
			autoplaySpeed: 5000, //скорость автоматического перелистывания
			pauseOnDotsHover: true, //отключение автопроигрования при наведении

			draggable: true, //Отлючение-включение свайпов на ПК
			swipe: true, //Отключение-включение свайпов на телефоне
			touchThreshold: 10,
			waitForAnimate: false, //делает более приятным прокрутку. Не трогать этот параметр
			centerMode: false, //делает как-бы слайд-шоу, и центрирует центральную картинку по центру
			variableWidth: false,//позволяет уменьшаться слайдеру при уменьшении экрана
			rows: 1,// увеличает кол-во содержимого
			slidesPerRow: 1,// с помощью предыдущего и данного параметра можно делать 2-х, 3-х и т. д. слайдер

			vertical: false,//делает вертикальный слайдер.Нужно отключить flex для .slick-track и включить verticalSwiping
			verticalSwiping:false,// в целом, работает так себе
			//asNavFor: '.sliderbig', связывает между собой слайдеры. Используется в Интернет-магазинах 
			 

		});
	})

// Зоракс
	
	//Числа
	//Если ставим обычное число, то перед функцией нужно ставить пробел. 2 .toFixed(5)
	//(Math.sqrt(16)); извлекает корень
	//(Math.pow(5,2)); возводит в степень, первое число это число, возводимое в степень, а второе число-это степень
	//(100 === 100); проверяет два операнда равны или нет
	//(100 !== "100"); проверяет равенство по типу
	//(100>1); возаращает данные логического типа (булеан)
	//(100<1);
	//(100>=1);
	//(100<=1);
	//(5 .toFixed(2)); кол-во знаков после точки (запятой)
	// (10%7); выводит остаток от деления
	//(10/7); обычные деление
	//n=n/20; для более сокращённого кода можно писать так n /=20;
	
	//Типы данных

	// var number = 1000, 
	// 	string = "Hello!",
	// 	Bool = true,
	// 	Null=null,
	// 	Undef=undefined;

	// 	console.log(typeof number);
	// 	console.log(typeof string);
	// 	console.log(typeof Bool);
	// 	console.log(typeof Null);
	// 	console.log(typeof Undef);


	// 	var obj = {name:"Сашес"},
	// 	array = [1,2,3,4],
	// 	regexp=/w+/g,
	// 	func = function() {};

	// 	console.log("");
	// 	console.log(typeof obj);
	// 	console.log(typeof array);
	// 	console.log(typeof regexp);
	// 	console.log(typeof func);


// Хауди хо


// jQuery("document").ready(function(){

// 	var a1 = "РФ";
// 	if (a1=="РФ"){
// 		jQuery(".lol").html("Плохо!");
// 	}else{
// 		jQuery(".lol").html("Хорошо!");
// 	}

// });

	//jQuery("button").on("click", function(){})-событие по клику
	// jQuery("body").append('<a href="http://google.com">Гугл блядь!</a>'); //добавляет

	// jQuery("div").remove(); //удаляет 

	// var i, katet1 = 10*10, katet2 = 20*20, katet12Sqrt=Math.sqrt(katet1+katet2);
	// i = jQuery("p").clone(); //клонирует
	// jQuery("body").append(i);

	// alert(Math.floor(katet12Sqrt));

	//alert("Зигхайль");


	// jQuery("input").on("change", function(){
	// 			var value1, value2, value3;
	// 			value1=jQuery(".v1").val();
	// 			value2=jQuery(".v2").val();
				
	// 			value1=parseInt(value1);
	// 			value2=parseInt(value2);

	// 			value3=value1+value2;

	// 			jQuery(".lol").html(value3);
				
	// });