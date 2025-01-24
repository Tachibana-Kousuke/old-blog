/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

/*!
 * Tata Blog v1.6.0 (http://startbootstrap.com)
 * Copyright 2024-2025 Tata Blog
 * Licensed under Apache 2.0 
 */

// Tooltip Init
// Unuse by Tata since V1.6: Titles now display by default so there is no need for tooltip
// $(function() {
//     $("[data-toggle='tooltip']").tooltip();
// });

// make all images responsive
/* 
 * Unuse by Tata
 * actually only Portfolio-Pages can't use it and only post-img need it.
 * so I modify the _layout/post and CSS to make post-img responsive!
 */
// $(function() {
//  $("img").addClass("img-responsive");
// });

// responsive tables
$(document).ready(function() {
    $("table").wrap("<div class='table-responsive'></div>");
    $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function() {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    var headerHeight = $('.navbar-custom').height(),
        bannerHeight  = $('.intro-header .container').height();     
    $(window).on('scroll', {
            previousTop: 0
        },
        function() {
            var currentTop = $(window).scrollTop(),
                $catalog = $('.side-catalog');

            //check if user is scrolling up by mouse or keyboard
            if (currentTop < this.previousTop) {
                //if scrolling up...
                if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                    $('.navbar-custom').addClass('is-visible');
                } else {
                    $('.navbar-custom').removeClass('is-visible is-fixed');
                }
            } else {
                //if scrolling down...
                $('.navbar-custom').removeClass('is-visible');
                if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) {
                    $('.navbar-custom').addClass('is-fixed');
                }
            }
            this.previousTop = currentTop;

            // Adjust the appearance of side-catalog
            $catalog.show(); // Ensure the catalog is shown during scroll
            if (currentTop > (bannerHeight + 41)) {
                // If scrolling past the banner, make the side catalog fixed
                $catalog.addClass('fixed');
            } else {
                // Otherwise, remove the fixed class
                $catalog.removeClass('fixed');
            }
        });
});
