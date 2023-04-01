$.fn.equalHeights = function(){
	var max_height = 0;
	$(this).each(function(){
		max_height = Math.max($(this).height(), max_height);
	});
	$(this).each(function(){
		$(this).height(max_height);
	});
};

$(window).load(function(){
    $('.pluse-check-info h2').equalHeights();
    $('.pluse-check-info p').equalHeights();
});
$(document).resize(function(){
    $('.pluse-check-info h2').equalHeights();
    $('.pluse-check-info p').equalHeights();
});
