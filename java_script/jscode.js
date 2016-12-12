$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.navbar-default');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > 100) {
          $('.navbar-default').css('background-color', 'rgba(34,34,34,2.0)');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
});



