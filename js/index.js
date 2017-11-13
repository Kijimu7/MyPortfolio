
	jQuery(function($){
    	     $( '.nav-toggle' ).on('click', function(){
    	     $('.main-navigation').toggleClass('open');
    	     });
        });


$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e){
    e.preventDefault();
    
    var target = this.hash;
    var $target = $(target);
    
    $('html, body').animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });
    });
  });