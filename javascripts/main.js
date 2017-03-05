
$(document).ready(function () {


	// change navbar background color, margin, padding, and text color on scroll
	$(window).scroll(function () {
		if ($(document).scrollTop() > 100) {
			$('.navbar').addClass('scroll');
			$('.navbar-default .navbar-brand').addClass('scroll');
			$('.navbar-brand img').addClass('scroll');
			$('.navbar-collapse').addClass('scroll');
		} else {
			$('.navbar, .navbar-default .navbar-brand').removeClass('scroll');
			$('.navbar-default .navbar-brand').removeClass('scroll');
			$('.navbar-brand img').removeClass('scroll');
			$('.navbar-collapse').removeClass('scroll');
		}
	});


	$(window).scroll(function () {

		if ($(this).scrollTop() < $('section[data-anchor="top"]').offset().top) {
			$('li').removeClass('active');
		}

		if ($(this).scrollTop() >= $('section[data-anchor="top"]').offset().top) {
			$('li').removeClass('active');
			$('li a:eq(0)').addClass('active');
		}
		if ($(this).scrollTop() >= $('section[data-anchor="news"]').offset().top) {
			$('nav a').removeClass('active');
			$('nav a:eq(1)').addClass('active');
		}
		if ($(this).scrollTop() >= $('section[data-anchor="products"]').offset().top) {
			$('nav a').removeClass('active');
			$('nav a:eq(2)').addClass('active');
		}
		if ($(this).scrollTop() >= $('section[data-anchor="contact"]').offset().top) {
			$('nav a').removeClass('active');
			$('nav a:eq(3)').addClass('active');
		}

	});





	$('#map').googleMap({
		zoom: 6, // Initial zoom level (optional)
		coords: [46.1270048, 4.1599028], // Map center (optional)
		type: 'ROADMAP', // Map type (optional)
	});

	// Marker 1
	$('#map').addMarker({
		coords: [45.746404, 4.824766],
	});

	// Marker 2
	$('#map').addMarker({
		coords: [48.4735294, 1.0098665],
	});

	// Marker 3
	$('#map').addMarker({
		coords: [43.601519, 1.439835],
	});
	// Marker 4
	$('#map').addMarker({
		coords: [47.8938701, 1.8920055],
	});
	// Marker 5
	$('#map').addMarker({
		coords: [44.8336476, -0.5682131],
	});
	// Marker 6
	$('#map').addMarker({
		coords: [48.4037414, 2.6921273],
	});
});
