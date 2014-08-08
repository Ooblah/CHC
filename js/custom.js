$(document).ready(function() {
	$('.nav-tabs a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$('#bar-1').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 80,
		barLength: 170
	});

	$('#bar-2').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 56,
		barLength: 170
	});

	$('#bar-3').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 99,
		barLength: 170
	});

	$('#bar-4').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 87,
		barLength: 170
	});

	$('#bar-5').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 77,
		barLength: 170
	});

	$('#bar-6').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 99,
		barLength: 170
	});

	$('#bar-7').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 21,
		barLength: 170
	});

	$('#bar-8').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 55,
		barLength: 170
	});

	$('#bar-9').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 8,
		barLength: 170
	});

	//large bars
	$('#bar-10').jqbar({
		animationSpeed: 500,
		barColor: '#0f6b99',
		orientation: 'h',
		barWidth: 8,
		label: 'Label',
		value: 77,
		barLength: 170
	});

	$('.poll button').click(function(e) {
		e.preventDefault();
		$('.poll h4').text('Thank you for voting!');
		$('.poll .radio').addClass('hidden');
		$('.poll button').addClass('hidden');
		$('.poll').append('<p>To redeem your # free AIRMILES click <a href="#">here</a>.</p><p>Not a collector? <a href="#">Enroll Now</a>!</p>');
	});

	$('#myModal .modal-footer .confirm').on('click', function() {
		$('#myModal .modal-footer').html('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
		$('#myModal .modal-body').html('<p>Thank you for donating <b>X</b> AIRMILES Dream to <b>Charity X</b>! We are one step closer to reaching our goal!</p>' + 
			'<h4>Share your donation!</h4>');
	});

});