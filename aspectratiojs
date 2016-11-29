document.addEventListener("DOMContentLoaded", function(event) {
	if(jQuery)
	{
		var full_responsive = $('.aspectratio'),
	    ar_width = full_responsive.data('fr-width'),
	    ar_height = full_responsive.data('fr-height'),
	    fluid = full_responsive.data('fr-fluid') || true,
	    aspect_ratio = ar_height/ar_width,
	    current_width, responsive_height,
	    __resize,
	    css = {
	        "box-sizing" : 'border-box',
	    };

	    if(fluid)
	    {
	        css["max-width"] = ar_width,
	        css["max-height"] = ar_height
	    }

	    (__resize = function () {
	        current_width = full_responsive.outerWidth();
	        responsive_height = current_width * aspect_ratio;

	        css["height"] = responsive_height;

	        full_responsive.css(css);
	    })();

	    $(window).resize(function(event) {
	        __resize();
	    });
	}
	else
	{
		console.error('aspectratio requires jQuery to work');
	}
});
