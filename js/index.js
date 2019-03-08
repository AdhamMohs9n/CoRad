$(function(){


    $('.first').click(function(){
        $('.one').show();
        $('.two').hide();
    });

    $('.second').click(function(){
        $('.two').show();
        $('.one').hide();
    });


    $(window).scroll(function(){
        var  scroll = $(this).scrollTop();
        if(scroll > 90 )
        {
            $('.header').slideDown();
        }
        else
        {
            $('.header').slideUp();
        }
    })



    $(".fancybox").fancybox();


        $('.one').css('display','block');
        $('div.acordion h3').click(function(){

        $(this).next().slideToggle();
        $('div.acordion p').not($(this).next()).slideUp();  
    })

    $(".download").click(function(){

        $('.timer').countTo();
        
    });


    $('.Show').click(function(){
        $('.left').show();
        $('.right').show();
        $('.Show').hide();
    });


    $('.All_Images').mixItUp();

    $("body").niceScroll();

    $('Back').click(function(){
        $(this).scrollTop(1500)
    })


    

});


// var mixer = mixitup('..All-Images');
// var mixer = mixitup(containerEl);
// var mixer = mixitup(containerEl, {
//     selectors: {
//         target: '.blog-item'
//     },
//     animation: {
//         duration: 300
//     }
// });