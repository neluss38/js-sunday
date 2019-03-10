jQuery(document).ready(function () {
	$('.title-blue').mouseout(function(){
		$("#map").attr('src', 'images/fullmap.png');
        $(this).removeClass('active blue');
	}),
	$('.title-blue').mouseover( function(){
		$("#map").attr('src', 'images/bluemap.png');
        $(this).addClass('active blue');
	});
	$('.title-red').mouseout(function(){
		$("#map").attr('src', 'images/fullmap.png');
        $(this).removeClass('active red');
	}),
	$('.title-red').mouseover( function(){
		$("#map").attr('src', 'images/redmap.png');
        $(this).addClass('active red');
	});
	$('.title-green').mouseout(function(){
		$("#map").attr('src', 'images/fullmap.png');
        $(this).removeClass('active green');
	}),
	$('.title-green').mouseover( function(){
		$("#map").attr('src', 'images/greenmap.png');
        $(this).addClass('active green');
	});
	$('.title-yellow').mouseout(function(){
		$("#map").attr('src', 'images/fullmap.png');
        $(this).removeClass('active yellow');
	}),
	$('.title-yellow').mouseover( function(){
		$("#map").attr('src', 'images/yellowmap.png');
        $(this).addClass('active yellow');
	});
	$('.title-pink').mouseout(function(){
		$("#map").attr('src', 'images/fullmap.png');
        $(this).removeClass('active pink');
	}),
	$('.title-pink').mouseover( function(){
		$("#map").attr('src', 'images/pinkmap.png');
        $(this).addClass('active pink');
	});
});
