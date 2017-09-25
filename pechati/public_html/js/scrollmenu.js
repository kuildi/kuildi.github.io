$(document).ready(function() { 

  $(".menu a[href*=#]:not([href=#])").bind('click', function (event) { 
    var speed = 1000; //Скорость прокрутки 
    var corect = 39; //Корректировка 
    var thisHash = this.hash; 
    var targetOffset = $(thisHash).offset().top; 

    $(".menu a").removeClass(); 
    $(".menu a[href='"+thisHash+"']").addClass('activ'); 
    $("html,body").stop().animate({ 
      scrollTop: (targetOffset*1-corect) 
    }, speed ); 

    return false; 
  }); 

});