$(function() {
    var selectors = 'h1, h2, h3, h4';
    $('body').find(selectors).each(function() {
        $(this).prepend('夜の');
    });
});
