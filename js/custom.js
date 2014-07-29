$(document).ready(function() {
	$('.nav-tabs a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$(document).ready(function () {

		$('#bar-1').jqbar({
			animationSpeed: 500,
			label: 'Label',
			value: 90,
			barColor: '#D64747',
			orientation: 'h',
			barWidth: 8 
		});

	});
});