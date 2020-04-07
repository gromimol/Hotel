
// slider
$('.slider.-main').slick({
	prevArrow: '<span class="slider__arrow -prev"><i class="icon icon-left"></i></span>',
	nextArrow: '<span class="slider__arrow -next"><i class="icon icon-right"></i></span>',
	appendArrows: '.slider__arrows--main',
});

$('.slider.-type-rooms').slick({
	prevArrow: '<span class="slider__arrow -prev"><i class="icon icon-left"></i></span>',
	nextArrow: '<span class="slider__arrow -next"><i class="icon icon-right"></i></span>',
	appendArrows: '.slider__arrows--rooms',
	variableWidth: true,
	slidesToScroll: 2,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			variableWidth: false,
			slidesToScroll: 1,
			slidesToShow: 2,
		}
	},
	{
		breakpoint: 640,
		settings: {
			variableWidth: false,
			slidesToScroll: 1,
			slidesToShow: 1,
		}
	}
	]
});

$('.slider.-type-offers').slick({
	prevArrow: '<span class="slider__arrow -prev"><i class="icon icon-left"></i></span>',
	nextArrow: '<span class="slider__arrow -next"><i class="icon icon-right"></i></span>',
	appendArrows: '.slider__arrows--offers',
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
	{
		breakpoint: 640,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});

$(window).on('load resize', function() {
	if ($(window).width() < 640) {
	$('.slider.-services .slider__container:not(.slick-initialized)').slick({
		prevArrow: '<span class="slider__arrow -prev"><i class="icon icon-left"></i></span>',
		nextArrow: '<span class="slider__arrow -next"><i class="icon icon-right"></i></span>',
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,

		responsive: [
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});
	}else{
		$(".slider.-services .slider__container.slick-initialized").slick("unslick");
	}
});

$('.slider.-type-news .slider__container').slick({
	prevArrow: '<span class="slider__arrow -prev"><i class="icon icon-left"></i></span>',
	nextArrow: '<span class="slider__arrow -next"><i class="icon icon-right"></i></span>',
	appendArrows: '.slider__arrows--news',
});

$('.slider.-type-reviews .slider__container').slick({
	prevArrow: '<span class="slider__arrow -prev"><i class="icon icon-left"></i></span>',
	nextArrow: '<span class="slider__arrow -next"><i class="icon icon-right"></i></span>',
	appendArrows: '.slider__arrows--reviews',
});

$('.slider.-inner-primary .slider__container').slick({
	prevArrow: '<span class="slider__arrow -prev"><i class="icon icon-left"></i></span>',
	nextArrow: '<span class="slider__arrow -next"><i class="icon icon-right"></i></span>',
});

$('.slider.-content-pv .slider__container.-images').slick({
	arrows: false,
	asNavFor: '.slider.-content-pv .slider__container.-thumbnails',
	fade: true,
	swipe: false
});


$('.slider.-content-pv .slider__container.-thumbnails').slick({
	arrows: false,
	asNavFor: '.slider.-content-pv .slider__container.-images',
	vertical: true,
	slidesToShow: 4,
	focusOnSelect: true
});



// scroll down
$('.scroll-down-block').on('click',function () {
	var t = $(this).closest("[data-section]"),
	e = t.height(),
	i = t.offset().top + e;
	$("html, body").animate({
		scrollTop: i
	}, 800)
});
