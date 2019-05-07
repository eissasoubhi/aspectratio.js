document.addEventListener("DOMContentLoaded", function(event) {
    if(jQuery)
    {
        var element = $('.aspectratio'),

        // aspect ratio width
        ar_width = element.data('ar-width'),

        // aspect ratio height
        ar_height = element.data('ar-height'),

        // whether the element is taking its parent full width
        full_width = element.data('ar-full_width') == undefined || element.data('ar-full_width') == true,

        // calculating aspect ratio factor
        aspect_ratio_factor = ar_height/ar_width,

        current_width, responsive_height,

        __resize,

        css = {};

        if( ! full_width)
        {
            // fix the element's maximum size to the given aspect ratio width and height
            css["max-width"] = ar_width,
            css["max-height"] = ar_height
        }

        element.css({
            "box-sizing" : 'border-box',
            // aspect ratio works only on block display elements
            "display" : 'block',
        });

        (__resize = function () {
            current_width = element.outerWidth();

            // calculate the aspect ratio height
            responsive_height = current_width * aspect_ratio_factor;

            css["height"] = responsive_height;

            element.css(css);
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
