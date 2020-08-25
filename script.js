$(function(){
  $('dt').click(function(){
    $('dd').slideToggle();
  });
});

 $(function(){
  $('#page-top').hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 80){
      $('#page-top').fadeIn();
    } else{
      $('#page-top').fadeOut();
    }
  });
    $('#page-top').click(function(){
      $('body, html').animate({
        scrollTop: 0
      }, 500)
    });

 });


 $(function(){
   $('.course-item a').click(function(){

     var imgSrc = $(this).children().attr('src');
     $('.bigimg').children().attr('src', imgSrc);
     $('.modal').fadeIn();
     $('body, html').css('overflow-y','hidden');
     return false
    });

  $('body').click(function(){
    $('.modal').fadeOut();
    $('body, html').css('overflow-y', 'visible');
    return false
  });
 });

