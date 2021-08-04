$(function () {

    $('.mainmenu').hide();
    $('.mainmenuAphorism').hide();


    $('.mainmenuBtn').click(function (event) {
        event.preventDefault();
        $(".mainmenu").animate({width:'toggle'}, 200);
        $(this).hide();
    })

    $('.hideMenu').click(function (event) {
        event.preventDefault();
        $(".mainmenu").animate({width:'toggle'}, 200);
        $('.mainmenuBtn').show();
    })

    let link = $('nav ul li #portfolLink, #contactsLink');

    link.on('click', function (e) {
        e.preventDefault();
        
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);
        $(".mainmenu").animate({width:'toggle'}, 200);
        $('.mainmenuBtn').show();
        $('html, body').animate({ scrollTop: target.offset().top - 70 }, 1000);


    })

})
