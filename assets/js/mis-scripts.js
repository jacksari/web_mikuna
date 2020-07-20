$(function() {

    /*-------------------------------------------
    Funciones para el menú principal
    --------------------------------------------*/

    // Inserta la clase 'icono-cerrar' al boton menu
    $('#menu-navegacion .navbar-toggler').click(function() {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    // Al hacer click en un enlace del menu principal
    $('#menu-navegacion .navbar-nav a').click(function() {

        // Quita la clase .icono.cerrar
        $('.boton-menu').removeClass('icono-cerrar');
        // Contrare menu
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /*-------------------------------------------
    Iniciando Swiper
    --------------------------------------------*/

    var swiper = new Swiper('#animacion', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        speed: 500,
        effect: 'fade',
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2000
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        }
    });

    // Iniciando venobox  

    $(document).ready(function() {
        $('.venobox-video').venobox({
            //framewidth: '800px', // default: ''
            //frameheight: '400px',
            autoplay: true,
            bgcolor: 'rgba(255, 255, 255, 0.79)',
            border: '5px',
            closeBackground: '#00ad75',
            //overlayClose: true
            spinner: 'cube-grid',
        });
    });

    // Efectos jarallax
    jarallax(document.querySelectorAll('.jarallax'));

    // Efectos Counter
    $('.counter').counterUp();


})