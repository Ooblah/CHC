$(document).ready(function() {
	$('.nav-tabs a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$('#bar-1').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 80
	});

	$('#bar-2').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 56
	});

	$('#bar-3').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 99
	});

	$('#bar-4').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 87
	});

	$('#bar-5').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 77
	});

	$('#bar-6').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 99
	});

	$('#bar-7').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 21
	});

	$('#bar-8').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 55
	});

	$('#bar-9').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 8
	});

	//large bars
	$('#bar-10').jqbar({
		animationSpeed: 500,
		barColor: '#DA5959',
		orientation: 'h',
		barWidth: 20,
		label: 'Label',
		value: 77,
		barLength: 700
	});

	$('.poll button').click(function(e) {
		e.preventDefault();
		$('.poll h4').text('Thank you for voting!');
		$('.poll .radio').addClass('hidden');
		$('.poll button').addClass('hidden');
		$('.poll').append('<p>To redeem your # free AIRMILES click <a href="#">here</a>.</p><p>Not a collector? <a href="#">Sign up</a> now!</p>');
	});

});