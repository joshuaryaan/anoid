$(document).ready(function () {  

    var away = false;
    
    if($(window).width() < 630)
        {
           $(".close").click(function(){
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
            $(".close").click(function(){
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