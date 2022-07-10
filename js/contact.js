$(document).ready(function(){
    $(".social").mouseover(function(){
        $(this).text("SOCIAL MEDIA ACCOUNT");
    });
    $(".social").mouseleave(function(){
        $(this).text("SOCIAL");
    });
    $(".gmail").mouseover(function(){
        $(this).text("pjvigilia21@gmail.com");
    });
    $(".gmail").mouseleave(function(){
        $(this).text("Paul John Vigilia");
    });

    $(".twitter").mouseover(function(){
        $(".gmail").text("Paul Vigilia");
    });
    $(".twitter").mouseleave(function(){
        $(".gmail").text("Paul John Vigilia");
    });

    $(".linked-in").mouseover(function(){
        $(".gmail").text("pjvigilia21@gmail.com");
    });
    $(".linked-in").mouseleave(function(){
        $(".gmail").text("Paul John Vigilia");
    });

    $(".github").mouseover(function(){
        $(".gmail").text("PJ-Vigilia");
    });
    $(".github").mouseleave(function(){
        $(".gmail").text("Paul John Vigilia");
    });
})