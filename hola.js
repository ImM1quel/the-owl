$(document).ready(function () {
    var hola=$('.sub').length;
    for (var i = 1; i <= hola; i++) {
        $('.num').append('<p>0</p>');
    }
    $('.sub').removeClass('activo');
    $('.sub:first').addClass('activo');
    $('.num p').click(function () {
        var nu=$(this).index()+1;
        $('.sub').removeClass('activo');
        $('.sub:nth-child('+ nu +')').addClass('activo');
    })
});