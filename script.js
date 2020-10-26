$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
           document.getElementById('scrollToTopBtn').style.display = 'block'
        
        }else{
            $('.navbar').removeClass("sticky");
            document.getElementById('scrollToTopBtn').style.display = 'none'
        }
    });

    // toggle menu

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");

    });
});

    
  var typed6 = new Typed('#typed3', {
    strings: ['And I am a Web Developer and Enthusiast Learner...'],
    typeSpeed: 40,
    backSpeed: 0,
    loop: true
  });


