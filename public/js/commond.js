$(document).ready(function() {
    $(".navbar-toggle").click(function(e) {
        if ( $(".navbar-toggle").hasClass('active') ) {
            $(".navbar-toggle").removeClass('active');
        } else {
            $(".navbar-toggle").removeClass('active');
            $(".navbar-toggle").addClass('active');
        }
    });
});

$(document).ready(function(){
    $('.dropdown-submenu a.arrow').on("click", function(e){
        if ( $(this).hasClass('open') ) {
            $(this).removeClass('open');
        } else {
            $(this).removeClass('open');
            $(this).addClass('open');
        };
        $('a.arrow').hasClass('open');
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

$(document).ready(function() {
    $(".btn-position").click(function(e) {
        if ( $(".btn-position").hasClass('active') ) {
            $(".btn-position").removeClass('active');
        } else {
            $(".btn-position").removeClass('active');
            $(".btn-position").addClass('active');
        }
    });
    $(".swap").click(function(e) {
        if ( $(".columnStyle").hasClass('rowStyle') ) {
            $(".columnStyle").removeClass('rowStyle');
        } else {
            $(".columnStyle").removeClass('rowStyle');
            $(".columnStyle").addClass('rowStyle');
        }
    });
});

var $btnScroll = $("#header");
$(window).scroll(function(){
    if ( $(this).scrollTop() > 100 && $btnScroll.hasClass("header") ){
        $btnScroll.removeClass("header").addClass("fixed-header");
    } else if($(this).scrollTop() <= 100 && $btnScroll.hasClass("fixed-header")) {
        $btnScroll.removeClass("fixed-header").addClass("header");
    }
});

$(window).scroll(function() {
    parallax();
});
function parallax() {
    var scrolled = $(window).scrollTop();
    $(".intro").css("top", -(scrolled * 0.1) + "px");
    $(".intro").css("opacity", 1 - scrolled * 0.01 / 10);
    $(".intro").css("opacity", 1 - scrolled * 0.01 / 10);
}
$(document).ready(function () {
    $(window).on('scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#parallax').css({
            'transform': 'translate3d(0, ' + -(scrolled * - 0.3) + 'px, 0)',
            // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 1000 // fade out at 400px from top
        });
    });
});

$(document).ready(function () {
    // clear input
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
            return false;
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
            return false;
        });
    });

    // start vars
    var slider = $('.fade_slider');
    // end vars

    if(slider !== undefined) {
        slider.slick({
            fade: true,
            dots: true,
            autoplaySpeed: 5000,
            autoplay: true
        });
    }//end slider




});

(function($){
    $(document).ready(function() {
        var manipulateNumberInput = function(e) {
            e.preventDefault();
            var $numberInput  = $(this).siblings('input[type=number]'),
                currentValue  = $numberInput.val() != '' && $numberInput.val() || 1,
                adjustedValue = parseInt( currentValue ) + ($(this).hasClass('plus') && 1 || -1);
            $numberInput.val( adjustedValue ).trigger('change');
        }
        var validateNumberInput = function(e) {
            var $numberInput = $(this),
                currentValue = parseInt( $numberInput.val() ),
                minimumValue = parseInt( $(this).attr('min') ),
                maximumValue = parseInt( $(this).attr('max') );
            if( currentValue < minimumValue ) $numberInput.val( minimumValue );
            if( currentValue > maximumValue ) $numberInput.val( maximumValue );
        }
        var $numberControls = $('.js-number-control');
        $numberControls.on( 'click', manipulateNumberInput );

        var $numberInputs = $('input[type=number]');
        $numberInputs.on( 'change', validateNumberInput );
    });

})(jQuery);

function getVals(){
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "<span class='number'>" + slide1 + "сом</span><i>-</i>  <span class='number'>" + slide2 + "сом </span>";
}

window.onload = function(){
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
    for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}

function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

$(window).load(function() {
    $(".loader").fadeOut();
    $(".load-inner").delay(100).fadeOut("slow");
});

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});

