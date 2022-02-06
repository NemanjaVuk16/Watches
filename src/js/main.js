function globalJS() {
    if (('ontouchstart' in window || navigator.msMaxTouchPoints > 0) && window.matchMedia('screen and (max-width: 1024px)').matches) {
        $('html').addClass('touch');
    } else {
        $('html').addClass('no-touch');
    }
}

function slider() {
    $('.testemonial-card-section').slick();
}


function replacePrev() {
    var element = $(".slick-prev");
    var textToReplace = element.text();
    var newText = textToReplace.replace("Previous", "");
    element.text(newText);
    element.addClass('icon-arrowleft');
}

function replaceNext() {
    var element = $(".slick-next");
    var textToReplace = element.text();
    var newText = textToReplace.replace("Next", "");
    element.text(newText);
    if ($('html').hasClass('touch')) {
        element.addClass('icon-arrow3');
    } else {
       element.addClass('icon-arrowright');
    }
}
slider();
globalJS();
replacePrev();
replaceNext();