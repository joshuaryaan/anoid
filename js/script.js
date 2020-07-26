$(document).ready(function () { 
    $(".close").click(function(){
      hideMenu();
    });  

    var away = false;
    
    if($(window).width() < 630)
        {
           $(document).scroll(function() {
                if ($(document).scrollTop() > 400) {
                    if (!away) {
                        away = true;
                        $(".pop-up").animate({
                            right: '-=85%'
                          }, 400, function() {
                            // Animation complete.
                          });
                    }
                } else { 
                }
            });
        } else {
           $(document).scroll(function() {
            if ($(document).scrollTop() > 400) {
                if (!away) {
                    away = true;
                    hideMenu();
                }
            } else { 
            }
        });
        }
    
});

function hideMenu() {
  $(".pop-up").animate({
        right: '-=300px'
      }, 400, function() {
        // Animation complete.
      });
}