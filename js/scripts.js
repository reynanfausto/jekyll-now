jQuery(window).load(function () {

	// will first fade out the loading animation
	jQuery("#loading-animation").fadeOut(function () {
		setTimeout(function () {
			$('#introLogo').addClass('bounceInDown')
		}, 500);

	});

	// will fade out the whole DIV that covers the website.
	jQuery("#preloader").delay(1000).fadeOut("slow");
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});