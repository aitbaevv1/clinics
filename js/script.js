new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	
});

$(document).ready(function() {
	$(".bank__item").click(function() {
		$(this).toggleClass("active");
	}),
	$(".registr__agree-field").click(function() {
		$(".registr__agree-field").toggleClass("active");
	}),
	$(".header__burger").click(function(event) {
		$(".header__burger, .header__menu, .contacts").toggleClass("active");
	})
	$(".header__burger").click(function(event){
		$("body").toggleClass("lock");
	})


	// Fixed header
	let header = $(".header");
	let headerBody = $(".main");
	let headerBodyH = headerBody.innerHeight();
	let scrollPos = $(window).scrollTop()

	$(window).on("scroll load resize", function() {
		headerBodyH = headerBody.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > headerBodyH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
		
	});


	// Smoth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		$("body").removeClass("lock");
		$(".header__burger, .header__menu, .contacts").removeClass("active");
		$("html, body").animate({

			scrollTop: elementOffset - 50

		},1000);
		console.log(elementOffset);
		console.log(elementID);
	})

	

})