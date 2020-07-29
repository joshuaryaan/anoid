$(document).ready(function () {  

    $(".menu").click(function(){
        $( ".links" ).fadeIn(300);
        $( ".links a" ).fadeIn(800);
    });
    $(".close").click(function(){
        $( ".links a" ).fadeOut(300);
        $( ".links" ).fadeOut(800);
    });
    
    var away = false;
    
    if($(window).width() < 630)
        {
           $(".hide").click(function(){
              hideMenuMobile();
            });
            $(".open").click(function(){
              showMenuMobile();
            });
            $(document).scroll(function() {
                if ($(document).scrollTop() > 400) {
                    if (!away) {
                        away = true;
                        hideMenuMobile();
                    }
                } else { 
                }
            });
        } else {
            $(".hide").click(function(){
              hideMenu();
            });
            $(".open").click(function(){
              showMenu();
            });
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

function hideMenuMobile() {
  $(".pop-up").animate({
        right: '-=85%'
      }, 500, function() {
        // Animation complete.
      });
}

function showMenu() {
  $(".pop-up").animate({
        right: '+=300px'
      }, 400, function() {
        // Animation complete.
      });
}

function showMenuMobile() {
  $(".pop-up").animate({
        right: '+=85%'
      }, 500, function() {
        // Animation complete.
      });
}