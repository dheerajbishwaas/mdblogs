(function ($) {
    "use strict";
    $('.tpdemo-all').click(function() {
        // Check if the box is currently visible
        if ($('.tpdemolink-wrapper').css('right') === '0px') {
            // Hide the box
            $('.tpdemolink-wrapper').animate({right: '-288px'}, 300);
        } else {
            // Show the box
            $('.tpdemolink-wrapper').animate({right: '0'}, 300);
        }
    });
}(jQuery))