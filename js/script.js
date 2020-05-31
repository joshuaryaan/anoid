$(document).ready(function () { 
    //$( ".links a" ).hide();
    $(".menu").click(function(){
        $( ".links" ).fadeIn(300);
        $( ".links a" ).fadeIn(800);
    });
    $(".close").click(function(){
        $( ".links a" ).fadeOut(300);
        $( ".links" ).fadeOut(800);
    });
});