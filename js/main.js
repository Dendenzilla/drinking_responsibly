/*let burger = document.querySelector(".burger");
let nav__hidden = document.querySelector(".nav");
let txtA = document.querySelectorAll(".txtAni");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav__hidden.classList.toggle("active");
    txtA.classList.toggle("active");
}); */
$('.burger').click(function(){
    $('.burger').toggleClass('active');
    $('.nav').toggleClass('active');
    $('.txtAni').toggleClass('active');
});

let stickyMenu = $('.facts').offset().top;
function stickyFct() {
    let scrollPage = $(window).scrollTop();
    if (scrollPage > stickyMenu) {
        $('.burger').addClass('stickyB');
    }else {
        $('.burger').removeClass('stickyB');
    }
}
$(window).scroll(function(){
    stickyFct();
});

////////////// CODE ANCHOR
$('a.txtAni').click(function(){
    $('.nav').removeClass('active');
    $('.txtAni').removeClass('active');
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    //return false;
    
});